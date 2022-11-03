let number1;
let number2;
let resultado;
let op;

number1=null;
number2=null;
op=null;
resultado=99999;

let numberButtons=document.querySelectorAll(".number");
let operationButtons=document.querySelectorAll(".operator");
let equal=document.querySelectorAll(".double-width");
let screen=document.getElementById("screen");
//console.log(numberButtons);

/*for(let i=0; i<numberButtons.length;i++){
    console.log(numberButtons[i]);
}
for (const i of numberButtons){
    console.log(i)
}*/
numberButtons.forEach((number)=>{
    number.addEventListener("click",()=>{
        //number1=number.innerText
        if(number1){
            number1=number1+number.innerText;
        }else{
            number1=number.innerText;
        }
        screen.innerText=number1;
    })
    
})
operationButtons.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        //number1=number.innerText
        number2=number1;
        number1=null;
        op=operator.id;
    })
    
})
equal.forEach((re)=>{
    re.addEventListener("click",()=>{
        
        switch(op){
            case "add":
                resultado=parseInt(number1) + parseInt(number2);
                screen.innerText=resultado;
            break
            case "sub":
                resultado=parseInt(number2) - parseInt(number1);
                screen.innerText=resultado;
            break
            case "mul":
                resultado=parseInt(number1) * parseInt(number2);
                screen.innerText=resultado;
            break
            case "div":
                resultado=parseInt(number2) / parseInt(number1);
                screen.innerText=resultado;
            break
        }
    })
    
})
