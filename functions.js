// Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries
	
	  // Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  const firebaseConfig = {
	    apiKey: "AIzaSyCoOgIpLf6KdpLmDFE1xo6n3a_OleksnOc",
	    authDomain: "realtime-db-web-5c420.firebaseapp.com",
	    projectId: "realtime-db-web-5c420",
	    storageBucket: "realtime-db-web-5c420.appspot.com",
	    messagingSenderId: "598795890831",
	    appId: "1:598795890831:web:cb0eebdd600c83ad25c0fa",
	    measurementId: "G-EPXHTWC80S"
	  };
	
	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);

const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updaetBtn');
const removeBtn = document.getElementById('removeBtn');
const showBtn = document.getElementById('showBtn');

const database = firebase.databse();
const db = firebase.firestore();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e =>{
	e.preventDefault();
	usersRef.child(userId.value).set({
		first_name: firstName.value,
		last_name: lastName.value,
		age: age.value
	});
});

updateBtn.addEventListener('click', e =>{
	e.preventDefault();
	const newData = {
		first_name: firstName.value,
		last_name: lastName.value,
		age: age.value
	};
	usersRef.child(userId.value).update(newData);
});

removeBtn.addEventListener('click', e =>{
	e.preventDefault();
	usersRef.child(userId.value).remove()
			.then(()=> {
				console.log("User Deleted !");
			})
			.catch(error => {
				console.error(error);
			});
});