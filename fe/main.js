function func() {
    let p = document.querySelector(".main")
    p.style.color="red"
}

let p = document.querySelector("#larry")

function hide()
{
    p.style.display = "none";
}

function show()
{
    p.style.display = "block";
}

let h = document.querySelector("#fs")

function buttonshitnoneblock()
{
    if (h.style.display === "none")
    {
        h.style.display = "block";
    }
    else
    {
        h.style.display = "none";
    }
}

let h2 = document.querySelector("#overme")

function mouseover1()
{
    h2.style.textDecoration = "underline"
}

function out()
{
    h2.style.textDecoration = "none"
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {    
    let validFname = true
    let validLname = true
    let validEmail = true
    let validPhone = true
    let validSubjectMsg = true
    let validMsg = true


    const fname = document.querySelector("#fname").value;
    if (fname.length < 3)
    {
        alert("first name is too short;");
        validFname = false;
    }

    const lname = document.querySelector("#lname").value;
    if (lname.length < 3)
    {
        alert("last name is too short;");
        validLname = false
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
    const email = document.querySelector("#email").value;
    if (!emailPattern.test(email))
    {
        alert("Ilegal email!");
        validEmail = false
    }
    
    let doesItHaveLetters = false;
    const phone = document.querySelector("#phone_number").value;
    if (phone.length > 10)
    {
        alert("the phone number is too long!");
        validPhone = false
    }
    else if (isNaN(phone)) {
        alert("The phone number cant have letters");
    } 

    if (phone.length < 10)
    {
        alert("the phone number is too short!");
        validPhone = false
    }
    const subjectMsg = document.querySelector("#subjectMsg").value;
    if (subjectMsg.length < 5)
    {
        alert("the subject of the msg is too short!");
        validSubjectMsg = false;
    }
    
    const msg = document.querySelector("#msg").value;
    if (msg.length < 10)
    {
        alert("the msg is too short!");
        validMsg = false;
    }

    let validSumbit = validFname && validLname && validEmail && validPhone && validSubjectMsg && validMsg
    if (validSumbit)
    {
        alert("the form has been sumbited!!");
    }
    else
    {
        alert("the form has not been sumbited...:(")
    }
    fetch('http://localhost:3000/contact', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({fname: fname, lname: lname, email: email, phone: phone, subjectMsg: subjectMsg, msg: msg}) 
    })


    
    .then(res => res.json())
    .then(data => console.log('Server response:', data))
    .catch(err => console.error(err));
});
