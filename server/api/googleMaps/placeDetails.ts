export default defineEventHandler(async (event) => {
  // get place id code from query
  const { id } = getQuery(event);

  console.log(`getting place details for "${id}"`);

  const mapsData = await $fetch(
    "https://maps.googleapis.com/maps/api/place/details/json",
    {
      query: {
        place_id: id,
        key: "AIzaSyAdQXFzjMjL1277HwWNSBJxONHB97cc7JE",
      },
    },
  );

  return mapsData;
});
