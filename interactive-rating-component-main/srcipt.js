const submitBtn = document.getElementById('submitBtn');
const btn1 = document.getElementById('btnradio1');
const btn2 = document.getElementById('btnradio2');
const btn3 = document.getElementById('btnradio3');
const btn4 = document.getElementById('btnradio4');
const btn5 = document.getElementById('btnradio5');


submitBtn.addEventListener('click', function(e) {
    btn1Clicked();
})

function btn1Clicked() {
    btn1.checked = true;
    btn2.checked = false;
    btn3.checked = false;
    btn4.checked = false;
    btn5.checked = false;
}