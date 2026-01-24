const numberOfSeries = +prompt("Nechta serial kordingiz?", "");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  geners: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt(`Oxirgi korgan serialingiz ${i}?`, "");
  const b = prompt(`Nechi baho berasiz ${i}?`, "");
  if (a !== null && a !== "" && b !== null && b !== "") {
    seriesDB.series[a] = b;
  } else {
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Siz kam serial koripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 9) {
  console.log("Siz classik tomoshabil");
} else if (seriesDB.count >= 10) {
  console.log("Siz serialchi zvezda ekan siz");
}
console.log(seriesDB);


console.log("uzimdi uzim aldab push qilip yotipman");

