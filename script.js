const darkMode = document.querySelector("#dark");
let num = 0;

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

document.body.style.fontFamily = " sans-serif";

darkMode.addEventListener("click", function () {
  if (num === 0) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    num = 1;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    num = 0;
  }
});

const paraText = document.getElementById("text");
paraText.innerHTML =
" <p> Welcome! I’m Kevin, a computer science student passionate about coding and tech innovation. Here, I share my projects, insights, and resources in the world of technology. Whether you’re exploring for inspiration, tutorials, or just curious about what I’m working on, I hope you find something valuable. Thanks for visiting, and let’s dive into the future of tech together! </p> ";
