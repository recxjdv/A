function xssPayload() {
  const alertMsg = 'xss ' + document.location;
  console.log(alertMsg);
  window.prompt(alertMsg);
}

console.log('XSS payload executed');
xssPayload();
