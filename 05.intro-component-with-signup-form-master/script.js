const form = document.getElementById('form');
const inputNodes = document.querySelectorAll('.input');

form.addEventListener("submit", e => {
    e.preventDefault();
    inputNodes.forEach((inputNode) =>{
        check(inputNode);
    })
});

function check(inputNode){
    const val = inputNode.value;
    const parent = inputNode.parentNode;
    const ph = inputNode.placeholder;
    if(val === ""){
        parent.classList.add('error');
        parent.querySelector('p').innerHTML='Please enter a valid '+ph;
    }else{
        parent.classList.remove('error');
    }
}