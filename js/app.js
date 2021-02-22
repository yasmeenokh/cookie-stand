'use strict';

let workingHours= ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];
 
const seatle = {
    name: 'Seatle',
    customersDefault: [],
    minNumber:23,
    maxNumber:65,
    cookieAvg: 6.3,
    numberOfCookie:[],
    totalCookies:0,
    numberOfCustomers: function (min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },
    cookiePerHour: function (randomNumber,multiplyNumber) {
      this.numberOfCookie = calculatenumberOfCookie(randomNumber,multiplyNumber);
    }
  };
  const tokyo = {
    name: 'Tokyo',
    customersDefault: 0,
    minNumber:3,
    maxNumber:24,
    cookieAvg: 1.2,
    numberOfCookie:0,
    totalCookies:0,
    numberOfCustomers: function (min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },
    cookiePerHour: function (randomNumber,multiplyNumber) {
      this.numberOfCookie = calculatenumberOfCookie(randomNumber,multiplyNumber);
    }
  };
  const dubai = {
    name: 'Dubai',
    customersDefault: 0,
    minNumber:11,
    maxNumber:38,
    cookieAvg: 3.7,
    numberOfCookie: 0,
    totalCookies:0,
    numberOfCustomers: function (min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },
    cookiePerHour: function (randomNumber,multiplyNumber) {
      this.numberOfCookie = calculatenumberOfCookie(randomNumber,multiplyNumber);
    }
  };
  const paris = {
    name: 'Paris',
    customersDefault: 0,
    minNumber:20,
    maxNumber:38,
    cookieAvg: 2.3,
    numberOfCookie:0,
    totalCookies:0,
    numberOfCustomers: function (min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },
    cookiePerHour: function (randomNumber,multiplyNumber) {
      this.numberOfCookie = calculatenumberOfCookie(randomNumber,multiplyNumber);
    }
  };
  const lima = {
    name: 'Lima',
    customersDefault: 0,
    minNumber:2,
    maxNumber:16,
    cookieAvg: 4.6,
    numberOfCookie:0,
    totalCookies:0,
    numberOfCustomers: function (min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },
    cookiePerHour: function (randomNumber,multiplyNumber) {
      this.numberOfCookie = calculatenumberOfCookie(randomNumber,multiplyNumber);
    }
  };
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function calculatenumberOfCookie (randomNumber,multiplyNumber){
    randomNumber = randomNumber*multiplyNumber;
    return Math.ceil(randomNumber);
  }
  function final (cityName){
    const parentElement = document.getElementById('locationList');
    // Create Element
    // append element to parent element
    // set text content to the element
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = cityName.name;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for(let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      cityName.numberOfCustomers(cityName.minNumber,cityName.maxNumber);
      cityName.cookiePerHour(cityName.customersDefault,cityName.cookieAvg);
      liElement.textContent = `${workingHours[i]}: ${cityName.numberOfCookie} cookies.`;
      cityName.totalCookies = cityName.totalCookies + cityName.numberOfCookie;
      cityName.customers = 0;
      cityName.numberOfCookie = 0;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${cityName.totalCookies} cookies.`;
  }
  final(seatle);
  final(tokyo);
  final(dubai);
  final(paris);
  final(lima);