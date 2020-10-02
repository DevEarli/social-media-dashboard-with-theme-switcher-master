const toggleParent = document.querySelector(".toggle-parent");
const heading = document.querySelector(".social-parent h2");
const overview = document.querySelector(".overview h2");
const pattern = document.querySelector(".pattern");
const cards = document.querySelectorAll(".card");
const cardsOverview = document.querySelectorAll(".card-overview");

toggleParent.addEventListener("click", () => {
  Toggle();
  ChangeBackground();
  ChangeHeading();
  ChangeCards();
});

function Toggle() {
  toggleParent.classList.toggle("dark-mode");
  toggleParent.firstElementChild.classList.toggle("dark-mode");
}

function ChangeBackground() {
  document.body.classList.toggle("dark-mode");
  pattern.classList.toggle("dark-mode");
}

function ChangeHeading() {
  heading.classList.toggle("dark-mode");
  overview.classList.toggle("dark-mode");
}

function ChangeCards() {
  cards.forEach((card) => {
    card.classList.toggle("dark-mode");
    card.firstElementChild.lastElementChild.classList.toggle("dark-mode");
    card.lastElementChild.previousElementSibling.classList.toggle("dark-mode");
  });

  cardsOverview.forEach((card) => {
    card.classList.toggle("dark-mode");
    card.firstElementChild.classList.toggle("dark-mode");
  });
}
