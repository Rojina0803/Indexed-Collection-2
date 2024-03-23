//Indexed Collection

const myArray = ["a", "b", "c", "d", "e"];
console.log(myArray.at(-2));

const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b"));
console.log(a.indexOf("b", 2));
console.log(a.indexOf("z"));

const array1=["abc","def","ghi"];
console.log(array1.indexOf("a"));
console.log(array1.indexOf("abc"));
console.log(array1[1]);

const array2=[1,2,3,4,5,6,2,3,4,1];
console.log(array2.lastIndexOf(1));

const array3=["as","as","as","as"];
array3.forEach((element) => {
    console.log(element);
  });


const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2);

let arr=[22,33,4,4,5,6]
arr.map((value, index,array)=>{
        console.log(value, index,array);
});
console.log(arr);

const array4=[1,2,3,4,5,6];
const a5= array4.map((item)=>item*3)
console.log(a5);

const array5=[5,6,7,8];
const a6= array5.map((x)=> [1,2,3,4,5]);
console.log(a6);

const a17 = ["a", "b", "c"];
const a22 = a17.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a22);

const array6=[1,"a",2,4,"ghi","you",5,6,8,6.7]
let x= array6.filter((item) => typeof item === "number");
console.log(x);

let arr1=[45,23,32,0,3,5]
let o=arr1.filter((value)=>{
    return value<10;
})
console.log(o);

let y= array6.find((item) => typeof item === "string"); // returns the first item
console.log(y);

let z= array6.findLast((item) => typeof item === "string");//returns the last item
console.log(z);

let index= array6.findIndex((item) => typeof item === "number"); //returns the index of the first item
console.log(index);

let lindex= array6.findLastIndex((item) => typeof item === "string"); //returns the index of the last item
console.log(lindex);


function limit(value) {
    return typeof value === "number";
  }

let elem= array6.every(limit); //returns true if callback returns true for every item in the array.
console.log(elem);

let element= array6.some(limit);
console.log(element); // returns true if callback returns true for at least one item in the array.

let array7=["Old","Gold"];
let v=[" is "];
array7=array7.join(v)
console.log(array7); 

//Reduce Method --> Reduces an array in a single value
 
let arr2=[1,2,4,5,6,7,8,9]
let newarr2=arr2.reduce((h1,h2)=>{
    return h1+ h2;
})
console.log(newarr2);

let arr3=[34,56,78,89,0]
const reduce_func=(a,b)=>{
    return a*b;
}
console.log(arr3.reduce(reduce_func));


 // Grouping the elements of an array
const inventory = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
  ];
console.log(inventory);


const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result); //Doesn't work in many browser....


