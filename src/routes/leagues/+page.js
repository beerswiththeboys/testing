export async function load() {
  const leagueName = JSON.parse(sessionStorage.getItem("selectedLeague"))?.name;
  const leagueId = JSON.parse(sessionStorage.getItem("selectedLeague"))?.id;

  return {
    leagueName,
    leagueId,
  };
}
