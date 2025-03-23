// 1.
// let arr=[1,2,3,4,5,6,2,3];
// let num=prompt("Enter the number to delete: ");
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// for(a of arr){
//     console.log(a);
// }
// -------------------------------------------------
// 2.
// let num=prompt("Enter the number:");
// let sum=0
// while(num>0){
//     sum=sum+(num%10);
//     num=Math.floor(num/10)
    
// }
// console.log(sum);
//3.
//3.
// let number=prompt("Enter the number to find factorial:")
// let fact=1;
// for(let i=1;i<=number;i++){
//     fact*=i;
// }
// console.log(fact);
//4.
// let num=prompt("Enter the number to check prime or not: ");
// let flag=0;
// if(num==1){
//     console.log("Not Prime");
// }
// else{
//    for(let i=2;i<Math.sqrt(num);i++){
//         if(num%i==0){
//             flag=1;
//             break;
//         }
//     }
//     if(flag==1){
//         console.log("Not Prime");
//     }
//     else{
//         console.log("Prime");
//     }
// }-------------------------------------------------
//5.
// let num=prompt("Enter the number to check palindrome: ");
// let temp=num;
// let rev=0;
// while(num>0){
//     rev=rev*10+(num%10);
//     num=Math.floor(num/10);
// }
// if(temp==rev){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }
//6.
// let num=prompt("Enter the number to check armstrong: ");
// let temp=num;
// let sum=0;
// while(num>0){
//     sum=sum+Math.pow((num%10),3);
//     num=Math.floor(num/10);
// }
// if(temp==sum){
//     console.log("Armstrong");
// }
// else{
//     console.log("Not Armstrong");
// }
//7.
// let num=prompt("Enter the number to check strong: ");
// let temp=num;
// let sum=0;
// while(num>0){
//     let fact=1;
//     let rem=num%10;
//     for(let i=1;i<=rem;i++){
//         fact*=i;
//     }
//     sum+=fact;
//     num=Math.floor(num/10);
// }
// if(temp==sum){
//     console.log("Strong");
// }
// else{
//     console.log("Not Strong");
// }
//8.
// let num=prompt("Enter the number to check perfect: ");
// let sum=0;
// for(let i=1;i<num;i++){
//     if(num%i==0){
//         sum+=i;
//     }
// }
// if(sum==num){
//     console.log("Perfect");
// }
// else{
//     console.log("Not Perfect");
// }
//9.
// let num=prompt("Enter the number to check automorphic: ");
// let square=num*num;
// let temp=num;
// let flag=0;
// while(num>0){
//     if(num%10!=square%10){
//         flag=1;
//         break;
//     }
//     num=Math.floor(num/10);
//     square=Math.floor(square/10);
// }
// if(flag==0){
//     console.log("Automorphic");
// }
// else{
//     console.log("Not Automorphic");
// }
//10.
// let num=prompt("Enter the number to check neon: ");
// let square=num*num;
// let sum=0;
// while(square>0){
//     sum+=square%10;
//     square=Math.floor(square/10);
// }
// if(sum==num){
//     console.log("Neon");
// }


