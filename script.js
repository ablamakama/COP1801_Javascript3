// Task 1: For loop counting from 0 to 10 and checking odd/even
for (let i = 0; i <= 10; i++) {
    let result = (i % 2 === 0) ? "even" : "odd";
    document.write(`Count ${i} is ${result} <br>`);
}

document.write("<br>"); // Line break for clarity

// Task 2: Do-While loop using user input
let myNum;
do {
    myNum = parseInt(prompt("Enter a number between 5 and 20:"), 10);
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

document.write(`Counting up to ${myNum}:<br>`);
let counter = 1;
do {
    document.write(`Count: ${counter} <br>`);
    counter++;
} while (counter <= myNum);

document.write("<br>"); // Line break for clarity

// Task 3: Storing subjects in an array
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

document.write("Subjects List:<br>");
subjects.forEach(subject => document.write(`${subject}<br>`));

document.write("<br>"); // Line break for clarity

// Task 4: Display subjects separated by commas
document.write("Subjects: " + subjects.join(", ") + "<br>");
