let linkItems = document.querySelectorAll(".link-item"),
  indicator = document.querySelector(".indicator"),
  iconColor = document.querySelector("li a i"),
  linkText = document.querySelector(".link-text");

linkItems.forEach((linkItem, index) => {
  linkItem.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    linkItem.classList.add("active");
    indicator.style.left = `${index * 95 + 48}px`;
  });
});
