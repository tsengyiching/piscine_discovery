function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

function startWithZero(str) {
  if (str[0] === "0" && str.length > 1) {
    return true;
  }
  return false;
}

function check(fNum, sNum, operator) {
  if (startWithZero(fNum) || startWithZero(sNum)) {
    alert("Error :(");
    return false;
  }

  if (fNum.length > 16 || sNum.length > 16) {
    alert("Error :(");
    console.log("The entered integer is bigger than MAX_SAFE_INTEGER");
    return false;
  }

  if (sNum === "0" && (operator === "/" || operator === "%")) {
    alert(`It’s over 9000!`);
    console.log(`It’s over 9000!`);
    return false;
  }

  return true;
}

function calc(fNum, sNum, operator) {
  let result;
  fNum = Number(fNum);
  sNum = Number(sNum);

  switch (operator) {
    case "+":
      result = fNum + sNum;
      break;
    case "-":
      result = fNum - sNum;
      break;
    case "*":
      result = fNum * sNum;
      break;
    case "/":
      result = fNum / sNum;
      break;
    case "%":
      result = fNum % sNum;
      break;
  }

  if (result > Number.MAX_VALUE || result < Number.MIN_VALUE) {
    alert("Overflow!");
  } else {
    alert(`Result: ${result}`);
    console.log("Result: ", result);
  }
}

function handleClick() {
  let fNum = document.getElementById("fNum").value;
  let sNum = document.getElementById("sNum").value;
  const operator = document.getElementById("operators").value;

  if (!onlyNumbers(fNum) || !onlyNumbers(sNum)) {
    alert("Error :(");
  } else {
    if (check(fNum, sNum, operator)) {
      calc(fNum, sNum, operator);
    }
  }
}
