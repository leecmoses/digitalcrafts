/*
JavaScript 101 Exercises
You will be rewriting in JavaScript a series of exercises you've written in Python. 
There will also be a few new challenges. Because JavaScript's pop-up prompt is annoying (and doesn't work in Node.js), we won't take in any user input. 
Instead, you will write each exercise as a function, and any required input will be supplied to the function as arguments.
*/

/*
Hello, you!
Write a function hello which given a name, says hello to the name. Use the following template:
    function hello(name) {
    // put your code here
    }
    hello('Mustache');

Make the above program print
    Hello, Mustache!
*/

function hello(name) {
    console.log("Hello, " + name + "!");
}

hello('Mustache')

/* 
Hello, you! Part 2
Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
*/

function hello(name) {
    // ternary operator
    console.log((name) ? ("Hello, " + name + "!") : ("Hello, World!"));

    // Option #2
    if (name){
        return "Hello, " + name + "!";
    }
    return "Hello, world!";
}

hello()

/*
Madlib
Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:
    > madlib('Anushka', 'art');
    'Anushka's favorite subject in school is art.'
*/

function madlib(name, subject) {
    return name + "'s favorite subject is " + subject + ".";
}
console.log(madlib("Anunshka", "art"))

/*
Tip Calculator
Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. 
Based on:
    good -> 20%
    fair -> 15%
    bad -> 10%
    > tipAmount(100, 'good')
    20
    > tipAmount(40, 'fair')
    6
*/

function tipAmount(amount, service) {
    if (service === "good") {
        var tip = .2;
    } else if (service === "fair") {
        var tip = .15;
    } else if (service === "bad") {
        var tip = .1;
    }
    return (tip * parseInt(amount))
}

console.log(tipAmount(12, 'fair'))

/*
Tip Calculator #2
Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
    > totalAmount(100, 'good')
    120
    > totalAmount(40, 'fair')
    46
*/

function tipAmount(amount, service) {
    if (service === "good") {
        var tip = .2;
    } else if (service === "fair") {
        var tip = .15;
    } else if (service === "bad") {
        var tip = .1;
    }
    return (tip * parseInt(amount));
}

function totalAmount(amount, service) {
    return tipAmount(amount, service) + parseInt(amount);
}

console.log(totalAmount(12, 'fair'))

/*
Tip Calculator #3
Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
    > splitAmount(100, 'good', 5)
    24
    > splitAmount(40, 'fair', 2)
    23
*/

function tipAmount(amount, service) {
    if (service === "good") {
        var tip = .2;
    } else if (service === "fair") {
        var tip = .15;
    } else if (service === "bad") {
        var tip = .1;
    }
    return (tip * parseInt(amount));
}

function totalAmount(amount, service) {
    return tipAmount(amount, service) + parseInt(amount);
}

function splitAmount(amount, service, split) {
    return totalAmount(amount, service) / split;
}

console.log(splitAmount(100, 'good', 5))