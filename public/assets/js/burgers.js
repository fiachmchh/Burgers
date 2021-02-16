// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }




    $(".devoured").on("click", function(){

      console.log($(this).attr("id"), "this is the id ")


      fetch(`/api/burgers/${$(this).attr("id")}`, {

        method: 'PUT',
        headers: {
          Accept: 'appliburgerion/json',
          'Content-Type': 'appliburgerion/json',
        },

        // make sure to serialize the JSON body
        
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          
          location.reload('/');
        } else {
          alert('something went wrong!');
        }
      });
    }) 



    $(".delete").on("click", function(){

      console.log($(this).attr("id"), "this is the id ")


      fetch(`/api/burgers/${$(this).attr("id")}`, {

        method: 'DELETE',
        headers: {
          Accept: 'appliburgerion/json',
          'Content-Type': 'appliburgerion/json',
        },

        // make sure to serialize the JSON body
        
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          
          location.reload('/');
        } else {
          alert('something went wrong!');
        }
      });
    }) 


    // $('create-form').on("click", function(){

    //   console.log($(this).attr("id"), "this is the id ")


    //   fetch(`/api/burgers/${$(this).attr("id")}`, {

    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },

    //     // make sure to serialize the JSON body
        
    //   }).then((response) => {
    //     // Check that the response is all good
    //     // Reload the page so the user can see the new quote
    //     if (response.ok) {
          
    //       location.reload('/');
    //     } else {
    //       alert('something went wrong!');
    //     }
    //   });
    // }) 


  
    // CREATE
    const createburgerBtn = document.getElementById('create-form');
  
    if (createburgerBtn) {
      createburgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit')
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newburger = {
          name: document.getElementById('ca').value.trim(),
        };

        console.log('ABOUT TO SAVE THIS BURGER~!!',  newburger)
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newburger),
        }).then(() => {
          // Empty the form
          document.getElementById('ca').value = '';
  
          // Reload the page so the user can see the new quote
          // console.log('Created a new burger!');
          location.reload('/');
          
        });
      });
    }
  
    
  });
  