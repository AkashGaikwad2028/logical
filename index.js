// let arr = [12, 35, 1, 10, 34, 1, 35,36]

// const Slargest=(arr)=>{
//     // console.log(arr)
//     let flarge=0;
//     let slarge=0;
    
//     for(let i=0;i<arr.length;i++){
//         // console.log(arr[i])
//         if(arr[i]>flarge){
//             slarge=flarge
//             flarge=arr[i]
//         }
//         else if(arr[i]>slarge &&arr[i]<flarge){
//             slarge=arr[i]
//         }
//     }
//     console.log(slarge)
// }

// const num= Slargest(arr)

// const num=123456789

// const ReverseInt=(num)=>{
// let result=0
// while(num>0){
//     let remainder =num%10
//     result=result*10+remainder
//     num=Math.floor(num/10)
//      console.log(result)
// }
// }

// ReverseInt(num)

// swap value

// let a=12;
// let b=10;
// console.log(a=b)




// const str="madam"

// const palindrome=(str)=>{
//     // console.log(str)
//     let len =str.length
//     for(let i=0;i<len/2+1;i++){
//         console.log(str[i-1])
//         if(str[i]==str[len-1-i]){
//             console.log("it is palindrome")
//         }
//         else {
//             console.log("its not palindrome")
//         }
//     }
// }

// palindrome(str)


// let name="stark"

// let ans=name.split("")
// let ans1= ans
// for(let i=ans1.length-1 ;i>=0;i--){
//   let newstring=""
//   newstring +=ans1[i]
//   console.log("newstring",newstring)
// }

// const array=[1,2,3,5,6,7]

// const missingarray=(num)=>{
// console.log(num)
// let temp=[]
// let i;
// for (i=0;i<num.length;i++ ){
//     temp[i]=0
// }
// for (i=0;i<num.length;i++ ){
//     temp[num[i]-1]=1
// }
// let ans =0
// for (i=0;i<num.length;i++ ){
//     if(temp[i]==0){
//         ans=i+1
//     }
// }
// }
// console.log("ansssss",ans)




// let array = [80, 60, 10, 50, 30, 100, 0, 50,70,30]

// const sumOfHun=(num)=>{
//     // console.log(num)
//     for (let i=0;i<num.length - 1;i++){
//         for (let j= i + 1;j<num.length;j++){
//             // console.log(num[j])
//             if(num[i]+num[j]==100){
//                 console.log([num[i],num[j]])
//             }
          
//         }
//     }
// }

// let r=sumOfHun(array)

// console.log(r)


// let array = [80, 60, 10, 50, 30, 100, 0, 50,70,30]

// const sumOfHun=(num)=>{
//     // console.log(num)
//     for (let i=0;i<num.length-1;i++){
//         for (let j=i+1;j<num.length;j++){
//             if(num[i]+num[j]==100){
//                 console.log([num[i],num[j]])
//             }
//         }
//     }
// }

// let r=sumOfHun(array)

// console.log(r)

// const FibbounciSeries=(n)=>{
//     const fibbo=[0,1]
//     for (let i=2;i<n;i++){
//         fibbo[i]=fibbo[i-1]+fibbo[i-2]
//         console.log(fibbo[i])
//     }
// }
// FibbounciSeries(20)


// const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

// function removeDuplicate(arr) {
//     const result = [];
//     let idx = 0;
//     const tmp = {};
// // console.log("temp",tmp)
//     for (let i = 0; i < arr.length; i++) {
        
//         if (!tmp[arr[i]]) {
         
//             tmp[arr[i]] = 1;
    
//                result.push(arr[i])
//             // result[idx] = arr[i];
//             // //   console.log("arr[i]",result[idx])
//             // idx++;
//         } 
//         // console.log(result)
//     }
//     return result;
// }

// console.log(removeDuplicate(input));



// //factorial on n //

// const Factorial=(n)=>{
//     let result =1 
//     for(let i = 2 ;i<=n ; i++){
//         result=result*i
//         //  console.log(result)
//     }
//     return result
    
//     }
    
//     let facrtor=Factorial(5)


// const isPrime=(n)=>{
//     if(n<2){
//         return false
//     }
//     for(let i = 2; i<=Math.sqrt(n) ; i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// const a=isPrime(5)

// console.log("true",a)



//.......................................PowerofTwo.......................................//

// const IsPowerOfTwo=(n)=>{
//     if(n<1){
//         return false
//     }
    
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//        (n=n/2)
//     }
//     return true
// }

// const a=IsPowerOfTwo(5)

// console.log(a)


//---------------------------Bitwise Operator------------------//


// const IsPowerOfTwo=(n)=>{
   
//     if(n<1){
//         return false
//     }
//    return ((n & (n-1))===0)
 
//  }
 
//  const a=IsPowerOfTwo(2)
 
 // console.log(a)




//  const ReverseInt=(n)=>{
//     let result = 0 
//   while(n>0){
//       let remainder =n%10
//       result=result*10+remainder
//       n=Math.floor(n/10)
//   }  
//   return result
//   }
//   let a= ReverseInt(123456789)
//   console.log(a)


// let n=[2,1,5,8,10,12,16,21,24,32,33]

// const Isprime=(array)=>{
//     // console.log(array)
//     for(let i = 0 ;i<array.length ; i++){
//    if (array[i]<2){
//       console.log(array[i]+" -: it is not prime number")
//    }
//    else if(array[i]%2==0){
//        console.log(array[i]+" -: it is not prime number")
//    }
//    else{
//          console.log(array[i]+" -: it is prime number")
//    }
//     }
// }
// let a= Isprime(n)

// console.log(n)

// let array=[1,2,4,6,7,9,10]

// const IsEvenOrOdd =(arr)=>{
//    for(let i = 0 ; i<arr.length ; i++){
//        if(i%2==0 && arr[i]%2==0){
//           console.log("even",i,"=",arr[i])
//        }
//        else if(i%2!==0 && arr[i]%2!==0){
//            console.log("odd",i,"=",arr[i])
//        }
//    }
// }

// let a=IsEvenOrOdd(array)


 //..............................................Linear search......................................//

// let array =[1,2,4,6,10]
// let n =10

// const LinearSearch=(array,n)=>{
//     console.log(array,n)
//   for(let i = 0 ; i<array.length;i++){
//     if(array[i]==){
//         return i
//     }
//   }
//   return -1
// }

// let search =LinearSearch(array,n)

// console.log("search",search)


// .............................................................................anagram 

//flow

// The code defines a function called Anagram that takes two string parameters str1 and str2. It then initializes an empty object called objstr and checks if the length of str1 is equal to the length of str2. If the lengths are not equal, it returns false.

// Then, it loops through each character in str1 and sets the character as a key in the objstr object. If the character already exists in the objstr object, it increments the value by 1. If it doesn't exist, it sets the value to 1. The console.log statements are used for debugging and can be ignored.

// The second loop then loops through each character in str2. If the character does not exist as a key in the objstr object, it immediately returns false. If the character does exist, it decrements the value by 1.

// Finally, if both loops have completed without returning false, the function returns true which indicates that the two input strings are anagrams of each other.

// The last line of the code Anagram("hello","ehllo") calls the Anagram function and passes in the two strings "hello" and "ehllo" as arguments. The output of this function call will be true, indicating that these two strings are anagrams of each other.

// const Anagram=(str1,str2)=>{
//    console.log(str1,str2)
    
//     let objstr={}
//     if(str1.length !== str2.length){
//         return false
//     }
//   for (let i of str1){
//     console.log(i)
//  objstr[i]=(objstr[i]||0)+1
//      console.log( objstr[i])
//     }
//  console.log(objstr)
//   for (let i of str2){
//     console.log(i)
//   if(!objstr[i]){
//     return false
//  }
//   objstr[i]--
//      }
//     return true
// }

// (Anagram("hello","ehllo")) 

//...................................................ReverseInteger.....................................................................//

// The code defines a function called ReverseInteger that takes a single parameter num, which is expected to be an integer. The function initializes a variable called result to 0.

// It then enters a while loop that runs as long as num is greater than 0. In each iteration of the loop, the function finds the remainder of num divided by 10 and assigns it to a variable called remainder. It then updates result by multiplying it by 10 and adding remainder.

// The function then updates num by dividing it by 10 and taking the floor of the result using Math.floor(). This removes the last digit from num.

// Finally, the function logs the updated result to the console on each iteration of the while loop.

// The last three lines of the code declare a variable called num and assign it the value 2345678. It then calls the ReverseInteger function, passing in num as an argument. However, the function doesn't return anything, so the value of a will be undefined.

/// reverse integer
// let num =2345678
// const ReverseInteger=(num)=>{
//     let result = 0
//     while(num>0){
//       let remainder= num%10
//       result=result*10+remainder
//       num= Math.floor((num/10))
//         console.log(result)
//     }
// }
// let a = ReverseInteger(num)


//...............................................................second min

//let array =[12,35,1,10,34,1,35]

// const SortArray=(arr)=>{
//     // console.log(arr)
//     let max=0
//     let min=0
//     for(let i = 0 ;i<arr.length;i++){
//         if(arr[i]>max){
//              min=max
//             //  console.log(min)
//              max=arr[i]
//             //   console.log('max',max)
//         }
//         console.log(arr[i])
//         else if(arr[i]>min && arr[i]<max){
//             console.log(arr[i])
//             min=arr[i]
//             // console.log(min)
//         }
//         }
//         // console.log(max)
//     }


// let a= SortArray(array)


//........................................................Palindrome...............................................//

// The code defines a function called palindrome that takes a single string parameter str. The function initializes a variable called len to the length of the input string.

// It then enters a for loop that runs len/2 + 1 times. In each iteration of the loop, it compares the character at index i with the character at index len-1-i. If the characters are the same, it logs the message "it is palindrome" to the console. Otherwise, it logs the message "its not palindrome" to the console.

// However, there is a bug in this function. The line console.log(str[i-1]) is incorrect, since it is trying to log a character at an index of -1 in the first iteration of the loop. It should be changed to console.log(str[i]) to log the correct character at each iteration.

// The last two lines of the code declare a variable called str and assign it the value "madam". It then calls the palindrome function, passing in str as an argument. This will log either "it is palindrome" or "its not palindrome" to the console for each iteration of the loop.


// const str="madam"

// const palindrome=(str)=>{
//     // console.log(str)
//     let len =str.length
//     for(let i=0;i<len/2+1;i++){
//         console.log(str[i-1])
//         if(str[i]==str[len-1-i]){
//             console.log("it is palindrome")
//         }
//         else {
//             console.log("its not palindrome")
//         }
//     }
// }

// palindrome(str)

//..........................................................reveresSTring.............................................................//

// let name = "stark";
// let ans = name.split("");
// let ans1 = ans;
// let newstring = "";

// for (let i = ans1.length - 1; i >= 0; i--) {
//   newstring += ans1[i];
//   console.log("newstring", newstring);
// }


// The code defines a variable called name and assigns it the value "stark". It then calls the split method on name, which splits the string into an array of characters and assigns it to a variable called ans. It also assigns the value of ans to a new variable called ans1.

// The code then enters a for loop that iterates over the characters in ans1 in reverse order. For each character, it initializes a new string variable called newstring and appends the current character to it. It then logs the value of newstring to the console.

// However, there is a bug in this loop. The line let newstring="" initializes the newstring variable to an empty string on each iteration of the loop. This means that it will only ever contain the last character in ans1. To fix this, the initialization of newstring should be moved outside of the loop so that it accumulates characters across iterations.



//....................................................iSPrime..............................................//


// Define the IsPrime function which takes a positive integer num as input and returns true if num is prime and false otherwise.
// Check if num is less than 2. If it is, return false, as 1 and numbers less than 1 are not prime.
// Loop from 2 to num-1. For each number i in the loop:
// Check if num is divisible by i with zero remainder. If it is, num is not prime, so return false.
// If the loop completes without returning false, num is prime, so return true.
// In the main part of the code, loop from 2 to 10. For each number i in the loop:
// Call the IsPrime function on i.
// If the function returns true, log that i is a prime number.
// If the function returns false, log that i is not a prime number.

// Define the IsPrime function
// const IsPrime = (num) => {
    // Check if num is less than 2
    // if (num < 2) {
    //   return false; // 1 and numbers less than 1 are not prime
    // }
    // Loop from 2 to num-1
//     for (let i = 2; i < num; i++) {
//       // Check if num is divisible by i with zero remainder
//       if (num % i === 0) {
//         return false; // num is not prime
//       }
//     }
//     return true; // num is prime
//   };
  
  // Loop from 2 to 10
//   for (let i = 2; i <= 10; i++) {
//     // Call IsPrime on i
//     if (IsPrime(i)) {
//       console.log(i, "is a prime number");
//     } else {
//       console.log(i, "is not a prime number");
//     }
//   }

//........................................ && operators.....................................//
true && true        // true
true && false       // false
false && true       // false
false && false      // false

0 && "hello"        // 0
"hello" && 42       // 42
"" && 42            // ""
42 && "world"       // "world"

null && "hello"     // null
undefined && 42     // undefined

//............................................................. || operators........................................//

// In JavaScript, the || (logical OR) operator is a binary operator that is used to combine two boolean expressions. It returns true if at least one of the expressions evaluates to true, and false otherwise.

// Here's how it works:

// If the left operand is truthy (i.e., not one of false, 0, null, undefined, an empty string, or NaN), then the expression short-circuits and returns the value of the left operand without evaluating the right operand, because the overall result is already determined to be true.

// Otherwise, the right operand is evaluated, and the result is the value of the right operand.

true || true        // true
true || false       // true
false || true       // true
false || false      // false

0 || "hello"        // "hello"
"" || 42            // 42
null || "world"     // "world"
undefined || 42     // 42
NaN || "hello"      // "hello"


// Note that the || operator has a lower precedence than the && (logical AND) operator,
//  which means that it is evaluated second. If you want to change the order of evaluation, you can use parentheses to group the expressions
  
  
  
// let arr1=[1,8,4,5,6,7,2]
// const BubbelSort=(arr)=>{
//     for (let i = 0 ;i<arr.length ;i++){
//         console.log(arr.length-1-i)
//         for(let j = 0 ;j<(arr.length-i-1);j++){
//            	if(arr[j] > arr[j+1]){
// 	var temp = arr[j]
// 	arr[j] = arr[j + 1]
// 	arr[j+1] = temp
// 	}
//         }
//     }
//     console.log(arr)
// }

// BubbelSort(arr1)


