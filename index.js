const buttons=document.querySelectorAll("button");
let calculation=document.querySelector(".calculation");
let result=document.querySelector(".result");

const buttonDummy=document.querySelectorAll("common");

buttons.forEach((cur_val,index)=>{
    cur_val.addEventListener("click",(e)=>{
        if(e.target.classList.contains("AC")){
            result.value=" ";
            calculation.value=" ";
            // console.log("ac");
        }
        else if(e.target.classList.contains("cross")){
            calculation.value+="*";
            // console.log(calculation.value);
        }
        else if(e.target.innerHtml=="="){
            result.value=eval(calculation.value);
        }
        else if(e.target.classList.contains("clear")){
            let dummy=calculation.value.slice(0,calculation.value.length-1);
            calculation.value=String(dummy);
            try{
                result.value=eval(calculation.value);
            }
            catch{
                result.value=eval(calculation.value.slice(0,calculation.value.length-1));
            }
        }
        else if(e.target.classList.contains("divide")){
            calculation.value+="/";
        }


        else{
            calculation.value+=e.target.textContent;
            result.value=eval(calculation.value);
            
        }
    })
})


