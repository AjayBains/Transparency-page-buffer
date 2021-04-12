import TableCsv from "./TableCsv.js";
const tableRoot = document.querySelector("#csvRoot");
// const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

Papa.parse("../data/ZonAnn.Ts+dSST .csv", {
  delimiter: ",",
  skipEmptyLines: true,
  download: true,
  complete: (results) => {
    tableCsv.update(results.data.slice(1), results.data[0]);
  },
});

// Papa.parse("../data/ZonAnn.Ts+dSST .csv", {
//   delimiter: ",",
//   skipEmptyLines: true,
//   download: true,
//   complete: (results) => {
//     console.log(results);
//     // tableCsv.update(results.data.slice(1), results.data[0]);
//   },
// });
// async function getTab() {
//   const response = await fetch("../data/Simple .csv");
//   const datao = await response.blob();
//   Papa.parse("../data/ZonAnn.Ts+dSST .csv", {
//     delimiter: ",",
//     skipEmptyLines: true,
//     download: true,
//     complete: (results) => {
//       tableCsv.update(results.data.slice(1), results.data[0]);
//     },
//   });
// }
// getTab();
// csvFileInput.addEventListener("change", (e) => {
//   Papa.parse(csvFileInput.files[0], {
//     delimiter: ",",
//     skipEmptyLines: true,
//     complete: (results) => {
//       tableCsv.update(results.data.slice(1), results.data[0]);
//     },
//   });
// });
