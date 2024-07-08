function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Sucess");
    }, 2000);
  });
}

// Printing

// promise Chaining
console.log("Fetching the data...");
getData(1)
  .then((res) => {
    console.log("Fetching the data...");
    return getData(2);
  })
  .then((res) => {
    console.log("Fetching the data...");
    return getData(3);
  })
  .then((res) => {
    console.log("Fetching the data...");
    console.log(res);
  });
