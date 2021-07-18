

"use strict"

let div=document.getElementById("result")

let hours= [
  "6am","7am","8am", "9am" ,"10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"  ]




  
  
// let table=document.createElement('table');
// div.appendChild(table);


// function makeHeader(){

//   let headerRow= document.createElement('tr');
//   table.appendChild(headerRow)
//   let firstTh=document.createElement('th');
//   headerRow.appendChild(firstTh);
//   firstTh.textContent='name';

//   for (let i = 0; i < hours; i++) {
//     let hoursTh=document.createElement('th');
//     headerRow.appendChild(hoursTh);
//     hoursTh.textContent=hours[i];
     
//   }
// }
// let lastth=document.createElement('th');
// headerRow.appendChild(lastth);
// lastth.textContent='daily location total';

// makeHeader();










// let seattle = {
//   minume: 23,
//   max: 65,
//   average: 6.3,
//   storeName: "seattle", 
//   cockiesPerHour: [],
//   cusPerHour: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;},
//   generateCokies: function () {
//     for (let i = 0; i < 14; i++) {
//       let cockeis= this.average * this.cusPerHour(this.minume, this.max)
//      this.cockiesPerHour.push (Math.round(cockeis) )

    
//     }
//   },
// render:function(){
//   let h1 = document.createElement("h1")
//   div.appendChild(h1);
//  h1.textContent= this.storeName
//   let ul=document.createElement("ul")
//   div.appendChild(ul)
//   for(let i=0; i<14; i++ ){
//     let li=document.createElement("li")
//     ul.appendChild(li);
//     li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"
    

//    }

  
// }
  
// }
// seattle.generateCokies();
// seattle.render();






// let tokyo = {
//   minume: 3,
//   max: 24,
//   average: 1.2,
//   storeName2: "tokyo", 
//   cockiesPerHour: [],
//   cusPerHour: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;},
//   generateCokies: function () {
//     for (let i = 0; i < 14; i++) {
//       let cockeis= this.average * this.cusPerHour(this.minume, this.max)
//      this.cockiesPerHour.push (Math.round(cockeis) )

    
//     }
//   },
// render:function(){
//   let h1 = document.createElement("h1")
//   div.appendChild(h1);
//  h1.textContent= this.storeName2
//   let ul=document.createElement("ul")
//   div.appendChild(ul)
//   for(let i=0; i<14; i++ ){
//     let li=document.createElement("li")
//     ul.appendChild(li);
//     li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"
    

//    }

  
// }
  
// }
// tokyo.generateCokies();
// tokyo.render();








// let Dubai = {
//   minume: 11,
//   max: 38,
//   average: 3.7,
//   storeName2: "Dubai", 
//   cockiesPerHour: [],
//   cusPerHour: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;},
//   generateCokies: function () {
//     for (let i = 0; i < 14; i++) {
//       let cockeis= this.average * this.cusPerHour(this.minume, this.max)
//      this.cockiesPerHour.push (Math.round(cockeis) )

    
//     }
//   },
// render:function(){
//   let h1 = document.createElement("h1")
//   div.appendChild(h1);
//  h1.textContent= this.storeName2
//   let ul=document.createElement("ul")
//   div.appendChild(ul)
//   for(let i=0; i<14; i++ ){
//     let li=document.createElement("li")
//     ul.appendChild(li);
//     li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"
    

//    }

  
// }
  
// }
// Dubai.generateCokies();
// Dubai.render();





// let Paris = {
//   minume: 20,
//   max: 38,
//   average: 2.3,
//   storeName2: "Paris", 
//   cockiesPerHour: [],
//   cusPerHour: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;},
//   generateCokies: function () {
//     for (let i = 0; i < 14; i++) {
//       let cockeis= this.average * this.cusPerHour(this.minume, this.max)
//      this.cockiesPerHour.push (Math.round(cockeis) )

    
//     }
//   },
// render:function(){
//   let h1 = document.createElement("h1")
//   div.appendChild(h1);
//  h1.textContent= this.storeName2
//   let ul=document.createElement("ul")
//   div.appendChild(ul)
//   for(let i=0; i<14; i++ ){
//     let li=document.createElement("li")
//     ul.appendChild(li);
//     li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"
    

//    }

  
// }
  
// }
// Paris.generateCokies();
// Paris.render();








let seattle = {
  minume: 23,
  max: 65,
  average: 6.3,
  storeName2: "seattle", 
  cockiesPerHour: [],
  total:0,
  cusPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;},
  generateCokies: function () {
    for (let i = 0; i < 14; i++) {
      let cockeis= this.average * this.cusPerHour(this.minume, this.max)
     this.cockiesPerHour.push (Math.round(cockeis) )
     this.total+= this.cockiesPerHour[i];

    
    }
  },
render:function(){
  let h1 = document.createElement("h1")
  div.appendChild(h1);
 h1.textContent= this.storeName2
  let ul=document.createElement("ul")
  div.appendChild(ul)
  for(let i=0; i<14; i++ ){
    let li=document.createElement("li")
    ul.appendChild(li);
    li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"


    

   }
   let totalElement =document.createElement("li")
   ul.appendChild(totalElement);
   totalElement.textContent=`total: ${this.total} cockeis`

       
  
}
  
}
seattle.generateCokies();
seattle.render();











let Tokyo = {
  minume: 3,
  max: 24,
  average: 1.2,
  storeName2: "Tokyo", 
  cockiesPerHour: [],
  total:0,
  cusPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;},
  generateCokies: function () {
    for (let i = 0; i < 14; i++) {
      let cockeis= this.average * this.cusPerHour(this.minume, this.max)
     this.cockiesPerHour.push (Math.round(cockeis) )
     this.total+= this.cockiesPerHour[i];

    
    }
  },
render:function(){
  let h1 = document.createElement("h1")
  div.appendChild(h1);
 h1.textContent= this.storeName2
  let ul=document.createElement("ul")
  div.appendChild(ul)
  for(let i=0; i<14; i++ ){
    let li=document.createElement("li")
    ul.appendChild(li);
    li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"


    

   }
   let totalElement =document.createElement("li")
   ul.appendChild(totalElement);
   totalElement.textContent=`total: ${this.total} cockeis`

       
  
}
  
}
Tokyo.generateCokies();
Tokyo.render();







let Dubai = {
  minume: 11,
  max: 38,
  average: 3.7,
  storeName2: "Dubai", 
  cockiesPerHour: [],
  total:0,
  cusPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;},
  generateCokies: function () {
    for (let i = 0; i < 14; i++) {
      let cockeis= this.average * this.cusPerHour(this.minume, this.max)
     this.cockiesPerHour.push (Math.round(cockeis) )
     this.total+= this.cockiesPerHour[i];

    
    }
  },
render:function(){
  let h1 = document.createElement("h1")
  div.appendChild(h1);
 h1.textContent= this.storeName2
  let ul=document.createElement("ul")
  div.appendChild(ul)
  for(let i=0; i<14; i++ ){
    let li=document.createElement("li")
    ul.appendChild(li);
    li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"


    

   }
   let totalElement =document.createElement("li")
   ul.appendChild(totalElement);
   totalElement.textContent=`total: ${this.total} cockeis`

       
  
}
  
}
Dubai.generateCokies();
Dubai.render();








let Paris = {
  minume: 20,
  max: 38,
  average: 2.3,
  storeName2: "Paris", 
  cockiesPerHour: [],
  total:0,
  cusPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;},
  generateCokies: function () {
    for (let i = 0; i < 14; i++) {
      let cockeis= this.average * this.cusPerHour(this.minume, this.max)
     this.cockiesPerHour.push (Math.round(cockeis) )
     this.total+= this.cockiesPerHour[i];

    
    }
  },
render:function(){
  let h1 = document.createElement("h1")
  div.appendChild(h1);
 h1.textContent= this.storeName2
  let ul=document.createElement("ul")
  div.appendChild(ul)
  for(let i=0; i<14; i++ ){
    let li=document.createElement("li")
    ul.appendChild(li);
    li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"


    

   }
   let totalElement =document.createElement("li")
   ul.appendChild(totalElement);
   totalElement.textContent=`total: ${this.total} cockeis`

       
  
}
  
}
Paris.generateCokies();
Paris.render();















let Lima = {
  minume: 2,
  max: 16,
  average: 4.6,
  storeName2: "Lima", 
  cockiesPerHour: [],
  total:0,
  cusPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;},
  generateCokies: function () {
    for (let i = 0; i < 14; i++) {
      let cockeis= this.average * this.cusPerHour(this.minume, this.max)
     this.cockiesPerHour.push (Math.round(cockeis) )
     this.total+= this.cockiesPerHour[i];

    
    }
  },
render:function(){
  let h1 = document.createElement("h1")
  div.appendChild(h1);
 h1.textContent= this.storeName2
  let ul=document.createElement("ul")
  div.appendChild(ul)
  for(let i=0; i<14; i++ ){
    let li=document.createElement("li")
    ul.appendChild(li);
    li.textContent= hours[i] + this.cockiesPerHour[i] +"cookies"


    

   }
   let totalElement =document.createElement("li")
   ul.appendChild(totalElement);
   totalElement.textContent=`total: ${this.total} cockeis`

       
  
}
  
}
Lima.generateCokies();
Lima.render();






