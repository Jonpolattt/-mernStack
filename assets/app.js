let numberOfSeries;

startApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  geners: [],
  privat: false,
};

setFavoriteSeries();
detectingLevel();
writeGenres();
showDb(seriesDB.privat);

function startApp() {
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial kordingiz?", "");
  }
}

function setFavoriteSeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt(`Oxirgi korgan serialingiz ${i}?`, "");
    const b = prompt(`Nechi baho berasiz ${i}?`, "");
    if (a !== null && a !== "" && b !== null && b !== "") {
      seriesDB.series[a] = b;
    } else {
      i--;
    }
  }
}

function detectingLevel() {
  if (seriesDB.count < 5) {
    console.log("Siz kam serial koripsiz");
  } else if (seriesDB.count >= 5 && seriesDB.count < 9) {
    console.log("Siz classik tomoshabil");
  } else if (seriesDB.count >= 10) {
    console.log("Siz serialchi zvezda ekan siz");
  }
}

function writeGenres() {
  for (let i = 1; i < 4; i++) {
    const genre = prompt(`Yaxshi ko'rgan janiringiz ${i}?`, "");
    seriesDB.geners[i] = genre;
  }
}

function showDb(isPrivat) {
  if (!isPrivat) {
    console.log(seriesDB);
  } else {
    console.log("Siz bu yerga kiraolmeysiz");
  }
}
