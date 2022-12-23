const dataValue = document.querySelectorAll("[data-value]");
const dataOperator = document.querySelectorAll("[data-operator]");
const firstNumber = document.querySelector(".first-number");
const operator = document.querySelector(".symbol");
const secondNumber = document.querySelector(".second-number");
const delBtn = document.querySelector(".delete ");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

let newOperand = "";
let oldOperand = "";
let operates;

const inputvalues = ()=>{
  secondNumber.textContent = newOperand;
  firstNumber.textContent = oldOperand;
  operator.textContent = operates;
}

const computeValues= (sign)=>{
      prevNumber = Number(oldOperand)
      nextNumber = Number(newOperand)

    let result;
    if(sign == "+") {
        result = prevNumber + nextNumber;
    } else if(sign == "-") {
        result = prevNumber - nextNumber;
    } else if(sign == "*") {
        result = prevNumber * nextNumber;
    } else if(sign == "/") {
        result = prevNumber / nextNumber;
    }
   return result;  
}

dataValue.forEach((number)=>{
  number.addEventListener("click", ()=>{
    if(number.dataset.value == "."){
      if  (newOperand == ""){
           newOperand = "0."
      }else if (!newOperand.includes(".")){
          newOperand += number.dataset.value;
      }
    }else{
        newOperand += number.dataset.value;
    }
    secondNumber.textContent = newOperand;
  });
});

dataOperator.forEach((operate)=>{
  operate.addEventListener("click", () =>{
    if  (newOperand !== "" && oldOperand == ""){
         oldOperand = newOperand;
         newOperand = ""
    }
    if  (newOperand !== "" && oldOperand !== ""){
         oldOperand = computeValues(operates);
         newOperand = "";
    }
    operates = operate.dataset.operator;
    inputvalues();
  });
});

delBtn.addEventListener("click", function(){
  newOperand = newOperand.slice(0, -1);
  secondNumber.textContent = newOperand;
});

clearBtn.addEventListener("click", () => {
  newOperand = "";
  oldOperand = "";
  operates = "";
  inputvalues();
});


equalBtn.addEventListener("click", () => {
  if (newOperand !== "" && oldOperand !== "")
  newOperand = computeValues(operates);
  oldOperand = "";
  operates = "";
  inputvalues();
});