const button = document.querySelector(".btn12");
button.addEventListener("click", hideText);
function hideText()
{
const text = document.querySelector(".lorem");
text.hidden = true;

const button = document.querySelector(".btn12");
button.removeEventListener("click", hideText);
button.addEventListener("click", showText)

}

function showText() {
    const text = document.querySelector(".lorem");
    text.hidden = false;
    const button = document.querySelector(".btn12");
    button.removeEventListener("click", showText);
    button.addEventListener("click", hideText)

}