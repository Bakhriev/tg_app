const accordionInit = () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const btn = accordion.querySelector(".accordion__toggle");
    const wrapper = accordion.querySelector(".accordion__wrapper");

    btn.addEventListener("click", () => {
      if (wrapper.style.height) {
        accordion.classList.remove("active");
        wrapper.style.height = "";
      } else {
        accordion.classList.add("active");
        wrapper.style.height = `${wrapper.scrollHeight}px`;
      }
    });
  });
};

accordionInit();

const tabInit = () => {
  const tab = document.querySelector(".tab");
  const buttons = tab.querySelectorAll(".tab-btn");
  const panels = tab.querySelectorAll(".tab__panel");

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      buttons[i].classList.add("active");
      panels[i].classList.add("active");
    });
  });
};

tabInit();
