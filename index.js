


// Promises are a thing (Promise Object)
// http request to server (2s)
// fetch("https://jsonplaceholder.typicode.com/posts?_limit=2").then((dataFromFetch) => {
//     // console.log(dataFromFetch);
//     dataFromFetch.json().then((parsedData) => {
//         console.log(parsedData);
//     })
// });

// 1. .then method on the Promise object
// 2. async functions


// const getAndLogData = async () => {
    
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
//     let parsedData = await response.json();
//     console.log(parsedData);

// }

// getAndLogData()


// setTimeout 
// we want to wait 2 seconds after the user clicks a button before we run some code.
// let cancelEmail = false;
// setTimeout(() => {
//     if (cancelEmail === false) {
//         console.log("sending the email!");
//     } else {
//         console.log("email canceled");
//     }
// }, 4000);

// cancelEmail = true;


// let myInterval = setInterval(() => {
//     console.log("ping");
// }, 1000)

// setTimeout(() => {
//     clearInterval(myInterval)
// }, 5000)

