  import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

window.onload = async function() {
    const circle = document.getElementById('circle');
    const docRef = doc(db, 'statuses', 'circleState');
    
    // Firestore에서 저장된 상태 확인
    const docSnap = await getDoc(docRef);

    // Firestore에 상태가 있으면 그 상태로 설정
    if (docSnap.exists()) {
        const savedState = docSnap.data().state;
        if (savedState === 'Online') {
            circle.textContent = 'Online';
            circle.style.backgroundColor = 'green';
        } else {
            circle.textContent = 'Offline';
            circle.style.backgroundColor = 'red';
        }
    } else {
        // Firestore에 저장된 상태가 없으면 기본값으로 설정
        circle.textContent = 'Offline';
        circle.style.backgroundColor = 'red';
    }

    // 클릭할 때마다 상태 변경 및 Firestore에 저장
    circle.addEventListener('click', async function() {
        if (circle.textContent.trim() === 'Offline') {
            circle.textContent = 'Online';
            circle.style.backgroundColor = 'green';
            await setDoc(docRef, { state: 'Online' }); // 상태를 Firestore에 저장
        } else {
            circle.textContent = 'Offline';
            circle.style.backgroundColor = 'red';
            await setDoc(docRef, { state: 'Offline' }); // 상태를 Firestore에 저장
        }
    });
};
