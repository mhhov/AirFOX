const burger = document.querySelector(".header-burger"),
  leftPanel = document.querySelector(".left-panel");

burger.addEventListener("click", () => {
  leftPanel.classList.add("active");
});
