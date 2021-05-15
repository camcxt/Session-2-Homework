

// bài 1 Write a program to print out
// a, 7 numbers, starting from 0 (no user input)
console.log(" Bài 1 a--------");
for (let i = 0; i < 7; i++) {
    console.log(i);    
}

// b, n numbers, starting from 0, n entered by user
console.log("b---------------");

let n = Number(prompt("nhập n: "));
for (let i = 0; i < n;i++) {
    console.log(i);
}

// c, A sequence of numbers, starting from 3, ending before n, n entered by user
console.log("c---------------");

for (let i = 3; i < n;i++) {
    console.log(i);
}

//d, A sequence of numbers, starting from c, ending before n, c and n entered by user
console.log("d---------------");

let c = Number(prompt("nhập c: "));
for (c; c < n;c++) {
    console.log(c);
}

//e, A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
console.log("e---------------");

let ce = Number(prompt("nhập c câu e: "));
for (ce; ce < n; ce += 3) {
    console.log(ce);
}

//f, A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
console.log("f---------------");

let cf = Number(prompt("nhập c câu f: "));
let s = Number(prompt("nhập s câu f: "));
for (cf; cf < n; cf += s) {
    console.log(cf);
}

// bài 2. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
console.log("Bài 2----------");

let factorial = 1;
let n2 = Number(prompt("nhập n bài 2: "));
for (let i = 1; i <= n2; i++ ){
  factorial = factorial * i;
}
alert("n! = "+factorial);

//bài 3. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
console.log("Bài 3----------");

let age = Number(prompt("Nhập số tuổi của bạn: "));
if(age < 14){
    alert("14+ Bạn không đủ tuổi để xem nội dung này ");
}else{
    alert("14+ Bạn có thể xem nội dung này xin mời ");
}

//bài 4. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
console.log("Bài 4----------");

let numbers = Number(prompt("Nhập x trong đoạn 0 - 9: "));
if(numbers <= 4 ){
    alert("x nằm nửa dưới của đoạn 0 - 9");
}else{
    alert("x nằm nửa trên của đoạn 0 - 9");
}

//Bài 5 Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
console.log("Bài 5----------");

let x = Number (prompt("Nhập x: "));
let n5 = Number(prompt("Nhập n: "));
if(x < n5 ){
    alert(`${x} nằm ở nửa dưới của ${n5}`);
}else if(x > n5){
    alert(`${x} nằm ở nửa trên của ${n5}`);
}else{
    alert("x = n = "+x);
}

//bài 6 Write a script to check if a number is even (divisible by 2) or odd number
console.log("Bài 6----------");

let so = Number(prompt("Nhập một số bất kỳ: "));
if(so % 2 == 0){
    alert(`${so} là số chẵn. `);
}else{
    alert(`${so} là số lẻ. `);
}

//Bài 7 Write a program to print out
// a, 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
console.log("Bài 7---------");

let n7 = Number(prompt("nhập n: "));
if(n7 % 2 == 0){
    var L = n7/2;
    var H = n7/2;
}else{
    var L = Math.ceil(n7/2);
    var H = n7 - L;
}
console.log(`${L} L`);
console.log(`${H} H`);

//
console.log("Bài 7c---------"); 

for(let i = 1 ; i <= 8/2; i++){
    console.log("0");
    console.log("1");
}

// n 1’s and 0’s in total, consecutively, n entered by user
console.log("Bài 7d--------");

let n7d = Number(prompt("nhập n: "));
if(n7d % 2 == 0){
    for(let i = 1 ; i <= n7d/2; i++){
        console.log("0");
        console.log("1");
    }
}else{
    for(let i = 1 ; i < (n7d/2); i++){
        console.log("0");
        console.log("1");
    }
    console.log("0");
}


// Bài 8 BIM
console.log("Bài 8----------");

let mass = Number(prompt("Nhập cân nặng: "));
let height = Number(prompt("Nhập chiều cao(cm): "));
let BMI = (mass / ((height/100)**2)).toFixed(1);
if(BMI < 16){
    alert(`BMI = ${BMI} bạn thiếu cân nặng `);
}else if (BMI < 18.5) {
    alert(`BMI = ${BMI} bạn thiếu cân `);
} else if(BMI < 25){
    alert(`BMI = ${BMI} bạn bình thường `);
}else if(BMI < 30 ){
    alert(`BMI = ${BMI} bạn thừa cân `);
}else{
    alert(`BMI = ${BMI} bạn béo phì `);
}



