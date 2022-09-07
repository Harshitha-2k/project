const boxs = document.querySelectorAll('.box');
const result = document.querySelector("#inside");
const btn = document.querySelector("#btn");
const reset = document.querySelector(".reset")
const X = "X";
const O = "O";
let count = 0;
let currentvalue = true;

btn.addEventListener("click",startagain);
 
boxs.forEach(box =>{
    box.addEventListener("click",clickhere)
})
function clickhere(){
  this.innerText = currentvalue?"X":"O";
  currentvalue = !currentvalue;
  count++;

  let value1 = boxs[0].innerText;
  let value2 = boxs[1].innerText;
  let value3 = boxs[2].innerText;
  let value4 = boxs[3].innerText;
  let value5 = boxs[4].innerText;
  let value6 = boxs[5].innerText;
  let value7 = boxs[6].innerText;
  let value8 = boxs[7].innerText;
  let value9 = boxs[8].innerText;

  if(
      (value1!="" && value1 == value2 && value2 == value3) ||
      (value4!="" && value4 == value5 && value5 == value6) ||
      (value7!="" && value7 == value8 && value8 == value9) ||
      (value1!="" && value1 == value4 && value4 == value7) ||
      (value2!="" && value2 == value5 && value5 == value8) ||
      (value3!="" && value3 == value6 && value6 == value9) ||
      (value1!="" && value1 == value5 && value5 == value9) ||
      (value3!="" && value3 == value5 && value5 == value7)
    ){
      btn.style.display = "flex";
      result.style.display = "flex"; 
      result.innerText = !currentvalue ? "PLAYER X WON":"PLAYER O WON";
    }
     if(count == 9){ 
      btn.style.display = "flex";
      result.style.display = "flex"; 
      result.innerText =  "IT'S A DRAW MATCH" ;
    }
}
function startagain(){
  boxs.forEach(box=>{
  box.innerText = "";
  count = 0;
  })
  clickhere();
  result.style.display = "none";
}