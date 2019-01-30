//events();
Math.random();

function events(){

    //Getting an element of HTML
    let container = document.getElementById("container");

    let button = document.createElement("button");
    button.textContent = "Display products";

    container.appendChild(button);

    let addContentBtn = document.getElementById("add-content-btn");
    addContentBtn.onclick = function(){
        console.log("Button was clicked!");
        displayProducts();
    }

    let text = document.getElementById("add-content-btn");
    addContentBtn.onmouseover = function() {
        console.log("Bum!");
        displayProducts();
    }
}



function classes(){
    class Car{

        //You don't declare the fields: name, speed,..

        constructor(name, maxSpeed){
            this.name = name;
            this.maxSpeed = maxSpeed;
            this.speed = 0;
        }

        accelerate(amount){
            this.speed += amount;
        }
    }

    let car = new Car("Audi", 250);
    car.accelerate(50);
    car.accelerate(40);
    console.log("Now the "+car.name+" car is running at "+ car.speed);


    let car2= {
        name: "Audi",
        speed:100
    };
    console.log("Car2 is: " + car2.name );

    console.log(car);
    console.log(car2);
    function object(){
        let car1 = {
            name:"Ferrari",
            color:"red",
            maxSpeed: 300,
            available: true
        };

        let car2 = {
            name:"Ford",
            maxSpeed: 200,
            available:false,
            weight:1000
        }

        console.log(car1.name+ " has color "+ car1.color);
        console.log(car2.name + " weights "+ car2.weight);

        car2.owner = "Alessandro";

        console.log(car2.name + " is owned by "+ car2.owner);

        let attribute = "maxSpeed";
        console.log("The property "+ attribute+ " of car1 is" + car1[attribute]);

    }
}

function displayProducts(){



let element = document.getElementById("text");
console.log("The content of this element: "+element.textContent);
element.textContent = "I am happy for Monica a lot."

let container = document.getElementById("container");
let paragraph = document.createElement("p");
paragraph.textContent = "Monica is getting married!!!";
container.appendChild(paragraph);

//let array = ["one","two","three"];
// Create an array of objects
let array = [
    { name: "tv", price: 200 },
    { name: "pen", price: 5 }
    ];

let div = document.createElement("div");

for (value of array){
    // Create a new element (paragraph)
    let paragraph = document.createElement("p");
    // change the content of paragraph
    paragraph.textContent = value.name+ " costs "+ value.price;
    // add the prg. to the container(so it is displayed)
    div.appendChild(paragraph);
}

container.appendChild(div);
}

function basics(){
    console.log("hello");

//var message ="hello js";
    let name = "Monica";
    let school = "BTS";

    console.log(name + " who is muy guapa, " +school + ":she is here");

    let age = 20;
    if (age >= 18){
        console.log("adult");
    } else {
        console.log("not adult");
    }

    let i=1;
    while(i <= 5){
        console.log(i);
        i++;
    }

    for(let j=1; j<= 4; j++){
        console.log(j);
    }

}
function arrays(){
    let array =[2,4,6];
    array.push(8);
    let x = array [1];
    console.log("x: "+x);
    console.log(array);

    for (let i=0; i<array.length; i++){
        console.log("Value at index " + i + " is " + array[i]);
    }

    for(let value of array){
        console.log(value);
    }

}

function functions(){

    let result = sum(4,6);
    console.log("The result is "+ result);

    greet("BTS");

    function greet(name) {
        console.log("hi "+ name);

    }
    function sum(x,y){
        return x+y;
    }

}