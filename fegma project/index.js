// alert("alert")

console.log("hari")

firstn="shyam"
lastn="ram"
 firstn="hello"
console.log(firstn,lastn)
console.log(firstn,lastn)
console.log(firstn,lastn)
console.log(firstn,lastn)
console.log(firstn,lastn)
console.log(firstn,lastn)


age="20"
console.log("my age is" ,age)





fN="shubham"
lN="gupta"
 
full_name=fN+lN
fullName=(fN,lN)
console.log("my name is ",full_name)

console.log("my name is",fullName)


function print()
{
    document.getElementById().window.print();
}

let price ;
price = 100000 ;
console.log("I phone price is",price);

const pi=3.14
console.log("the value of pi is",pi)



price=90000
console.log(" new Iphone price is",price)

function myFunction(){
    document.getElementById("listing").innerHTML ="shubham";

}



// window.alert("is connected");


let course = ["bca","bit","bba","mba"];
console.log("course of array is " , course[2], course[0]);



let person = ["ram","shyam","hari"];
console.log("the list of name is",person);
person[1]="shubham";
console.log(person);


let tv = {
    tvname: "lg",
    color:"white",
    price:5000,


}
console.log("TV--",tv);


let colorRed = {

    hax : "#03215",
    colorname :"red",
    rgbcode:"255,0,0" 


}
console.log("color property is",colorRed);


let allColor = [colorRed,tv];
console.log(allColor);

let familyMembers = [
    {
        index:0,
        name: "mr dad",
        age: 50,
        phone: 98510
    },
    {
        index:0,
        name: "mrs mom",
        age: 45,
        phone: 98666,
    },
    {
        index:2,
        name: " brother",
        age: 999999,
        phone: 97666,
    },
]

console.log("familyMembers", familyMembers);

familyMembers[2].age = 20 ; 

console.log("familyMembers", familyMembers);
console.log("shubham gupta");
console.log("shubham gupta");


let s = {
    a :true,
    b : false,
    c : false
}

if((s.a && s.b) ){
    console.log("can take");
}else{
    console.log("cant");
}



let dbEmail = "ram@ram";
let dbPassword = "123456";

let user1 = {
    email : "ram@ram",
    Password : "password"
}
if(user1.email === dbEmail && user1.Password === dbPassword){
    console.log("user1 its matched");
}
else{
    console.log("user1 not matched");
}


let user2 = {
    email : "ram@ram",
    Password : "password"
}
if(user2.email === dbEmail && user2.Password === dbPassword){
    console.log("user2 its matched");
}
else{
    console.log("user2 not matched");
}

let user3 = {
    email : "ram@ram",
    Password : "passwords"
}
if(user3.email === dbEmail && user3.Password === dbPassword){
    console.log("user3 its matched");
}
else{
    console.log("user3 not matched");
}


if(user1.Password === dbPassword && user2.Password === dbPassword && user3.Password == dbPassword)
{
    console.log("its matched to login");
}else{
    console.log("invalid");
}


function calculateSum(n1,n2){
    // console.log(" 2 + 5 = 6 ");
    // console.log(".........");
    console.log({n1},{n2});
    // console.log("\n");
    console.log(n1 + " + " + n2 + " = " + (n1+n2));
}
calculateSum(1,3)
calculateSum(3,4)
calculateSum(5,6)
calculateSum(100,200)

// another way +++++++++++++++

function calculateSum(n1,n2){
    // console.log(" 2 + 5 = 6 ");
    // console.log(".........");
    console.log("\n");

    console.log({n1},{n2});
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}
calculateSum(500,600)


function conditionCheck(mainPassword){
    let dbPasswordKey = 123456;
    if (mainPassword === dbPasswordKey) {
              console.log("success");
    }else{
        console.log("Error");
    }
console.log(`${mainPassword}`);
}
conditionCheck(123456);
conditionCheck(21154521215);



for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("the number is Fizz-buzz");
    }
    else if (i % 3 === 0) {
      console.log("the numbera is Fizz");
    }
    else if (i % 5 === 0) {
      console.log("the number is buzz");
    }
console.log(`${i}`);    
}


// let male = "20"
// function male (){
// console.log({person});
// }

// let person = {
//     name : "hari",
//     "gender" : male
// };



function checker(input){
// return typeof(input);
if(typeof(input) === "number"){
return true;}
else{
    return false;
}
}
console.log(checker(100)); 
console.log(checker("shubham"));
console.log(checker(1));




let todos = [
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: false },
]

/* output : 
    html is true
    css is true
    js is true


    html is completed
    css is completed
    js is pending

*/


function checkData(todos)
{
if(todos.status){
    console.log(`${todos.title}` + " is completed ");
}else{
    console.log(`${todos.title}` + " is pending ");
}
}
checkData(todos[0]);
checkData(todos[1]);
checkData(todos[2]);


let num = 0;
for(num = 0; num <= 10; num++)
{
    console.log("the nummber is ",num);
}




arrayNumbers = [5,7,9,10,12,14,2]
// let doubleNumbers = [];
// doubleNumbers.push(5)
// console.log(doubleNumbers);
for(index = 0; index <= 6; index++){
    console.log("index is ",index);
    console.log(arrayNumbers[index]);

    if(arrayNumbers[index] % 2 == 0){
        console.log("even numbers",`${index}`);
    }else{
        console.log("odd number",`${index}`);
    }
}

    



