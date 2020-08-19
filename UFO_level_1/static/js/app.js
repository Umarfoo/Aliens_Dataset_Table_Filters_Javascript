// from data.js
var tableData = data;

// YOUR CODE HERE!

// Selecting table body
var tbody = d3.select("tbody");

function createtable(TableData, body){
    TableData.forEach(function(ufo){
        var row = body.append("tr");
        Object.values(ufo).forEach(function(value){
            row.append("td").text(value);
        });
    });
};

createtable(tableData, tbody);


// Selecting Button and Form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Creating event handlers

button.on("click", runEnter);
form.on("submit", runEnter);

// creating run enter function
function runEnter() {

    // Removing all data from table
    d3.select("tbody").remove();

    // Preventing page from refresh
    d3.event.preventDefault();
    
    // Selecting input data in form
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Creating filtered data based on input
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    
    // If input is true then show selected dates
    if (inputValue){

        // Crearting new tbody for data 
        var table = d3.select("#ufo-table");
        var t_body = table.append("tbody");
        
        // Calling function to create table with new t_body
        createtable(filteredData, t_body);
    
    // If no input provided show all dates
    } else {
        // Crearting new tbody for data 
        var table = d3.select("#ufo-table");
        var t_body = table.append("tbody");
        
        // Calling function to create unfiltered table
        createtable(tableData, t_body);
    };
};