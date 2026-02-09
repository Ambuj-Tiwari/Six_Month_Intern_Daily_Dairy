let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});


// consuiming the promise 

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


  // asyn/await 

  function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  
  let result = await fetchData();
  console.log(result);

  console.log("Process completed");
}


// promise chaining
 // Promise Chaining Example (Corrected)

// Step 1
function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000);
  });
}

// Step 2
function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 completed");
    }, 1000);
  });
}

// Promise chaining
stepOne()
  .then((result) => {
    console.log(result); // Step 1 completed
    return stepTwo();
  })
  .then((result) => {
    console.log(result); // Step 2 completed
  })
  .catch((error) => {
    console.log("Error:", error);
  });



  // set timeout 

console.log("Start");

setTimeout(() => {
  console.log("Async Task Completed");
}, 2000);

console.log("End");


