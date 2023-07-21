export const getWaypointsApi = (coords: string) => {
  return fetch('http://router.project-osrm.org/route/v1/driving/' + coords + '?steps=true');
};