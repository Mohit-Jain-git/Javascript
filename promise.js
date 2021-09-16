const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) reject({ status: 404 });
      else resolve();
    }, 1000);
  });
};
fakeRequest()
  .then(() => {
    console.log("REQUEST WORKED!!!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
