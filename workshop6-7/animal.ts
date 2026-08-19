class Animal {
    move(){
        console.log("animal is moving");
    }
}

class dog extends Animal{
    bark(){
        console.log("Dog is barking")
    }
}

const dog1 = new dog();
dog1.move();
dog1.bark();