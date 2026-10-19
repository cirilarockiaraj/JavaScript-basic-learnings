// ----------- Start Arithmetic Calculator ----------//
//Repo: Javascript-basic-learnings
console.log("*************** Arithmetic calculater ***************");
let num1 = 20;
let num2 = 5;
let operator = "/";

if(operator === "+") console.log(num1+num2);
else if(operator === "-") console.log(num1-num2);
else if(operator === "*") console.log(num1*num2);
else if(operator === "/") console.log(num2===0 ? "Cannot divide by zero" : num1/num2);
else console.log("Invalid operator");

//-------------- End Arithmetic Calculator ----------//

//-------------- Start Student Mark List ------------//
console.log("*************** Student Mark List ***************");
// Create a variable `marks` to store student marks (0–100).
let mark = 60;
let result = {};

// Add bonus marks using an assignment operator (+=).
let bonusMarks = 1;
mark += bonusMarks;
    
//Mark Validation
if(mark < 0 || mark > 100) {
    console.error("Mark should be between 0 to 100");
    return;
}

// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F
if(mark>=90 && mark<=100) result.grade="A";
else if(mark>=70 && mark<=89) result.grade="B";
else if(mark>=50 && mark<=69) result.grade="C";
else result.grade="F";

// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")
result.result = (mark >= 50 ? "Pass" : "Fail")

// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"
switch(result.grade){
    case "A": result.remarks = "Excellent!"; break;
    case "B": result.remarks = "Good"; break;
    case "C": result.remarks = "Average"; break;
    case "F": result.remarks = "Needs Improvement"; break;
    default: result.remarks = "Invalid Grade point"; break;
}

// Print the results in the console:
// Marks, Grade, Result, Remark
console.log("-----------------------------------------")
console.log("|Marks\t| Grade\t| Result\t| Remark\t|");
console.log("-----------------------------------------")
console.log(`|${mark}\t\t| ${result.grade}\t\t| ${result.result}\t\t| ${result.remarks}\t|`);
console.log("-----------------------------------------")

//-------------- End Student Mark List ------------//