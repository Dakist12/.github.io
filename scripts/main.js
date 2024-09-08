const circle = document.getElementById('circle');

circle.addEventListener('click', function() {
    // 원의 텍스트와 색상을 토글
    if (circle.textContent.trim() === 'Offline') { // trim()으로 공백 제거
        circle.textContent = 'Online';
        circle.style.backgroundColor = 'green'; // 배경색을 초록색으로 변경
    } else {
        circle.textContent = 'Offline';
        circle.style.backgroundColor = 'red'; // 배경색을 빨간색으로 변경
    }
});
