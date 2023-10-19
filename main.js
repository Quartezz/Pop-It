document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".main-choose__items-container-item");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function showPreviousItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  prevButton.addEventListener("click", showPreviousItem);
  nextButton.addEventListener("click", showNextItem);

  showItem(currentIndex);
});
