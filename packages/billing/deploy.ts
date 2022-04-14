export const main = () => {
  console.log(process.env);     
  throw new Error("error happneed");
};

main();

