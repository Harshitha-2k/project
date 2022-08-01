let calculator = document.querySelectorAll("#calculator");
let display = document.querySelector("#display");
display.value =""
let button = document.querySelector('.btn');
let btnvalue="";

calculator.forEach((button=>{
  button.addEventListener("click",(e)=>{
  let displayText= e.target.innerText;
  if(displayText == "C"){
    display.value = "0";
    btnvalue="";
  }else if(displayText == "="){
    display.value = eval(btnvalue);
     
}else if(displayText== "D"){
  display.value = display.value.slice(0,-1);
}
else{
     console.log(e.target)
     btnvalue += displayText;
     display.value = btnvalue;
  }
  })
}));