//palindrome

let str="MOM";
let reverse='';

function palindrome(str){

    for(let i=str.length-1;i>=0;i--){

        reverse+=str[i];    
        
    }
    console.log(reverse);
    if(str===reverse){
        return ` The given ${reverse} is palindrome`;
    }
    else{

        return ` The given ${reverse} string is Not palindrome`;
    }


}




console.log(palindrome(str));