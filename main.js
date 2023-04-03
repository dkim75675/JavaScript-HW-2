
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function food(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.values(person3)[i])
        }
        else{
            console.log(Object.values(person3)[i])
        }
    }
}

console.log(food())


/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
        this.name = name;
        this.age = age;
    

    Person.prototype.info = () => {console.log(`Name: ${this.name} \n Age: ${this.age}`)}
    Person.prototype.increaseAge = () => {console.log(this.age ++)}
}

let person_1 = new Person('John', 20)
let person_2 = new Person('Stephanie', 22)

person_1.info()
person_2.info()
person_2.increaseAge()
person_2.increaseAge()
person_2.increaseAge()
person_2.info()



/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringCheck = (text) =>{
    return new Promise( (resolve, reject) => {
        if(text.length > 10){
            resolve(true)
        } else{
            reject(false)
        }
    })
}

stringCheck("asjdnajkfndjfnd asdkasdksa 2 2e1 dwads asd ")
.then( (result) =>{
    console.log("Big Word")
})

stringCheck("abc")
.catch( (error) => {
    console.log('Small Number')
})


