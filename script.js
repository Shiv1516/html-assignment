const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  if (!menuButton.classList.contains("nav-close")) {
    menuButton.classList.add("nav-close");
    navBar.classList.add("on-nav");
  } else {
    menuButton.classList.remove("nav-close");
    navBar.classList.remove("on-nav");
  }
});
function addToCart() {
  alert("Item added to cart!");
}
console.log("hello");

document.getElementById("trigger").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  popup.style.right = "0";
});

document.getElementById("close-btn").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.style.right = "-100%";
  setTimeout(() => popup.classList.add("hidden"), 400);
});
document.querySelectorAll(".color-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const color = event.target.textContent.includes("Red")
      ? "red"
      : event.target.textContent.includes("Yellow")
      ? "yellow"
      : event.target.textContent.includes("White")
      ? "white"
      : "pink";
    const elements = document.querySelectorAll(".bg2");
    elements.forEach((element) => {
      element.style.backgroundColor = color;
    });
  });
});
