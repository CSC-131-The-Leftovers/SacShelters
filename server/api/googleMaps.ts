export default defineEventHandler((event) => {
  const { zip } = getQuery(event);

  return {
    message: `Hello this is definitely the google maps api. the zip you asked for is ${zip}`,
  };
});
