export default defineEventHandler(async (event) => {
  // get zip code from query
  const { query } = getQuery(event);

  console.log(`doing a search for "${query}"`);

  const mapsData = await $fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json",
    {
      query: {
        query: query,
        radius: "50000",
        key: "AIzaSyAdQXFzjMjL1277HwWNSBJxONHB97cc7JE",
      },
    },
  );

  return mapsData["results"];
});
