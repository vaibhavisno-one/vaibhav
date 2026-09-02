const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

/**
 * Get a fresh access token using the refresh token
 */
export async function getAccessToken() {
    console.log(' Refreshing access token...');


    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Token refresh failed:', data);
        throw new Error(`Token refresh failed: ${data.error || 'Unknown error'}`);
    }

    console.log('Access token refreshed');
    return data;
}


export async function getNowPlaying() {
    const { access_token } =
        await getAccessToken();

    const response = await fetch(
        NOW_PLAYING_ENDPOINT,
        {
            headers: {
                Authorization:
                    `Bearer ${access_token}`,
            },
        }
    );

    if (
        response.status === 204 ||
        response.status > 400
    ) {
        return getRecentlyPlayed(
            access_token
        );
    }

    const song =
        await response.json();

    if (
        !song ||
        !song.item
    ) {
        return getRecentlyPlayed(
            access_token
        );
    }

    return {
        isPlaying:
            song.is_playing,
        title:
            song.item.name,
        artist:
            song.item.artists
                .map(a => a.name)
                .join(", "),
        album:
            song.item.album.name,
        albumImageUrl:
            song.item.album
                .images?.[0]?.url,
        songUrl:
            song.item
                .external_urls
                .spotify,
    };
}


export async function getRecentlyPlayed(
    existingToken
) {

    let access_token =
        existingToken;

    if (!access_token) {
        const token =
            await getAccessToken();

        access_token =
            token.access_token;
    }

    const response =
        await fetch(
            RECENTLY_PLAYED_ENDPOINT,
            {
                headers: {
                    Authorization:
                        `Bearer ${access_token}`,
                },
            }
        );

    if (
        !response.ok
    ) {
        return null;
    }

    const data =
        await response.json();

    if (
        !data?.items?.length
    ) {
        return null;
    }

    const track =
        data.items[0].track;

    return {
        isPlaying: false,
        title:
            track.name,
        artist:
            track.artists
                .map(a => a.name)
                .join(", "),
        album:
            track.album.name,
        albumImageUrl:
            track.album
                .images?.[0]?.url,
        songUrl:
            track
                .external_urls
                .spotify,
    };
}
