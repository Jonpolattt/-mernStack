document.addEventListener("DOMContentLoaded", function () {
  const advs = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    wrapper = document.querySelector(".promo__bg"),
    seriesList = document.querySelector(".promo__interactive-list"),
    input = document.querySelector(".adding__input"),
    addForm = document.querySelector("form.add"),
    checkbox = addForm.querySelector("[type='checkbox']");

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let newValue = input.value;
    const favourite = checkbox.checked;

    if (newValue) {
      if (newValue.length > 18) {
        newValue = `${newValue.slice(0, 18)} ...`;
      }
      if (favourite) {
        console.log("Sevimli serialingiz qoshildi");
      }
      seriesDB.series.push(newValue);
      sortSeries(seriesDB.series);
      setList();
      e.target.reset();
      // input.value = "";
    }
  });

  advs.forEach((item) => {
    item.remove();
  });
  genre.textContent = "Comedy";

  // wrapper.style.backgroundImage = "url(./img/2.jpg)";

  function sortSeries(arr) {
    arr.sort();
  }

  function setList() {
    seriesList.innerHTML = "";
    sortSeries(seriesDB.series);
    seriesDB.series.forEach((item, index) => {
      seriesList.innerHTML += `
        <li class="promo__interactive-item">
          ${index + 1}. ${item}
          <div class="delete"></div>
        </li>
      `;
      document.querySelectorAll(".delete").forEach((item, index) => {
        item.addEventListener("click", () => {
          item.parentElement.remove();
          seriesDB.series.splice(index, 1);

          setList();
        });
      });
    });
  }

  sortSeries(seriesDB.series);
  setList();
});
