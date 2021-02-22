'use strict';

let workingHours= ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];

this.locationArray=[];

/*numberOfCookie, totalCookies, customersDefault*/

function locations(name, minNumber, maxNumber, cookieAvg) {
this.name= name;
this.minNumber= minNumber;
this.maxNumber= maxNumber;
this.cookieAvg= cookieAvg;
this.customersDefault= [];
this.numberOfCookie= [];
this.totalCookies= 0;

};


function generateRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min)+min);
};

locations.prototype.numberOfCustomers= function(minNumber, maxNumber) {
  for (i=0 ; i< workingHours.length; i++){
    let customer= Math.ceil(this.generateRandomNumber(this.minNumber, this.maxNumber));
  this.customersDefault.push(customer);
}};
locations.prototype.cookiePerHour= function() {
  for (let i=0; i < workingHours.length; i++){
    let cookie = this.generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg;
    this.numberOfCookie.push(Math.ceil(cookie));
    this.totalCookies += cookie; 
  }}; 



locations.prototype.render= function () { 
  const parentElement = document.getElementById('locationList'); 
  const tableElement= document.createElement('table');
  parentElement.appendChild( tableElement );
  
  const tableHead = document.createElement('thead');
  tableElement.appendChild(tableHead);
  
  const row1Element= document.createElement('tr');
  tableHead.appendChild(row1Element);

  const nameElement= document.createElement('th');
  row1Element.appendChild(nameElement);
  nameElement.textContent= 'name';
  for (let i=0; i<workingHours; i++){
    const thElement= document.createElement ('th');
    row1Element.appendChild(thElement);
    thElement.textContent= `${workingHours[i]}`;
  };


  //parentElement.appendChild(articleElement);
  

  const tBodyElement = document.createElement('tbody');
  tableElement.appendChild(tBodyElement);
 // h2Element.textContent = this.name; 

  const cellElement = document.createElement('td');
  tBodyElement.appendChild(cellElement);
  cellElement.textContent = `${this.name}`

  const roweElement = document.createElement('tr');
  cellElement.appendChild(roweElement);

  for (let i =0; i < workingHours.length; i++) {
    const tdElement = document.createElement('td');
    row1Element.appendChild(tdElement);
    roweElement.textContent = `${this.customersDefault[i]}`;
      }};
  /*const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    };
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };*/
  
const seatle = new locations('Seatle', 23, 65, 6.3);
const tokyo = new locations('Tokyo', 3, 24, 1.2); 
const dubai = new locations('Dubai ', 11, 38, 3.7);
const paris = new locations('Paris ', 11, 38, 3.7);
const lima = new locations('Lima ', 2, 16, 3.7);


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



seatle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

locationArray.push(seatle, tokyo, dubai, paris, lima);
