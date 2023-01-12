console.log("testing js file");


let myH1 = document.querySelector("h1");

// myH1.addEventListener("click", () => {
//     fetch("http://localhost:5000/get_data").then((response) => {
//         response.json().then((formattedData) => {
//             console.log(formattedData);
//         })
//     })
// })
myH1.addEventListener("click", async () => {
   let response = await fetch("http://localhost:5000/get_data")
   let finalData = await response.json()
   console.log(finalData);
   let body = document.querySelector('body');
   const para = document.createElement("p");
   para.id = "my-paragraph"
   para.textContent = `${finalData[0].name}`
    // grab HTML element from DOM getElementByID
    // if the element exists (is on the page)
    // removeChild
    // else appendChile
   body.appendChild(para)

})