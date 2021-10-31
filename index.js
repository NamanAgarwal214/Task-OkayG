let selectList = document.querySelectorAll('.list');

for (let i = 0; i < selectList.length; i++) {
    selectList[i].addEventListener('click', function (e) {
        let j = 0;
        while (j < selectList.length) {
            selectList[j++].className = 'list';
        }
        selectList[i].className = 'list active';

        e.preventDefault();
    })
}

let toggleSelect = document.querySelector('.toggler');
let navigateSelect = document.querySelector('.content');

toggleSelect.addEventListener('click', function () {
    toggleSelect.classList.toggle('active');
    navigateSelect.classList.toggle('active');
})