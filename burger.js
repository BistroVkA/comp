const nav = document.querySelector('.menu__navi');
const burger = document.querySelector('.burger');
function burderClick(){
	console.log('burger');
	nav.classList.toggle('menu__navi_active');
	burger.classList.toggle('active')
	navLinks.forEach((link,index)=>{
		console.log(index)
		if(link.style.animation){
			link.style.animation="";
		}
		else{link.style.animation="navLinkAnim 1.5s ease forwards ${index/7+0,3}s";
		console.log(index/7);
	}
	})
}
