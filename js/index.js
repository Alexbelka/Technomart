
(function() {
    let group = document.querySelectorAll('.goods-menu__trigger');
    let popup = document.querySelector('.popup');
    let close = document.querySelector('.popup__close');

    for (let i = 0; i < group.length; i++){
            group[i].addEventListener('click', function (e) {
                e.preventDefault();
                popup.classList.add('popup--appear');
            });
        }

    close.addEventListener('click', function (elem) {
        elem.preventDefault();
        popup.classList.remove('popup--appear');
    });


    //--не работает скрытие окна при нажатии esc
        window.addEventListener('keydown',function(e){
            e.preventDefault();
            if(e.keyCode === 27){
                console.log('hello');
            }
        });
}());