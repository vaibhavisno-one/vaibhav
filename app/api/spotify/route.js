import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export const revalidate = 30; // Cache for 30 seconds

export async function GET() {
    try {
        console.log('🎵 Fetching Spotify data...');

        // Try to get currently playing track
        let track = await getNowPlaying();
        console.log('Now playing result:', track);

        // If nothing is playing, get recently played
        if (!track) {
            console.log('Nothing currently playing, fetching recently played...');
            track = await getRecentlyPlayed();
            console.log('Recently played result:', track);
        }

        // If still no data, return offline state
        if (!track) {
            console.log('⚠️ No track data available');
            return NextResponse.json({
                isPlaying: false,
                title: 'Not Playing',
                artist: 'Spotify',
                albumImageUrl: null,
                songUrl: null,
            });
        }

        console.log('✅ Returning track:', track.title);
        return NextResponse.json(track);
    } catch (error) {
        console.error('❌ Spotify API Error:', error);
        console.error('Error details:', error.message);
        console.error('Stack:', error.stack);

        return NextResponse.json(
            {
                isPlaying: false,
                title: 'Not Available',
                artist: 'Spotify',
                albumImageUrl: null,
                songUrl: null,
            },
            { status: 200 } // Return 200 to avoid client errors
        );
    }
}
