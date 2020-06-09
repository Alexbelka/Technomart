(function() {
    let open = document.querySelector('.reference-btn--appear');
    let popupRequest = document.querySelector('.popup-request');
    let closeRequest = document.querySelector('.popup-request__btn');
    let collection  = document.querySelectorAll('.goods-menu__trigger');
    let popup = document.querySelector('.popup');
    let close = document.querySelector('.popup__close');

    open.addEventListener('click', function (e) {
        e.preventDefault();
        popupRequest.classList.add('popup--appear');
    });

    closeRequest.addEventListener('click', function (e) {
        e.preventDefault();
        popupRequest.classList.remove('popup--appear');
    });

    for(let i = 0;i<collection.length;i++){
        collection[i].addEventListener('click',function(e){
            e.preventDefault();
            popup.classList.add('popup--appear');
        });
    }

    close.addEventListener('click', function (elem) {
        elem.preventDefault();
        popup.classList.remove('popup--appear');
    });



}());
