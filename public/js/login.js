// at present using linear search algorithm.
let username=['cinu'];
let password=[1121];


let user=document.getElementById('user').value;
let pwd=document.getElementById('pwd').value;

function validate(){
	let found=0;
	let index=0;
	for(let i=0;i<username.length;i++){
		if(user===username[i]){
			index=i;
			found=1;
			break;
		}
	}
	if(found){
		if(pwd===password[index]){
			// redirect='/panel.html';
			// location.assign('panel.html')
			window.open('panel.html')
			console.log('password is correct')
		}
		else{
			alert('wrong pin added');
		}
	}
}