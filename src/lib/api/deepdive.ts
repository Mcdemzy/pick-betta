import {
  deepDiveLeagues as allLeagues,
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

export const deepDiveLeagues = allLeagues;

export function getLeagueMatches(league: string) {
  return leagueMatchesMap[league.toLowerCase()] || [];
}

export function getMatchStats(league: string, matchId: string) {
  const leagueStats = leagueStatsMap[league.toLowerCase()];
  return leagueStats?.find((stat: any) => stat.matchId === matchId) || null;
}

export function getLeagueStats(league: string) {
  switch (league.toLowerCase()) {
    case "nba":
      return nbaDeepDiveStats;
    case "nfl":
      return nflDeepDiveStats;
    case "nhl":
      return nhlDeepDiveStats;
    case "ncaab":
      return ncaabDeepDiveStats;
    case "ncaaf":
      return ncaafDeepDiveStats;
    default:
      // Return a default stats structure if needed
      return nbaDeepDiveStats; // or create a basic stats template
  }
}

export function isValidLeague(league: string) {
  return deepDiveLeagues.some(
    (l: any) => l.name.toLowerCase() === league.toLowerCase()
  );
}
