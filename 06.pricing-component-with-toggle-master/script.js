

// function changePrice(){
//     var toggle = document.getElementById('toggle');
//     var cards = document.getElementById('cards');
//     if(toggle.checked){
//         cards.classList.add("show-month");
//     }else{
//         cards.classList.remove("show-month");
//     }
// }

// Can also addListner to toggle, event is "change"
function changePrice(){
    // var toggle = document.getElementById('toggle');
    var cards = document.getElementById('cards');
    cards.classList.toggle("show-month");
}