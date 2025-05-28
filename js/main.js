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

const RU_KZ_BINS = [
  // Россия
  "2200",
  "2201",
  "2202",
  "2203",
  "2204",
  "4276",
  "4282",
  "4890",
  "4627",
  "5169",
  "5213",
  "5486",
  "6037",
  "6762",
  // Казахстан (некоторые BIN)
  "440563",
  "440564",
  "427749",
  "514957",
  "531212",
  "537741",
  "552346",
];

const formatAndValidateCardNumber = () => {
  const field = document.querySelector('[data-field="credit-card"]');
  console.log(field);

  if (!field) return;

  const errorText = "Введите валидный номер карты";

  const errorField = field.querySelector(".field__error-text");
  const input = field.querySelector('[data-card="credit-card"]');

  input.addEventListener("input", function (e) {
    // Удаляем все нецифры
    let value = e.target.value.replace(/\D/g, "");

    // Форматируем (XXXX XXXX XXXX XXXX)
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ").substring(0, 19);
    e.target.value = value;

    // Убираем пробелы для валидации
    const rawValue = value.replace(/\s/g, "");

    // Проверка формата
    const isCorrectLength = rawValue.length === 16;
    const isFormatValid = /^(\d{4} ){3}\d{4}$/.test(value);

    // BIN проверка (по первым 4–6 цифрам)
    const bin4 = rawValue.slice(0, 4);
    const bin6 = rawValue.slice(0, 6);
    const isValidBIN = RU_KZ_BINS.includes(bin4) || RU_KZ_BINS.includes(bin6);

    const isValid = isCorrectLength && isFormatValid && isValidBIN;

    // Можно тут выводить результат:
    console.log("Карта валидна:", isValid);

    if (isValid) {
      field.classList.remove("invalid");
    } else {
      field.classList.add("invalid");
      errorField.textContent = errorText;
    }
  });
};

formatAndValidateCardNumber();
