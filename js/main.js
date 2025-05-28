const accordionInit = () => {
  const accordions = document.querySelectorAll(".accordion");

  if (!accordions.length) return;

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

  if (!tab) return;

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

const copyInit = () => {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // Проверяем, не находится ли кнопка в состоянии "задержки"
      if (this.classList.contains("copied")) return;

      const textToCopy = this.getAttribute("data-copy");

      navigator.clipboard.writeText(textToCopy).then(() => {
        this.classList.add("copied");

        setTimeout(() => {
          this.classList.remove("copied");
        }, 2000);
      });
    });
  });
};

copyInit();

const fieldsInit = () => {
  const fields = document.querySelectorAll(".field");

  if (!fields.length) return;

  fields.forEach((field) => {
    const input = field.querySelector(".input");
    const clearBtn = field.querySelector(".field__clear");

    clearBtn.addEventListener("click", () => {
      input.value = "";
    });
  });
};

fieldsInit();
