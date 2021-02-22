'use strict';

let workingHours= ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];
 
const seatle = {
    name: 'Seatle',
    customersDefault: [],
    minNumber: 23,
    maxNumber: 65,
    cookieAvg: 6.3,
    numberOfCookie:[],
    totalCookies: 0,
    cookiePerHour: function() {
      for (let i=0; i < workingHours.length; i++){
        let cookie = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg);
        this.numberOfCookie.push(cookie);
        this.totalCookies += cookie; 
      }},
      
      numberOfCustomers: function(min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },

    render: function () { 
      const parentElement = document.getElementById('locationList'); 
      const articleElement = document.createElement('article');
      parentElement.appendChild(articleElement);

      const h2Element = document.createElement('h2');
      articleElement.appendChild(h2Element);
      h2Element.textContent = this.name; 

      const ulElement = document.createElement('ul');
      articleElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.numberOfCookie[i]} cookies.`;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    }};

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };
  
    

  seatle.cookiePerHour();
  seatle.numberOfCustomers(); 
  seatle.render();
  console.log(seatle);
    
  const Tokyo = {
    name: 'Tokyo',
    customersDefault: [],
    minNumber: 3,
    maxNumber: 24,
    cookieAvg: 1.2,
    numberOfCookie:[],
    totalCookies: 0,
    cookiePerHour: function() {
      for (let i=0; i < workingHours.length; i++){
        let cookie = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg);
        this.numberOfCookie.push(cookie);
        this.totalCookies += cookie; 
      }},
      
      numberOfCustomers: function(min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },

    render: function () { 
      const parentElement = document.getElementById('locationList'); 
      const articleElement = document.createElement('article');
      parentElement.appendChild(articleElement);

      const h2Element = document.createElement('h2');
      articleElement.appendChild(h2Element);
      h2Element.textContent = this.name; 

      const ulElement = document.createElement('ul');
      articleElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.numberOfCookie[i]} cookies.`;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    }};

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };
  
    

  Tokyo.cookiePerHour();
  Tokyo.numberOfCustomers(); 
  Tokyo.render();
  console.log(Tokyo);

  const Dubai = {
    name: 'Dubai',
    customersDefault: [],
    minNumber: 11,
    maxNumber: 38,
    cookieAvg: 3.7,
    numberOfCookie:[],
    totalCookies: 0,
    cookiePerHour: function() {
      for (let i=0; i < workingHours.length; i++){
        let cookie = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg);
        this.numberOfCookie.push(cookie);
        this.totalCookies += cookie; 
      }},
      
      numberOfCustomers: function(min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },

    render: function () { 
      const parentElement = document.getElementById('locationList'); 
      const articleElement = document.createElement('article');
      parentElement.appendChild(articleElement);

      const h2Element = document.createElement('h2');
      articleElement.appendChild(h2Element);
      h2Element.textContent = this.name; 

      const ulElement = document.createElement('ul');
      articleElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.numberOfCookie[i]} cookies.`;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    }};

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };
  
    

  Dubai.cookiePerHour();
  Dubai.numberOfCustomers(); 
  Dubai.render();
  console.log(Dubai);
  
  const Paris = {
    name: 'Paris',
    customersDefault: [],
    minNumber: 11,
    maxNumber: 38,
    cookieAvg: 3.7,
    numberOfCookie:[],
    totalCookies: 0,
    cookiePerHour: function() {
      for (let i=0; i < workingHours.length; i++){
        let cookie = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg);
        this.numberOfCookie.push(cookie);
        this.totalCookies += cookie; 
      }},
      
      numberOfCustomers: function(min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },

    render: function () { 
      const parentElement = document.getElementById('locationList'); 
      const articleElement = document.createElement('article');
      parentElement.appendChild(articleElement);

      const h2Element = document.createElement('h2');
      articleElement.appendChild(h2Element);
      h2Element.textContent = this.name; 

      const ulElement = document.createElement('ul');
      articleElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.numberOfCookie[i]} cookies.`;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    }};

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };
  
    

  Paris.cookiePerHour();
  Paris.numberOfCustomers(); 
  Paris.render();
  console.log(Paris);    
  
  const Lima = {
    name: 'Lima',
    customersDefault: [],
    minNumber: 2,
    maxNumber: 16,
    cookieAvg: 3.7,
    numberOfCookie:[],
    totalCookies: 0,
    cookiePerHour: function() {
      for (let i=0; i < workingHours.length; i++){
        let cookie = Math.ceil(generateRandomNumber(this.minNumber, this.maxNumber)* this.cookieAvg);
        this.numberOfCookie.push(cookie);
        this.totalCookies += cookie; 
      }},
      
      numberOfCustomers: function(min,max) {
      this.customersDefault = generateRandomNumber(min, max);
    },

    render: function () { 
      const parentElement = document.getElementById('locationList'); 
      const articleElement = document.createElement('article');
      parentElement.appendChild(articleElement);

      const h2Element = document.createElement('h2');
      articleElement.appendChild(h2Element);
      h2Element.textContent = this.name; 

      const ulElement = document.createElement('ul');
      articleElement.appendChild(ulElement);

      for (let i =0; i < workingHours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${workingHours[i]} : ${this.numberOfCookie[i]} cookies.`;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total: ${this.totalCookies} cookies`; 
    }};

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
  };
  
    

  Lima.cookiePerHour();
  Lima.numberOfCustomers(); 
  Lima.render();
  console.log(Lima);
      

  