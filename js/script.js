const myarr = [2,'malmal',false,"goodbye",23];
const arr_1 = myarr;
arr_1.pop();

console.log("orginel arr before changing the arr_1: ", myarr);
console.log("arr_1 which refrenced , pop last item :", arr_1);

console.log("-------------------------------------------");

let num = 23;
let num1 = num;
num1 = num1 + 7;

console.log("orginel num: ",num);
console.log("num which refrenced , added 7 :", num1);