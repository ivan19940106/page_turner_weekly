$(document).ready(function(){
    var today = new Date();
    var thisYear = today.getFullYear();
    $('.copyright-year').text(thisYear);

    // $('.card-grid').click(function(e){
    //     e.preventDefault();
    //     if(window.location.search == '?ss=on'){
    //         window.location.href = 'card_content.html?ss=on';
    //     } else {
    //         window.location.href = 'card_content.html';
    //     }
    // });

    // $('.prev-page-btn').click(function(e){
    //     e.preventDefault();
    //     if(window.location.search == '?ss=on'){
    //         window.location.href = 'index.html?ss=on';
    //     } else {
    //         window.location.href = 'index.html';
    //     }
    // });

    // if(window.location.search == '?ss=on'){
    //     $('.save-screenshot').addClass('show');
    // }

    // $('.save-screenshot').click(function(e){
    //     e.preventDefault();
    //     screenshot();
    // });

    // p5.js
    var p5Switch = 0;
    if(p5Switch === 1){
        enableP5();
    }

    // function screenshot(){
    //     html2canvas(document.getElementById('card-screenshot')).then(function(canvas) {
    //         document.body.appendChild(canvas);
    //         var a = document.createElement('a');
    //         a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    //         a.download = 'image.jpg';
    //         a.click();
    //         canvas.style.display='none';
    //     });
    // }

    function enableP5(){
        $('.image-content img').hide();
        $('.image-content').attr('id', 'canvas-for-p5');
    }
});