export default defineEventHandler((event) => {
  const query = getQuery(event);

  console.log(query);
  return {
    message: `Hello this is definitely the google maps api`,
  };
});
