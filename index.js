// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
// 2.	Write the same function as above as an arrow function with a different name.
// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.



// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’

let firstName = "Omose"
let lastName = "Edobor"

let userName = `${firstName} ${lastName}`

console.log (userName);

// 2.	Write the same function as above as an arrow function with a different name.

let createFullName = (firstName,lastName) => `${firstName} ${lastName}`;
    console.log (createFullName ('Joe','Biden'));

// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.


setTimeout(() => { alert('Time is up!!'); }, 2000);


// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.


setInterval(function(askAreWeThereYet){ alert("Are we there yet?"); }, 3000);


    













