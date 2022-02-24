window.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button');
    let bars = document.querySelectorAll('.bar_background');

    buttons.forEach(function(item, i) {
        item.addEventListener('click', function() {
            let barWidth = getComputedStyle(bars[i]);

            if(barWidth.maxWidth === '40px') {
                bars[i].style.maxWidth = '82px';
            }
            else if (barWidth.maxWidth === '82px') {
                bars[i].style.maxWidth = '124px';
            } 
            else if (barWidth.maxWidth === '124px') {
                bars[i].style.maxWidth = '166px';
            }
            else if (barWidth.maxWidth === '166px') {
                bars[i].style.maxWidth = '208px';
            } 
            else if (barWidth.maxWidth === '208px') {
                bars[i].style.maxWidth = '250px';
            } else {
                bars[i].style.maxWidth = '40px';
            }
        });
    });
});