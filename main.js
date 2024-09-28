import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, setDoc } from 'firebase/firestore';

// Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyDD19tQFgggIdLLxqu0we8MfDtLFCx1PRs",
  authDomain: "where-is-teacher-d3e3c.firebaseapp.com",
  projectId: "where-is-teacher-d3e3c",
  storageBucket: "where-is-teacher-d3e3c.appspot.com",
  messagingSenderId: "39623109681",
  appId: "1:39623109681:web:0d895bb51f5eacca8d7910",
  measurementId: "G-5LD2HBD0YZ"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.onload = function() {
    const circle = document.getElementById('circle');
    const docRef = doc(db, 'statuses', 'circleState');

    // Firestore의 실시간 업데이트 기능 사용
    onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            const savedState = docSnap.data().state;
            console.log('실시간 Firestore 상태 업데이트:', savedState);

            // Firestore의 상태에 따라 UI 업데이트
            if (savedState === 'Online') {
                circle.textContent = 'Online';
                circle.style.backgroundColor = 'green';
            } else {
                circle.textContent = 'Offline';
                circle.style.backgroundColor = 'red';
            }
        } else {
            console.log('Firestore에 저장된 상태가 없습니다. 기본 상태로 설정합니다.');
            circle.textContent = 'Offline';
            circle.style.backgroundColor = 'red';
        }
    });

    // 클릭할 때마다 상태 변경 및 Firestore에 저장
    circle.addEventListener('click', async function() {
        try {
            if (circle.textContent.trim() === 'Offline') {
                await setDoc(docRef, { state: 'Online' }); // Firestore에 "Online" 상태 저장
                console.log('Firestore에 "Online" 상태 저장');
            } else {
                await setDoc(docRef, { state: 'Offline' }); // Firestore에 "Offline" 상태 저장
                console.log('Firestore에 "Offline" 상태 저장');
            }
        } catch (error) {
            console.error('Firestore에 상태를 저장하는 중 오류 발생:', error);
        }
    });
};

