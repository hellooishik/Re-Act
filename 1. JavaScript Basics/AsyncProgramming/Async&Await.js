// async and await make it easier to work with promises by writing asynchronous code that looks synchronous.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(datacd re-act); // Output: Data fetched
  } catch (error) {
    console.error(error);
  }
};

getData();
