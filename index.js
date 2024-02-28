// content object
let content = {
  items: [
    {
      title: "WOMEN BLOUSE",
      images: ["yellow.webp", "red.jpeg", "black.webp"],
      price: 125,
      color: "#F40009", // red color
    },
    {
      title: "CHILDREN SHIRT",
      images: ["purple.jpg", "black2.jpg"],
      price: 45,
      color: "#4B0082", // purple color
    },
    {
      title: "MEN FLANEL",
      images: ["cyan.jpg", "gray.jpg", "black3.jpeg"],
      price: 75,
      color: "#1877F2", // blue color
    },
  ],
};

// price applying for all
const prices = document.querySelectorAll("#price");
prices.forEach((price, index) => {
  price.textContent = `$${content.items[index].price}`;
});

// counter
function counterCard() {
  const reduceBtn = document.querySelectorAll("#reduceBtn");
  const addBtn = document.querySelectorAll("#addBtn");
  const count = document.querySelectorAll("#count");
  const addToCart = document.querySelectorAll("#add-to-cart");

  let counter = [];
  for (let i = 0; i < content.items.length; i++) {
    counter.push(1);
  }

  count.forEach((count, index) => {
    count.textContent = counter[index];
  });

  addBtn.forEach((add, index) => {
    add.addEventListener("click", () => {
      counter[index]++;
      count[index].textContent = counter[index];
      prices[index].textContent = `$${
        content.items[index].price * counter[index]
      }`;
    });
  });

  reduceBtn.forEach((reduce, index) => {
    reduce.addEventListener("click", () => {
      if (counter[index] > 1) {
        counter[index]--;
        count[index].textContent = counter[index];
        prices[index].textContent = `$${
          content.items[index].price * counter[index]
        }`;
      }
    });
  });

  addToCart.forEach((addToCartEl, index) => {
    addToCartEl.addEventListener("click", () => {
      if (counter[index] > 0) {
        alert("Ati adaugat produsul in cos!");
      }
      counter[index] = 1;
      count[index].textContent = counter[index];
      prices[index].textContent = `$${
        content.items[index].price * counter[index]
      }`;
    });
  });
}
counterCard();

// color
function colorPicker() {
  const colorPicker = document.querySelectorAll(".color-picker");
  const imagesPicker = document.getElementsByTagName("img");
  let colorsClasses = [
    "yellow",
    "red",
    "black",
    "purple",
    "black",
    "cyan",
    "gray",
    "black",
  ];

  colorPicker.forEach((color, index) => {
    color.classList.add(colorsClasses[index]);
    color.addEventListener("click", () => {
      if (index < 3) {
        imagesPicker[0].src = `imgs/${content.items[0].images[index]}`;
        cards[0].style.borderColor = colorsClasses[index];
        titles[0].style.color = colorsClasses[index];
      } else if (index < 5) {
        imagesPicker[1].src = `imgs/${
          content.items[1].images[index - content.items[0].images.length]
        }`;
        cards[1].style.borderColor = colorsClasses[index];
        titles[1].style.color = colorsClasses[index];
      } else if (index <= 8) {
        imagesPicker[2].src = `imgs/${
          content.items[2].images[
            index -
              content.items[0].images.length -
              content.items[1].images.length
          ]
        }`;
        cards[2].style.borderColor = colorsClasses[index];
        titles[2].style.color = colorsClasses[index];
      }
    });
  });
}
colorPicker();

// size
function sizePicker() {
  const sizes = document.querySelectorAll(".size-container small");
  sizes.forEach((size) => {
    size.addEventListener("click", () => {
      if (size.style.fontSize === "16px") {
        size.style.fontSize = "14px";
        size.style.fontWeight = "";
      } else {
        size.style.fontSize = "16px";
        size.style.fontWeight = "400";
      }
    });
  });
}
sizePicker();

// color applying for all
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.style.borderColor = content.items[index].color;
});

// title applying for all
const titles = document.querySelectorAll("#title");
titles.forEach((titleElement, index) => {
  titleElement.textContent = content.items[index].title;
  titleElement.style.color = content.items[index].color;
});

// stars
function starsRating() {
  const starsContainer = document.querySelectorAll(".stars");

  starsContainer.forEach((container, index) => {
    const stars = container.querySelectorAll(".fa-star");

    stars.forEach((star, starIndex) => {
      star.style.cursor = "pointer";

      if (index === 0 && starIndex <= 4) {
        star.addEventListener("click", () => {
          stars.forEach((s, i) => {
            if (i <= starIndex) {
              s.classList.remove("fa-regular");
              s.classList.add("fa-solid");
            } else {
              s.classList.remove("fa-solid");
              s.classList.add("fa-regular");
            }
          });
        });
      } else if (index === 1 && starIndex < 5) {
        star.addEventListener("click", () => {
          stars.forEach((s, i) => {
            if (i <= starIndex) {
              s.classList.remove("fa-regular");
              s.classList.add("fa-solid");
            } else {
              s.classList.remove("fa-solid");
              s.classList.add("fa-regular");
            }
          });
        });
      } else if (index === 2 && starIndex < 5) {
        star.addEventListener("click", () => {
          stars.forEach((s, i) => {
            if (i <= starIndex) {
              s.classList.remove("fa-regular");
              s.classList.add("fa-solid");
            } else {
              s.classList.remove("fa-solid");
              s.classList.add("fa-regular");
            }
          });
        });
      }
    });
  });
}

starsRating();
