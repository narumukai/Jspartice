//next number is sum by two previous numbers


const user=parseInt(prompt("Enter the range: "));

let firstnumber=0,secondnumber=1,t ;

console.log(firstnumber);
console.log(secondnumber);


for(i=3;i<=user;i++){
    
    
    t=firstnumber+secondnumber;
    firstnumber=secondnumber;
    secondnumber=t;

    console.log(t);
    

}

    


// 1<4  0
// 2<4   1
 //3<4   1
// 4<4   2


