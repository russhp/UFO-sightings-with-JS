// from data.js
var tableData = data;

// YOUR CODE HERE!
// example data:
// {
//  datetime: "1/1/2010",
//  city: "benton",
//  state: "ar",
//  country: "us",
//  shape: "circle",
//  durationMinutes: "5 mins.",
//  comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// }

var inputBox = d3.select('#datetime');

var inputButton = d3.select('#filter-btn');

inputButton.on('click', () => {
    // prevent page load on event: 'click'
    d3.event.preventDefault();

    // reset table on click, to be filled in below
    d3.select('tbody').html('')

    // capture user input
    var input = d3.select('#datetime').property('value');

    var body = d3.select('tbody');
    tableData.forEach((datum) => {
        // add row to append each cell to
        var row = body.append('tr');

        // make condition for making table depending on requested date
        if (input === datum['datetime']) {
            // break down data point to fill each cell.
            // Will add a <td> for each field in datum, 
            // then exit and make new row as loop continues
            Object.entries(datum).forEach(([key, entry]) => {
                var cell = body.append('td');
                cell.text(entry);
            });
        }
    });
});