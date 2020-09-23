//list variables
var tbody = d3.select("tbody");
const filterData = d3.select("#dataSel");

//to produce the table with chosen data
function init(sighting) {sighting.forEach((ufoSighting) => {      
    var row = tbody.append("tr");      
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);        
    });
  });
};

//to select what has been entered in the filter box
function DataSelect() {
  dataSelected = filterData.property("value");
  ufoFiltered = ufoData.filter(selectData);
  return {dataSelected, ufoFiltered};
}

//filter based on selection
function selectData(ufosight) {
  option = d3.select("#selDataset")
  option1 = option.property("value")
  if (option1 === "datetime") {
    return ufosight.datetime === dataSelected};
  if(option1 === "city") {
    return ufosight.city === dataSelected};
  if(option1 === "state") {
    return ufosight.state === dataSelected};
  if(option1 === "country") {
    return ufosight.country === dataSelected};
  if(option1 === "shape") {
    return ufosight.shape === dataSelected};
  if(option1 === "duration") {
    return ufosight.durationMinutes === dataSelected};
}

//using the filter and producing the table
function filterClick() {
    DataSelect();
    tbody.html("");    
    init(ufoFiltered);
    console.log(ufoFiltered)
    console.log(dataSelected)
}
// to go back to the unfiltered data
function clearfilter() {
  tbody.html("");
  init(ufoData);
}

//actions to perform on selecting the enter button or clicking on the filter/unfilter buttons
d3.select("#dataSel").on("keydown = 13", filterClick)
d3.select("#filter-btn").on("click", filterClick);
d3.select("#clear-filter").on("click", clearfilter);

//to set all data to display on initilization
init(ufoData);