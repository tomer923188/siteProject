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