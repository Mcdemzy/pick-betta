import {
  deepDiveLeagues as allLeagues, // Renamed import to avoid naming conflicts
  nbaMatches,
  nflMatches,
  ncaabMatches,
  nhlMatches,
  ncaafMatches,
  nbaDeepDiveStats,
  nflDeepDiveStats,
  ncaabDeepDiveStats,
  nhlDeepDiveStats,
  ncaafDeepDiveStats,
} from "@/components/shared/data";

// Map league names to their matches data
const leagueMatchesMap: Record<string, any[]> = {
  nba: nbaMatches,
  nfl: nflMatches,
  ncaab: ncaabMatches,
  nhl: nhlMatches,
  ncaaf: ncaafMatches,
};

// Map league names to their stats data
const leagueStatsMap: Record<string, any> = {
  nba: nbaDeepDiveStats,
  nfl: nflDeepDiveStats,
  ncaab: ncaabDeepDiveStats,
  nhl: nhlDeepDiveStats,
  ncaaf: ncaafDeepDiveStats,
};

export const deepDiveLeagues = allLeagues; // Export the leagues data

export function getLeagueMatches(league: string) {
  return leagueMatchesMap[league.toLowerCase()] || [];
}

export function getMatchStats(league: string, matchId: string) {
  const leagueStats = leagueStatsMap[league.toLowerCase()];
  return leagueStats?.find((stat: any) => stat.matchId === matchId) || null;
}

export function isValidLeague(league: string) {
  return deepDiveLeagues.some(
    (l: any) => l.name.toLowerCase() === league.toLowerCase()
  );
}
