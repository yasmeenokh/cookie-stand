'use strict';

let workingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
const parentDiv = document.getElementById('locationList');
const tableElement = document.createElement('table');
parentDiv.appendChild(tableElement);

// forming the main constructor //
function locations(name, minNumber, maxNumber, cookieAvg) {
  this.name = name;
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.cookieAvg = cookieAvg;
  this.customersDefault = [];
  this.numberOfCookie = [];
  this.totalCookies = 0;
  this.totalHours = 0
  locations.store.push(this);

};
// helper function //
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

locations.prototype.numberOfCustomers = function (min, max) {
  for (let i = 0; i < workingHours.length; i++) {
    let customer = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber));
    this.customersDefault.push(customer);
  }
};
locations.prototype.cookiePerHour = function () {
  for (let i = 0; i < workingHours.length; i++) {
    let cookie = generateRandomNumber(this.minNumber, this.maxNumber) * this.cookieAvg;
    this.numberOfCookie.push(Math.ceil(cookie));
    this.totalCookies += cookie;
  }
};
// creating the head for the table //
locations.prototype.header = function () {
  const tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);

  const th1Element = document.createElement('th');
  tr1Element.appendChild(th1Element);
  th1Element.textContent = 'city-hours';

  for (let i = 0; i < workingHours.length; i++) {
    const th2Element = document.createElement('th');
    tr1Element.appendChild(th2Element);
    th2Element.textContent = workingHours[i];
  }
  const th3Element = document.createElement('th');
  tr1Element.appendChild(th3Element);
  th3Element.textContent = 'Total';
};




// creating the body of the table//
locations.prototype.body = function () {
  const tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);

  const cellElement1 = document.createElement('td')
  tr2Element.appendChild(cellElement1);
  cellElement1.textContent = this.name;
  for (let i = 0; i < workingHours.length; i++) {
    const cellElement2 = document.createElement('td');
    tr2Element.appendChild(cellElement2);
    cellElement2.textContent = this.numberOfCookie[i];
    this.totalHours += this.numberOfCookie[i];
  }
  const cellElement14 = document.createElement('td');
  tr2Element.appendChild(cellElement14);
  cellElement14.textContent = this.totalHours;


};
// creating the footer for the table//
locations.prototype.footer = function () {
  const f1Element = document.createElement('tr');
  tableElement.appendChild(f1Element);

  const f2Element = document.createElement('td');
  f1Element.appendChild(f2Element);
  f2Element.textContent = 'Total/hour';


  for (let i = 0; i < workingHours.length; i++) {
    const cellElement3 = document.createElement('td');
    f1Element.appendChild(cellElement3);
    let hourlyTotal = 0;
    for (let j = 0; j < locations.store.length; j++) {
      hourlyTotal += (locations.store[j].numberOfCookie[i]);
      cellElement3.textContent = hourlyTotal;
    };
  };
  const cellElement5 = document.createElement('td')
  f1Element.appendChild(cellElement5);
  let totalOfTotals = 0;
  for (let i = 0; i < locations.store.length; i++) {
    totalOfTotals += locations.store[i].totalHours;
    cellElement5.textContent = totalOfTotals;
  }

};

locations.store = [];
// adding new constructor values //
const seatle = new locations('Seatle', 23, 65, 6.3);
const tokyo = new locations('Tokyo', 3, 24, 1.2);
const dubai = new locations('Dubai ', 11, 38, 3.7);
const paris = new locations('Paris ', 11, 38, 3.7);
const lima = new locations('Lima ', 2, 16, 3.7);

// callong the functions//
seatle.numberOfCustomers();
tokyo.numberOfCustomers();
dubai.numberOfCustomers();
paris.numberOfCustomers();
lima.numberOfCustomers();

seatle.cookiePerHour();
tokyo.cookiePerHour();
dubai.cookiePerHour();
paris.cookiePerHour();
lima.cookiePerHour();


seatle.header();
seatle.body();
tokyo.body();
dubai.body();
paris.body();
lima.body();
seatle.footer();

// adding new value submitted by the use via the form//
const formElement = document.getElementById('addNewLocations');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const cityName = event.target.city_name.value;
  const minimumNumber = event.target.minimumNumber.value;
  const maximumNumber = event.target.maximumNumber.value;
  const cookieAverage = event.target.cookieAverage.value;
  const location = new locations(cityName, minimumNumber, maximumNumber, cookieAverage);

  tableElement.removeChild(tableElement.lastChild);
  location.numberOfCustomers();
  location.cookiePerHour();
  location.body();
  formElement.reset();
  seatle.footer();
});



