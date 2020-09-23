

function changePrice(){
    var toggle = document.getElementById('toggle');
    var cards = document.getElementById('cards');
    if(toggle.checked){
        cards.classList.add("show-month");
    }else{
        cards.classList.remove("show-month");
    }

}