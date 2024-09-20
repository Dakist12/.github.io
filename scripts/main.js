    // 처음 페이지가 로드될 때 localStorage에서 상태 확인
    import { initializeApp } from 'firebase/app';
    
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
      //...
    };
    
    const app = initializeApp(firebaseConfig);

window.onload = function() {
    const circle = document.getElementById('circle');
    
    // localStorage에서 저장된 상태를 확인
    const savedState = localStorage.getItem('circleState');

    // 저장된 상태가 있다면, 그 상태로 설정
    if (savedState === 'Online') {
        circle.textContent = 'Online';
        circle.style.backgroundColor = 'green';
    } else {
        circle.textContent = 'Offline';
        circle.style.backgroundColor = 'red';
    }

    // 클릭할 때마다 상태 변경 및 저장
    circle.addEventListener('click', function() {
        if (circle.textContent.trim() === 'Offline') {
            circle.textContent = 'Online';
            circle.style.backgroundColor = 'green';
            localStorage.setItem('circleState', 'Online'); // 상태를 localStorage에 저장
        } else {
            circle.textContent = 'Offline';
            circle.style.backgroundColor = 'red';
            localStorage.setItem('circleState', 'Offline'); // 상태를 localStorage에 저장
        }
    });
}
