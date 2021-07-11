'use strict';

// global Variable
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];





  
let Seattle={
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustomers:[],
    cookiespPurchased:[],
    Totals: 0,
// Getting random number
    getRandomCustomers: function (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
      }
    ,
    // Calculate the Cookies
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
          let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
          console.log(cookiespPurchased)
          this.cookiespPurchased.push(cookiespPurchased);
          this.Totals += cookiespPurchased;
          
        }
    },
    // rendering the content
    render: function(){
        this.avgCookies()
        let store = document.getElementById('store');
        let ulElemnt = document.createElement('ul');
        ulElemnt.textContent = this.name
        store.appendChild(ulElemnt)
        
        for (let i = 0; i < hours.length; i++) {
            let liElemnt = document.createElement('li');
            ulElemnt.appendChild(liElemnt);
            liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
        }
        let liElemnt = document.createElement('li');
        ulElemnt.appendChild(liElemnt);
        liElemnt.textContent=`Total : ${this.Totals}`
    }

}

Seattle.avgCookies();
Seattle.render();

// For Tokyo store 
let Tokyo={
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustomers:[],
    cookiespPurchased:[],
    Totals: 0,
// Getting random number
    getRandomCustomers: function (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
      }
    ,
    // Calculate the Cookies
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
          let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
          console.log(cookiespPurchased)
          this.cookiespPurchased.push(cookiespPurchased);
          this.Totals += cookiespPurchased;
          
        }
    },
    // rendering the content
    render: function(){
        this.avgCookies()
        let store = document.getElementById('store');
        let ulElemnt = document.createElement('ul');
        ulElemnt.textContent = this.name
        store.appendChild(ulElemnt)
        
        for (let i = 0; i < hours.length; i++) {
            let liElemnt = document.createElement('li');
            ulElemnt.appendChild(liElemnt);
            liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
        }
        let liElemnt = document.createElement('li');
        ulElemnt.appendChild(liElemnt);
        liElemnt.textContent=`Total : ${this.Totals} Cookies`
    }

}

Tokyo.avgCookies();
Tokyo.render();



//Dubai
let Dubai={
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    randomCustomers:[],
    cookiespPurchased:[],
    Totals: 0,
// Getting random number
    getRandomCustomers: function (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
      }
    ,
    // Calculate the Cookies
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
          let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
          console.log(cookiespPurchased)
          this.cookiespPurchased.push(cookiespPurchased);
          this.Totals += cookiespPurchased;
          
        }
    },
    // rendering the content
    render: function(){
        this.avgCookies()
        let store = document.getElementById('store');
        let ulElemnt = document.createElement('ul');
        ulElemnt.textContent = this.name
        store.appendChild(ulElemnt)
        
        for (let i = 0; i < hours.length; i++) {
            let liElemnt = document.createElement('li');
            ulElemnt.appendChild(liElemnt);
            liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
        }
        let liElemnt = document.createElement('li');
        ulElemnt.appendChild(liElemnt);
        liElemnt.textContent=`Total : ${this.Totals} Cookies `
    }

}

Dubai.avgCookies();
Dubai.render();



// For Paris Store
let Paris={
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    randomCustomers:[],
    cookiespPurchased:[],
    Totals: 0,
// Getting random number
    getRandomCustomers: function (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
      }
    ,
    // Calculate the Cookies
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
          let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
          console.log(cookiespPurchased)
          this.cookiespPurchased.push(cookiespPurchased);
          this.Totals += cookiespPurchased;
          
        }
    },
    // rendering the content
    render: function(){
        this.avgCookies()
        let store = document.getElementById('store');
        let ulElemnt = document.createElement('ul');
        ulElemnt.textContent = this.name
        store.appendChild(ulElemnt)
        
        for (let i = 0; i < hours.length; i++) {
            let liElemnt = document.createElement('li');
            ulElemnt.appendChild(liElemnt);
            liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
        }
        let liElemnt = document.createElement('li');
        ulElemnt.appendChild(liElemnt);
        liElemnt.textContent=`Total : ${this.Totals} Cookies`
    }

}

Paris.avgCookies();
Paris.render();

// For Lima store 
let Lima={
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    randomCustomers:[],
    cookiespPurchased:[],
    Totals: 0,
// Getting random number
    getRandomCustomers: function (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        return rand
      }
    ,
    // Calculate the Cookies
    avgCookies: function () {
        for (let i = 0; i < hours.length; i++) {
          let cookiespPurchased = Math.ceil(this.getRandomCustomers(this.min,this.max) * this.avg);
          console.log(cookiespPurchased)
          this.cookiespPurchased.push(cookiespPurchased);
          this.Totals += cookiespPurchased;
          
        }
    },
    // rendering the content
    render: function(){
        this.avgCookies()
        let store = document.getElementById('store');
        let ulElemnt = document.createElement('ul');
        ulElemnt.textContent = this.name
        store.appendChild(ulElemnt)
        
        for (let i = 0; i < hours.length; i++) {
            let liElemnt = document.createElement('li');
            ulElemnt.appendChild(liElemnt);
            liElemnt.textContent=hours[i] + `: ${this.cookiespPurchased[i]}  Cookies` ;
        
           
            
        }
        let liElemnt = document.createElement('li');
        ulElemnt.appendChild(liElemnt);
        liElemnt.textContent=`Total : ${this.Totals} Cookies`
    }

}

Lima.avgCookies();
Lima.render();