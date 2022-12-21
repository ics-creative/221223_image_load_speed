import { SimpleScrollTrigger } from "simple-scroll-trigger";

document.addEventListener("DOMContentLoaded", () => {
  let isHeaderActive = false;
  const hamburgerButton = document.querySelector(".hamburger-button");
  const header = document.querySelector(".header");
  hamburgerButton.addEventListener("click", () => {
    isHeaderActive = !isHeaderActive;
    if (isHeaderActive) {
      header.classList.add("is-active");
      hamburgerButton.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
      hamburgerButton.classList.remove("is-active");
    }
  });
  const portraitElement = document.querySelector(".missions__portrait");

  new SimpleScrollTrigger({
    trigger: portraitElement,
    onEnter: () => {
      const photo = document.querySelector(".missions__portrait-photo");
      if (!photo.classList.contains(".is-show")) {
        document
          .querySelector(".missions__portrait-photo")
          .classList.add("is-show");
      }
    },
    startViewPortPoint: { value: 70, unit: "%" },
    startTriggerPoint: { value: 20, unit: "%" },
  });
});
