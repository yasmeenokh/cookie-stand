'use strict';

let workingHours= ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];

const parentDiv = document.getElementById('locationList'); 
const tableElement= document.createElement('table');
parentDiv.appendChild(tableElement);

let allLocations= [];
function locations(name, minNumber, maxNumber, cookieAvg) {
this.name= name;
this.minNumber= minNumber;
this.maxNumber= maxNumber;
this.cookieAvg= cookieAvg;
this.customersDefault= [];
this.numberOfCookie= [];
this.totalCookies= 0;
this.totalHours= 0


};

function generateRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min)+min);
};

locations.prototype.numberOfCustomers= function(min, max) {
  for (let i=0 ; i< workingHours.length; i++){
    let customer= Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber));
  this.customersDefault.push(customer);
}};
locations.prototype.cookiePerHour= function() {
  for (let i=0; i < workingHours.length; i++){
    let cookie = generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg;
    this.numberOfCookie.push(Math.ceil(cookie));
    this.totalCookies += cookie; 
  }}; 

  locations.prototype.header= function () {
    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);
    
    const th1Element= document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = 'city-hours';

        for (let i=0; i < workingHours.length; i++){
        const th2Element = document.createElement('th');
        tr1Element.appendChild(th2Element); 
        th2Element.textContent = workingHours[i]; 
    }
    const th3Element= document.createElement('th');
    tr1Element.appendChild(th3Element);
    th3Element.textContent = 'Total';
    }; 



  

  locations.prototype.body= function() {
      const tr2Element = document.createElement('tr');
      tableElement.appendChild(tr2Element);

      const cellElement1= document.createElement('td')
      tr2Element.appendChild(cellElement1);
      cellElement1.textContent = this.name;
      for (let i =0; i < workingHours.length; i++){
          const cellElement2 = document.createElement('td');
          tr2Element.appendChild(cellElement2);
          cellElement2.textContent = this.customersDefault[i];
          this.totalHours+= this.customersDefault[i];}
        const cellElement14 = document.createElement('td');
        tr2Element.appendChild(cellElement14);
        cellElement14.textContent= this.totalHours
        }; 

  locations.prototype.footer= function() {
    const f1Element = document.createElement('tr');
    tableElement.appendChild(f1Element);
    
    const f2Element= document.createElement('td');
    f1Element.appendChild(f2Element);
    f2Element.textContent = 'Total/hour';

    
    for (let i=0; i< workingHours.length; i++){    
    const cellElement3 = document.createElement('td');
    f1Element.appendChild(cellElement3);
    cellElement3.textContent= seatle.customersDefault[i]+ tokyo.customersDefault[i]+ paris.customersDefault[i]+ dubai.customersDefault[i]+ lima.customersDefault[i];
    };
  };   

  
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


seatle.header();
seatle.body(); 
tokyo.body(); 
dubai.body(); 
paris.body(); 
lima.body(); 
seatle.footer();
