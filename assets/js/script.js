window.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button');
    let bars = document.querySelectorAll('.bar_background');
    let fraction = document.querySelectorAll('.bar_num');

    buttons.forEach(function(item, i) {
        item.addEventListener('click', function() {
            let barWidth = getComputedStyle(bars[i]);

            if(barWidth.maxWidth === '40px') {
                fraction[i].innerHTML = '1/5';
                bars[i].style.maxWidth = '82px';
            }
            else if (barWidth.maxWidth === '82px') {
                fraction[i].innerHTML = '2/5';
                bars[i].style.maxWidth = '124px';
            } 
            else if (barWidth.maxWidth === '124px') {
                fraction[i].innerHTML = '3/5';
                bars[i].style.maxWidth = '166px';
            }
            else if (barWidth.maxWidth === '166px') {
                fraction[i].innerHTML = '4/5';
                bars[i].style.maxWidth = '208px';
            } 
            else if (barWidth.maxWidth === '208px') {
                fraction[i].innerHTML = '5/5';
                bars[i].style.maxWidth = '250px';
            } else {
                fraction[i].innerHTML = '0/5';
                bars[i].style.maxWidth = '40px';
            }
        });
    });


    //Switch Themes
    document.documentElement.setAttribute('data-theme', 'blue');

    let themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.addEventListener('click', function() {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let switchToTheme = currentTheme === "green" ? "blue" : "green";

        document.documentElement.setAttribute("data-theme", switchToTheme);
    });

});