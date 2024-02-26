function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  function generateCaptcha() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = ['+', '-', '*'][getRandomNumber(0, 2)];
    const expression = `${num1} ${operator} ${num2}`;
    const result = eval(expression);
    return { expression, result };
  }
  
  
  function displayCaptcha() {
    const captcha = generateCaptcha();
    document.getElementById('captcha').textContent = captcha.expression;
    sessionStorage.setItem('captchaResult', captcha.result);
  }
  
  
  function validateCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const captchaResult = sessionStorage.getItem('captchaResult');
    
    if (userInput === captchaResult) {
      alert('Captcha válido!');
     
    } else {
      alert('Captcha inválido. Por favor, inténtalo de nuevo.');
      displayCaptcha(); 
    }
  }
  
  
  window.onload = displayCaptcha;
