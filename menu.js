let menu = document.querySelector('.menuBtn')
let list = document.querySelector('.menu__list')
let count = true



menu.addEventListener('click',menuClick)



function menuClick(){
	console.log('Клик');
	if (count == true){
	list.classList.add('menu_active')
	count = false
	} else {
		list.classList.remove('menu_active')
		count = true
	}
}


