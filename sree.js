<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz34M9AyK5MlD8oDNtVCli7309Evni7oxuI2gqBqWHXpKc4lJvQgtR7LAo7UbfvCHVY/exec'
    const form = document.forms['reg']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })
  </script>