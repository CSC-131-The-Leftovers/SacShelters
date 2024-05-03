// import { useFetch } from "nuxt/app";

export default defineEventHandler(async (event) => {
  // get zip code from query
  const { zip } = getQuery(event);

  // test api call
  // console.log("Api call happening now");
  // const testData = await $fetch("https://fakestoreapi.com/products", {
  //   query: {
  //     limit: 2,
  //   },
  // });
  // console.log("Test data:", testData);

  // api call
  const mapsData = await $fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json",
    {
      query: {
        query: "homeless shelters near 95628",
        radius: "50000",
        key: "AIzaSyAdQXFzjMjL1277HwWNSBJxONHB97cc7JE",
      },
    },
  );

  // api call
  // const { mapsData } = await $fetch(
  //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
  // );

  return {
    // message: `Hello this is definitely the google maps api. the zip you asked for is ${zip}`,
    mapsData,
  };
});
