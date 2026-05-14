const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {    
    let username = 'admin';
    let password = '1234';

    const lname = document.querySelector("#lname").value;
    const fname = document.querySelector("#fname").value;
    if (fname == username && lname == password)
    {
        alert ("welcome admin");
    }
    else
    {
        alert ("try again");
    }

    fetch('http://localhost:3000/login', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({fname: fname, lname: lname}) 
    })
})