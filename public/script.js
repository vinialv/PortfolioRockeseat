const modalOverlay = document.querySelector('.modal-overlay');
const cardsSelector = document.querySelectorAll('.card');

for (let card of cardsSelector){
    card.addEventListener('click', function(){
        const videoID = card.getAttribute('id');
        window.location.href = `/video?id=${videoID}`
    })
}
