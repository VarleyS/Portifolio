const content = "Full-Stack Developer";
const text = document.getElementById("pa");
const cursor = document.querySelector('.cursor');
const speed = 200

cursor.classList.toggle('ativo');
let cont = 0;
function maqEscrever(){
    if(cont < content.length){
        //text.textContent += content.charAt(cont);
        text.textContent = content.substring(0, cont + 1);
        cont++;
        setTimeout(maqEscrever, speed);
    }
} 

maqEscrever()

function initCursorBlink(cursorElement) {

    function animaCursor() {
        cursorElement.classList.toggle('ativo');
    }
    setInterval(animaCursor, 500);
};

setTimeout(() => {
    initCursorBlink(cursor);
}, 2500);