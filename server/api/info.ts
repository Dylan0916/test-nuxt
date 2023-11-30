export default defineEventHandler(async (event) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  return 'hi ->' + event.node.req.method;
});
