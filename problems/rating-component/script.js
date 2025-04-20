let container = document.getElementsByClassName("container");

console.log("container", container);

let start = document.querySelectorAll(".red-star");

if (container) {
  container.addEventListener("click", (e) => {
    console.log(e.target);
  });
}
