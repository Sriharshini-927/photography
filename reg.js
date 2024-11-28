const scriptURL = 'https://script.google.com/macros/s/AKfycbzU7nokQ95gBjTQ-bdrp6z3x_gY82bw7Dj8zKQPMMXHu4M5VcHfT8S1iL6_ImiyOU_f/exec'
    const form = document.forms['reg']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })