const form = document.getElementById('form');
const inputNodes = document.querySelectorAll('.input');

form.addEventListener("submit", e => {
    e.preventDefault();
    inputNodes.forEach( (inputNode) =>{
        check(inputNode);
    })
});

function check(inputNode){
    const id = inputNode.id;
    const val = inputNode.value;
    const parent = inputNode.parentNode;
    if(val === ""){
        parent.classList.add('error');
        parent.querySelector('p').innerHTML='Please enter a valid '+id;
    }else{
        parent.classList.remove('error');
    }
}