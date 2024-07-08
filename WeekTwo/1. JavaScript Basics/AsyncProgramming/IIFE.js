// IIFE : Immediately Invoked Function Expressions

// async and await make it easier to work with promises by writing asynchronous code that looks synchronous.
const fetchData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Data fetched");
    }, 2000);
  });
};
// using IIFE
(async function () {
  console.log("fetching data ...");
  await fetchData(1);
  console.log("fetching data ...");
  await fetchData(2);
  console.log("fetching data ...");
  await fetchData(3);
})();

// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data); // Output: Data fetched
//   } catch (error) {
//     console.error(error);
//   }
// };
