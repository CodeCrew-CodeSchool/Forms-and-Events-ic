// I want to print the values of my form to the document
    // 1. I will need a reference to my form;

        const form = document.getElementById('myForm');
        const password = document.getElementById('password');
        const email = document.getElementById('email')

    // 2. I will need to listen to the events on the form
        form.addEventListener('submit',(e)=>{
          e.preventDefault()
          form.reset()
           
        })