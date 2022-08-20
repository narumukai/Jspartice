//Print Prime number from 1 to 100
function foo(){
    let lower_range=2;

let upper_range=101;

let result;

for(let i=lower_range;i<upper_range;i++){

    if(i>1){

        for(let j=2;j<=i;j++){
            if(i%j==0){
                //result=`${i} is Not Prime`  ; 
                break;             
            }
            else{
                result=i;
            }



        } 
        console.log(`${result} is Prime`) ;


    }

    
}


}

foo();


