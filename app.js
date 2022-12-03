function generatePin(){
  const randomNumbers = Math.round(Math.random()*100000);
  return randomNumbers;
}

function getPin(){
  const randomNumber = generatePin().toString();
  if(randomNumber.length === 5){
    return randomNumber;
  }
  else{
    return getPin();
  }
}
document.getElementById('pin-generate-btn').addEventListener('click', function(){
  const pin =  getPin();
  // console.log(pin);
  const displayPinInput = document.getElementById("display-pin");
  displayPinInput.value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event){
  const checkInput = document.getElementById('checkInput');
  const previousDigit = checkInput.value;
  const digit = event.target.innerText;
  if(isNaN(digit)){
    if(digit === 'C'){
      checkInput.value = '';
    }
    else if(digit === '<'){
      const arrayDigit = previousDigit.split('');
      arrayDigit.pop();
      const remainingDigit = arrayDigit.join('');
      checkInput.value = remainingDigit;
    }
  }
  else{
    const newDigit = previousDigit + digit;
    checkInput.value = newDigit;
  }
})
document.getElementById('submit-btn').addEventListener('click', function(){
  const displayPin = document.getElementById('display-pin');
  const displayPinValue = displayPin.value;
  const checkInput = document.getElementById('checkInput');
  const checkInputValue = checkInput.value;
  const successMsg = document.getElementById('match-success');
  const failedMsg = document.getElementById('match-failed');
  if(displayPinValue === checkInputValue){
    successMsg.style.display = 'block';
    failedMsg.style.display = 'none';
    displayPin.value = '';
    checkInput.value = '';
  }
  else{
    failedMsg.style.display = 'block';
    successMsg.style.display = 'none';
    displayPin.value = '';
    checkInput.value = '';
  }
})