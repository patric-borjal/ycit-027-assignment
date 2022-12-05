// I followed a tutorial on YouTube to create this code. I've modified it to suit my needs.

let catImage = document.getElementById("catImage");
let url = "https://api.thecatapi.com/v1/images/search";
let data = async () => (await fetch(url)).json();
let btn = document.getElementById("getCatImage");

btn.onclick = () => {
    data().then((res) => {
        let img = document.createElement("img");
        img.src = res[0].url;
        catImage.appendChild(img);
    }).catch((err) => {
        alert(err);
    });
}

// The code below was my first attempt to replicate the code above, a modification of the code given for the 
// assignment (but it came out unsuccessful because the images appear in doubles at times?). 
// The code below "works", multiple images are displayed when the button is clicked, but not in the
// way intended.

// function getCatImage() {
//     return fetch("https://api.thecatapi.com/v1/images/search")
//         .then((response) => {         
//             return response.json();
//         })
//         .then((data) => {
//             let img = document.createElement("img");
//             img.src = data[0].url;
//             document.getElementById("catImage").src = data[0].url;
//             return document.body.appendChild(img);

//         })
//         .catch((error) => { alert(error); 
//         });
// }
