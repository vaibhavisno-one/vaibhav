
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';


const CONTRIBUTIONS_QUERY = `
query($username: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $username) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}
`;

/**
 
 * @returns {Promise<Object>} 
 */


export async function fetchGitHubContributions() {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    if (!token || !username) {
        return {
            totalContributions: 0,
            weeks: [],
            lastContributionDate: null,
        };
    }

    try {
        const to = new Date();

        const from = new Date();
        from.setFullYear(to.getFullYear() - 1);

        const response = await fetch(GITHUB_GRAPHQL_API, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: CONTRIBUTIONS_QUERY,
                variables: {
                    username,
                    from: from.toISOString(),
                    to: to.toISOString(),
                },
            }),
            next: {
                revalidate: 3600
            }
        });

        const result = await response.json();

        if (result.errors) {
            throw new Error(result.errors[0].message);
        }

        const calendar =
            result.data.user.contributionsCollection.contributionCalendar;

        const flatDays =
            calendar.weeks.flatMap(w => w.contributionDays);

        const lastContributionDate =
            [...flatDays]
                .reverse()
                .find(d => d.contributionCount > 0)?.date ?? null;

        console.log({
            total: calendar.totalContributions,
            weeks: calendar.weeks.length,
            firstDay: calendar.weeks[0]?.contributionDays[0],
            lastDay: calendar.weeks.at(-1)?.contributionDays.at(-1),
            lastContributionDate
        });
        return {
            totalContributions: calendar.totalContributions,
            weeks: calendar.weeks,
            lastContributionDate,
        };

    } catch (err) {
        console.error(err);

        return {
            totalContributions: 0,
            weeks: [],
            lastContributionDate: null,
        };
    }
}