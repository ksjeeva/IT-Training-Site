//  javascript for toggle menu
document.getElementById("menu").addEventListener("click", () => {
  document.getElementById("nav-links").style.right = "0px";
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("nav-links").style.right = "-200px";

});
