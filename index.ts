//.....QUESTION 1
// - Develop a program that calculates and prints the sum of the first 40 Even numbers.

let sum:number=0;
let sumOfEvens:number[]=[];
for(let i:number=2;i<=40;i+=2){

sum+=i;
sumOfEvens.push(i)


}
console.log(`total sum ${sum}`)
console.log(`value of all evens ${sumOfEvens}`)

//.....QUESTION 2

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let arrayNum:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24.25,26,27,28,29,29,30]
let newArray:number[]=[];
for(let i=0;i<arrayNum.length;i++){
if(i  %2==0){

    newArray.push(i);

}

}
console.log(`only evens numbers are=${newArray}`)

//......QUESTION 3
//- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

let array1:number[]=[1,2,3,4,5,6,7,8,9,22,23,24,25,26,27,33,34,35,36,37,48,49,50,51,97,98,99,93]
let newArray2:number[]=[];
for( let i2=0;i2<array1.length;i2++){
if(array1[i2] %2!=0){
newArray2.push(array1[i2]);

}

}
console.log(`only odd numbersare=${newArray2}`)
//
//.....QUESTION 4

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

function areaOfCircle(radius:number):number{
    const pi:number=3.14;
    let area:number=pi *radius*radius;
    return area


}
let radius=10;
console.log(areaOfCircle(radius));


//.....QUESTION 5

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.


let listOfGrades:number[]=[68,62,36,58,89,49,72,28,41,98,100,16];
for(let i=0;i<listOfGrades.length;i++){
    if(listOfGrades[i]<50){
        listOfGrades.splice(i,1);
    }


}
console.log(`removing a numbers below 50 are =${listOfGrades}`);

//.....QUESTION 6

//- Write a program that uses a function to find the largest element in an array of numbers.

let laregestNumber:number=1;

let arrayOfNumber:number[]=[10,20,30,40,445,339,785,995,980,999,11,55,66];

function largestNumberFinder(arr:number[]){
for(let i3=0;i3<arr.length;i3++){

if(arr[i3]>laregestNumber){
    laregestNumber=arr[i3];

}

}
return laregestNumber;
}
console.log("largest number in given array is",largestNumberFinder(arrayOfNumber))