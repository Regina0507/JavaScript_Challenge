// from data.js
var tableData = data;
console.log(data);

//identify the table and body
var tbody = d3.select('#ufo-table>tbody');

//create function to generate and populate the table
function buildTable(tableData){
    tableData.forEach(record => {
        var row = tbody.append('tr');
    
    Object.values(record).forEach(col => {
        row.append('td').text(col);
      });
    })  
} 

function filterTable(elem){
    console.log('filter table event');
   
//var changedElem= d3.event.target
    var dateElem = d3.select('#datetime');
    var filterDate = dateElem.property('value');

    filteredData = tableData.filter(rec => rec['datetime']==filterDate);
    
    console.log(filteredData);
    
    //clear out the tbody
    tbody.html('');

    //Rebuild the filtered table using the buildTable function
    buildTable(filteredData);
}

//identify web elements on the page
btn = d3.select('#filter-btn')
datetimefield = d3.select('#datetime')

//Add event listeners to the web elements
btn.on('click', filterTable);
datetimefield.on('change',filterTable);

//call the function to initially load the table
buildTable(tableData);