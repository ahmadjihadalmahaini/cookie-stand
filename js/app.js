'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// from W3 schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor function
function Shops(location, CustomerMin, CustomerMax, avgperSale) {
    this.cityLocation = location;
    this.min = CustomerMin;
    this.max = CustomerMax;
    this.avg = avgperSale;
    this.randomCustomers = [];
    this.avgCOOKIES = [];
    this.total = 0;

}

let Seattle = new Shops('Seattle', 23, 65, 6.3);
// console.log(Seattle);
let Tokyo = new Shops('Tokyo', 3, 24, 1.2);
let Dubai = new Shops('Dubai', 11, 38, 3.7);
let Paris = new Shops('Paris', 20, 38, 2.3);
let Lima = new Shops('Lima', 2, 16, 4.6);



Shops.prototype.count = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomCustomers.push(random(this.min, this.max))
    }
}
Seattle.count();
Tokyo.count();
Dubai.count();
Paris.count();
Lima.count();

Shops.prototype.sellCookies = function () {
    for (let i = 0; i < hours.length; i++) {

        this.avgCOOKIES.push(Math.floor(this.randomCustomers[i] * this.avg))
        this.total += this.avgCOOKIES[i];

    }
}
Seattle.sellCookies();
Tokyo.sellCookies();
Dubai.sellCookies();
Paris.sellCookies();
Lima.sellCookies();

Shops.prototype.render = function () {



    //Table part
    let parent = document.getElementById('dailyLocationsTotal');

    //create table
    let table = document.createElement('table');

    // Append
    parent.appendChild(table);

    // creating the header row
    let headerRow = document.createElement('tr');

    //Append
    table.appendChild(headerRow);

    // make the heading

    for (let i = 0; i < hours.length; i++) {
        let Header = document.createElement('th');
        headerRow.appendChild(Header);
        // text content
        Header.textContent = hours[i]

    }

    // the Data rows
    let shopLocation = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

    for (let i = 0; i < shopLocation.length; i++) {
        let shopsRow = document.createElement('tr');
        table.appendChild(shopsRow);

        let Data = document.createElement('td');
        shopsRow.appendChild(Data);

        Data.textContent = shopLocation[i];

    }





}

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


