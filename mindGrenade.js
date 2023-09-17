const num1 = 5;
const num2 =10;


const addValues=()=>{
    console.log(`the sum is: ${num1+num2} `)
}

//no exports but  since this function is called inside this module
//itll execute once we call it
//if we want it to be executed it has to be called
//mainly for more complex situations
addValues()