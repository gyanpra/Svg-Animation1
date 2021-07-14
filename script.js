let basictag = document.querySelector("#basic");
let bodytag = document.querySelector("#basic");

console.log(basictag);

bodytag.addEventListener("mousemove", (e) => {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  let percX = (mouseX / bodytag.clientWidth) * 100 + "%";
  let percY = (mouseY / bodytag.clientHeight) * 100 + "%";

  basictag.setAttribute("cx", percX);
  basictag.setAttribute("cy", percY);
});
