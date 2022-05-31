let btnSubmit = document.getElementById('submitBtn');
let result = document.getElementById('result-text');

btnSubmit.addEventListener('click', function () {
    let selected = document.querySelector('input[type="radio"]:checked').value;
    result.innerHTML = `you have selected ${selected.value} out of 5`;
})