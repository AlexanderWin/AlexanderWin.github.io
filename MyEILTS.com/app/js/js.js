    var example = document.getElementById('example'),
        ctx     = example.getContext('2d'),
        pic     = new Image();
    example.height = 300;
    example.height = 450;
    pic.src = 'http://habrahabr.ru/i/nocopypast.png';
    pic.onload = function () {
        // Иллюстрация для пример №1
        ctx.drawImage(pic, 0, 0);
        // Иллюстрация для пример №2
        ctx.drawImage(pic, 0, 130, 300, 150);
        // Иллюстрация для пример №3
        ctx.drawImage(pic, 25, 42, 85, 55, 0, 300, 170, 110);
    }