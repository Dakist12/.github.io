const circle = document.getElementById('circle');

circle.addEventListener('click', function() {
    if (circle.textContent === 'Offline') {
        circle.textContent = 'Online';
        circle.style.backgroundColor = 'green';
    } else {
        circle.textContent = 'Offline';
        circle.style.backgroundColor = 'red';
    }
});

