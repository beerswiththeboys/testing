export async function load() {
  const leagueName =
    sessionStorage &&
    JSON.parse(sessionStorage.getItem("selectedLeague"))?.name;
  const leagueId =
    sessionStorage && JSON.parse(sessionStorage.getItem("selectedLeague"))?.id;

  return {
    leagueName,
    leagueId,
  };
}
