function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Stock Market data");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData() {
  await api(); // first call
  await api(); // Sceond call
}

// Note ==  AWAIT Fn : Await Paused the exucution of it's Surrondings async Function untill the promises is settled
