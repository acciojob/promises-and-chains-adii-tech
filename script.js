//your JS code here. If required.
function createPromise(age) {
	let promise = new Promise((resolve,reject)=>{
		if(age >= 18){
			resolve();
		}
		else{
			reject();
		}
	
});
	return promise;
}
let btn = document.getElementById("submit");
btn.addEventListener('click',()=>{
	let age = document.getElementById("age").value;
	let promise1 = createPromise(Number(age));
	promise1.then(()=>{
		alert(`Welcome, ${document.getElementById("name").value}. You can vote.`)
	});
	promise1.catch(()=>{
		alert(`Oh sorry ${document.getElementById("name").value}. You aren't old enough.`)
	});
	
})
