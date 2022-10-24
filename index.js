const buttons = document.querySelectorAll(".common");
let calculation = document.querySelector(".calculation");
let result = document.querySelector(".result");

buttons.forEach((cur_val, index) => {
  cur_val.addEventListener("click", (e) => {
    if (e.target.classList.contains("AC")) {
      result.value = " ";
      calculation.value = " ";
    } else if (e.target.classList.contains("cross")) {
      calculation.value += "*";
    } else if (e.target.classList.contains("clear")) {
      let dummy = calculation.value.slice(0, calculation.value.length - 1);
      calculation.value = String(dummy);
      try {
        let temp = eval(calculation.value);
        if (temp == undefined) {
          result.value = "";
        } else {
          if (isNaN(temp)) {
            result.value = "cannot divide by zero(undefined)";
          } else {
            result.value = temp;
          }
        }
      } catch {
        let final = eval(
          calculation.value.slice(0, calculation.value.length - 1)
        );
        if (isNaN(final)) {
          result.value = "cannot divide by zero(undefined)";
        } else {
          result.value = final;
        }
      }
    } else if (e.target.classList.contains("divide")) {
      calculation.value += "/";
    } else {
      calculation.value += e.target.textContent;
      let temp1 = eval(calculation.value);
      if (isNaN(temp1)) {
        result.value = "cannot divide by zero";
      } else {
        result.value = temp1;
      }
    }
  });
});
