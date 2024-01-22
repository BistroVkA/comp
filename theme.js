let changeTheme = document.querySelector('.themes')
let shop = document.querySelector('.shop__title')
let main_title = document.querySelector('.main_title')
let priceText = document.querySelectorAll('.shop__text')
let changeColorBtn = document.querySelector('.change_color')
let color = ''
let textColor =  ''
const header = document.querySelector('.menu')
const footer = document.querySelector('.body')
const navLinks = document.querySelectorAll('.shop__text')
if (localStorage.getItem('bg-color') !==null){
	color=localStorage.getItem('bg-color')
	textColor=localStorage.getItem('text-color')
	header.style.background = color
	footer.style.background = color
	navLinks.forEach((el)=>{
		el.style.color = textColor
	})
}
function choiceWhite(){
console.log('white');
//shop.style.color = 'white'//
header.style.background = 'black'
header.style.transition= '1s ease-out 0.5s'
footer.style.transition= '1s ease-out 0.5s'
footer.style.background = 'black'	
navLinks.forEach((el)=>{
	el.style.transition = '1s ease-out 0.5s'
	el.style.color = 'black'
	localStorage.setItem('bg-color','white')
localStorage.setItem('text-color','black')
})
}
function choiceDark(){
	console.log('black')
	//shop.style.color = 'black'//
header.style.transition= '1s ease-out 0.5s'
footer.style.transition= '1s ease-out 0.5s'
footer.style.background = 'white'
header.style.background = 'white'
	navLinks.forEach((el)=>{
	el.style.transition = '1s ease-out 0.5s'
	el.style.color = 'white'
	localStorage.setItem('bg-color','black')
	localStorage.setItem('text-color','white')
})
}