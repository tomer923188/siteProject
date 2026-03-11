function highlightParagraph()
{
    let el = document.querySelector(".newText");

    el.style.backgroundColor = "yellow";
    el.style.border = "2px solid black";
    el.style.borderRadius = "15px";
    el.style.color = "blue";
}

function contactSubmit()
{
    alert("Thanks for contacting us!");
}

function setItemColor(col)
{
    console.log(col);

    let container = document.querySelector("#items");
    container.className = col;
}

function makeHeadlineBlue()
{
    let title = document.querySelector("#headline");
    title.style.color = "blue";
}

let larryImg = document.querySelector("#larry");

function hideLarry()
{
    larryImg.style.display = "none";
}

function showLarry()
{
    larryImg.style.display = "block";
}

function changeHeadlineText()
{
    let txt = document.querySelector("#textChange");
    txt.textContent = "epstein just appeared!";
}

function hoverTextRed()
{
    let txt = document.querySelector("#sentenceHover");
    txt.style.color = "red";
}

function hoverTextReset()
{
    let txt = document.querySelector("#sentenceHover");
    txt.style.color = "black";
}

function hoverBoxEnter()
{
    let box = document.querySelector(".hoverBox");
    box.style.backgroundColor = "yellow";
}

function hoverBoxLeave()
{
    let box = document.querySelector(".hoverBox");
    box.style.backgroundColor = "grey";
}

function switchTheme()
{
    let page = document.body;

    if(page.classList.contains("whiteTheme"))
    {
        page.classList.replace("whiteTheme","blackTheme");
    }
    else
    {
        page.classList.replace("blackTheme","whiteTheme");
    }
}

function toggleVisibility()
{
    let text = document.querySelector("#changeClassText");

    if(text.classList.contains("visible"))
    {
        text.classList.replace("visible","hidden");
    }
    else
    {
        text.classList.replace("hidden","visible");
    }
}

function openTab(tabIndex)
{
    let tabData = [
        "tab 1 content here",
        "tab 2 content here",
        "tab 3 content here"
    ];

    let output = document.querySelector("#tabsText");
    output.textContent = tabData[tabIndex];
}

function toggleRed(element)
{
    if(element.classList.contains("noRed"))
    {
        element.classList.replace("noRed","yesRed");
    }
    else
    {
        element.classList.replace("yesRed","noRed");
    }
}
