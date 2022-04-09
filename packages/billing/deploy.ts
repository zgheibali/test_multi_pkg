export const main = () => {
  console.log(process.env);  
  
  throw new Error("NOOOOOOOOOOOOO ERROR HAPPENED!!!");
};

main();

