let button = document.querySelectorAll('.shop__btn');
console.log(button.length);



for (let i =0; i<button.length;i++){
	button[i].addEventListener('click',change)
	
	function change (){
button[i].classList.toggle('activeBtn')

	if (button[i].classList.contains ('activeBtn')) {
		//button[i].classList.add('activeBtn')
	button[i].innerHTML = 'В корзине'
	} else{
	//button[i].classList.remove('activeBtn')

	button[i].innerHTML = 'Купить'
	}
}
}
//function change (){
//	if (flag==false) {
//		button[i].style.background = 'white'
//		button[i].style.color='black'
//		button[i].innerHTML = 'В корзине'
//		flag = true;
//		} else{
//		button[i].style.background = 'white'
//		button[i].style.color='black'
//		button[i].innerHTML = 'Купить'
//		flag= false/


