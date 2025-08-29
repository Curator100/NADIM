const scriptURL = 'https://script.google.com/macros/s/AKfycbw4mV9g1xLvNyn2QP0wBi-QhuffGEklMBRwpnOOGJgmfMcEveNim-y9dL4tH80t0Mj8aA/exec;
'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
