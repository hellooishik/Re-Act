// Promises represent the eventual completion (or failure) of an asynchronous operation.

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched
  })
  .catch((error) => {
    console.error(error);
  });
