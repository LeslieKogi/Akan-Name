document.getElementById('akan-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the form from refreshing the page//

    const Birthday = document.getElementById('Birthday').value;
    const gender= document.getElementById('gender').value;
    //gets the users input 

    if (!birthday || !gender) {
        alert('Please fill out all fields.');
        return;
    }
    //checks if the user has filled out these fields 

