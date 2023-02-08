import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { MatDatepickerToggle } from '@angular/material';
import { __values } from 'tslib';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor() { }
// declerations
name ="harika";
age="24";
details :any;

  ngOnInit(): void {
    // older version of function syntax
    function gender(){
  return "female"
    }

    //template literals or sting literals - intead of writing in "" and '' we use back ticks
   this.details = `my name is ${this.name} and my age is ${this.age}
   iam a ${gender()}`;

  // Arrow functions
const sum = (x:any,y:any) => x+y;
console.log(sum(2,5))
const sum2 = () => 5+6;
console.log(sum2());

// we use return if we have multiple lines of code
const sum3 = (x: any,y: any,z:any) =>{
   z=x+y+z;
  return z
}
console.log(sum3(1,1,4));

// returning objects using arrow functions
const birds = () => ({
  name:'parrot',color:'green'
})
console.log(birds());
//mutable and immutable objects
let a = ['harika', 'rajesh'];
let b=[...a]; // we use spread operator to avoid mutability
b.pop();
console.log('spread',...a);
console.log('spread op', b);

//Rest Parameter
function add(... _value: number[]){
  let sum = 0;
  for(let i of _value){
      sum+=i;
  }
  return sum;
}
console.log(add(2,3));
console.log(add(2,3,20,10));

//map in array
const animals =["dog","cat","monkey"];
const animalist = animals.map(d => d.toUpperCase());
console.log("animals map", animalist)

//map in array o\f objects
const cars = [
  {color:"white", model:"kia"},
  {color:"black", model:"honda"}
]
const carnames = cars.map(d => d.model);
console.log("carnames",carnames)

//filter in array
const colors =["green","violet","yellow"]
const colorgreen = colors.filter(d=>d === "green");
console.log(colorgreen)

// filters in array of objects
const address = [
  {name:"harika",address:"rjy"},
  {name:"harish", address:"mtm"},
  {name:"raji", address:"rjy"},
  {name:"siri", address:"hyd"},
  {name:"aruna", address:"hyd"},
  {name:"sekhar", address:"rjy"},
]
const addressrjy = address.filter(data => (data.address === "rjy" || data.address ==="mtm"));
console.log("address",addressrjy);

//reduce in old method (without using reduce())
const score = [10,20,40];
const len= score.length;
function calculate(score:any){
  let sum=0;
for(let i=0;i<len ;i++){
sum=sum+score[i];
}
return sum;
}
console.log(calculate(score));

//Reduce (with using reduce())
const score1 = [2,3,1]
const totalScore = score1.reduce(function(accumulator,value){
  return accumulator+value;
},0)
console.log(totalScore);

//Reduce (with using reduce()) and arrow function
const score2=[11,11,11];
const totalscore2 = score2.reduce((accumulator ,value)=>
accumulator+value,0)
console.log(totalscore2)
  
//add the rate and rate2 of all address rjy using reduce filter and map
const maths = [
  {name:"harika",address:"rjy",rate:10,rate2:11},
  {name:"harish", address:"mtm",rate:6,rate2:6},
  {name:"raji", address:"rjy",rate:8,rate2:9},
  {name:"siri", address:"hyd",rate:10,rate2:3},
  {name:"aruna", address:"hyd",rate:5,rate2:4},
  {name:"sekhar", address:"rjy",rate:6,rate2:5},
]
const rates =maths.filter(d=>d.address === "rjy").map(data=>data.rate+data.rate2)
.reduce((acc,value)=>acc+value,0);
console.log("answer",rates)

//assignment add the rate and rate2 of all address rjy using reduce
const location = [
  {name:"harika",address:"rjy",rate:10,rate2:11},
  {name:"harish", address:"mtm",rate:6,rate2:6},
  {name:"raji", address:"rjy",rate:8,rate2:9},
  {name:"siri", address:"hyd",rate:10,rate2:3},
  {name:"aruna", address:"hyd",rate:5,rate2:4},
  {name:"sekhar", address:"rjy",rate:6,rate2:5},
]
const allrates = location.reduce((acc,value)=>{
  if(value.address === "rjy"){
    acc =acc+value.rate+value.rate2
  }
  return acc;
},0)
console.log("allrates",allrates)

//shallow and deep
//json.stringify wont work for functions but works for nested
let oV = {
  name:'harika',
  lname:'y',
  age:24,
  fullname: function(){
   return this.name +this.lname;
  },
  address:{
    city:'rajahmundry',
    pin: 533101
  }
}
let cV = JSON.parse(JSON.stringify(oV));
cV.name ='peter'
cV.address.city ='Hyderabad'
console.log('Ov',oV);
console.log('Cv',cV);

//object.assign works for functions but does'nt work for nested objects
let originalV = {
  name:'happy',
  lname:'home',
  age:24,
  fullname: function(){
   return this.name +this.lname;
  },
  address:{
    city:'rajahmundry',
    pin: 533101
  }
}

let copiedV = Object.assign({},originalV);
copiedV.address.city='hyd' //geting same city for both original and copied variables
console.log('object assign original',originalV);
console.log('object assign Copied', copiedV);

// if we dont use {} it will behave differently
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2 , o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
console.log(o2); // {b:2}
console.log(o3); //{c:3}

const p1 = { a: 1, b: 2, c: 3 };
const p2 = { b: 3, c: 4 };
const p3 = { c: 5 };

const obje = Object.assign(p1, p2, p3);
console.log(obje ,'hi'); // {a:1 ,b:3 , c:5}
console.log(p1 ,'hi'); // {a:1 ,b:3 , c:5}
console.log(p2 ,'hi'); // { b: 3, c: 4 }
console.log(p3 ,'hi'); //{ c: 5 }

 // we can use sperad operator 
 let originalValue = {
  name:'happy',
  lname:'home',
  age:24,
  fullname: function(){
   return this.name +this.lname;
  },
  address:{
    city:'rajahmundry',
    pin: 533101
  }
}

let copiedValue = {...originalValue}
copiedValue={...copiedValue , lname:"zomato" ,
 address:{...copiedValue.address , city:'hyd', pin:33456
} };
// copiedValue.lname ="zomato";  //this will work
// copiedValue.address.city="hyd"  //this wont work because nested data
console.log('spead original', originalValue);
console.log('spead copied', copiedValue);

//higher order function
function x(fn :any){
return fn();
}
function y(){
  return console.log("hi hello harry");
}
x(y); //here x is higher order function // y is call back function
// y()

// example  for higher order functions double and square
function squareApp(c:any){
return c*c
}
function multiApp(a:any){
return 2*a
}
function even(f:any){
 if(f%2 === 0){
  return f;
 }
}
function odd(h: any){
if(h%2 !== 0){
return h
}
}
const appno = [2,3,4]
 function sqApp(data: any , cbfun :any){
  let output = [];
  for(let i=0; i<appno.length;i++){
    cbfun(data[i])? output.push(cbfun(data[i])) : null;
  }
  return output
 }
console.log(sqApp(appno , squareApp));
console.log(sqApp(appno , multiApp));
console.log("using map",appno.map( d => d*2), appno.map(d=>d*d));
console.log("using map functions",appno.map(multiApp),appno.map(squareApp));
console.log("odd even",sqApp(appno,even))
console.log("even",sqApp(appno,odd));


// const datano = [2,3,4]
//  function mullApp(data: any){
//   let output = [];
//   for(let i=0; i<appno.length;i++){
//     output.push(2*data[i])
//   }
//   return output
//  }
// console.log(mullApp(appno))


// exampld for higher order functions add and mul
function addRoll(e: any , inVa:any){
return  inVa +e
}
function mulRolln(f:any, inVal:any){
return inVal*f
}

const rollno = [10,20,40];
function cal(d: any , calculate:any , initialValue:any){
// let mul=1;
let out = initialValue;
for(let i=0; i<rollno.length;i++){
  out = calculate(d[i] , out);
}
return out;
}
console.log('sumod',cal(rollno , addRoll , 0));
console.log('mul',cal(rollno , mulRolln , 1));
console.log('sum using reduce',rollno.reduce((acc,value)=>{
  return acc=acc+value;
},0), rollno.reduce((acc,value)=>{
  return acc=acc*value;
},1));
console.log('sum using reduce functions', rollno.reduce(addRoll) , rollno.reduce(mulRolln));
let num=0;
rollno.map(d=>num= num+d)
console.log("adding using map",num);

// call apply and bind functions
 const custDetails = {
  name: "Jerry",
  lastname: "jam",
  address:{
    city:"rjy",
    pin: 54355,
  },
  getdetails: function(fruit: any){
    console.log(`Name is ${this.name} and
    city is ${this.address.city} like ${fruit}` );
  }
 }
 const empDetails = {
  name: "tom",
  address:{
    city:"hyd",
    pin:83653
  },
 }

custDetails.getdetails('orange')
custDetails.getdetails.call(empDetails , 'mango')
custDetails.getdetails.apply(empDetails ,['apple'])
const handler =custDetails.getdetails.bind(empDetails)
handler('guava'); 

//destructuring in objects and also using rest parameter
const { name:fname , address:{city}, ...other} = custDetails
console.log(fname,city,other, "destructuring in objects")

//destructuring in arrays and also using rest parameter
const plants =["money plant","turtle wine","sansaveria","hearts wine","golden pothos"]
const [plant1 , , plant3 , ...otherPlants] = plants;
console.log(plant1,plant3,"destructuring in arrays")
console.log(otherPlants,"destructuring with rest parameter");

//Recursion - a funtion calling itself

function numberLoop(n: number){
if( n === 10)   // n > 10
return;
console.log(n);
numberLoop(n+1)
}
numberLoop(0);

// recursion example 2

function subRecursion(n:any ,total:any){
if( n === 0){
console.log(total,"addition");
return;
}
subRecursion(n-1,total=total+n);
}
subRecursion(3,0);


// array length
let numbs = [1,2,8,10]
let dogs =["puppy","bigdog","smalldog"];
console.log(dogs[0]);
let dogslength = dogs.length  // to know the length
console.log(dogs[dogslength-1]) // to access the last element
dogs.push("harika")
console.log(dogs)

const numbsTostring=numbs.map(d=>d.toString(2));
console.log(numbsTostring,"to string");

















}




// //prototype
// // function Books() {
// //  let bname = "haro";
// // // let getpages = function(){
// // //   console.log(bname)
// // // }
// // }
// // let book1 = new(Books as any);
// // console.log(book1 )

// let books =[ "atomic habits", "elon musk"];

// let book2 = ["chemistry","physics"];


// console.log(books)
// console.log(book2)

// optional chaining not supporthing in this version
// const class7th ={
// studentName:"harika",
// age:12,
// gender:"female",
// address:{
//   doorno:45-5,
//   city:"rjy",
//   pin:55433,
//   oldAddress:{
//     street:"gandhi strret",
//     postalcode:76532,
//   }
// },
// subjects:{
//   maths:{
//     maths1:20,
//     maths2:18
//   },
//   science:15
// },
// }
// console.log(class7th.address?.oldAddress?.street)
// const dogname = class7th.dog?.citys



}
