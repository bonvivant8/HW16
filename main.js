const inputEl=document.querySelector('.input');
function focus(){
const newDiv=document.createElement("div");
    const newText=document.createTextNode("Hello!")
    newDiv.appendChild(newText);
    inputEl.after(newDiv)
}
function blur(){
    const my_div=document.querySelector('div');
    my_div.remove()
}

inputEl.addEventListener('focus',focus)
inputEl.addEventListener('blur',blur)