const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index=0
const arrowRight=document.querySelector(".arrow_right")
const arrowLeft=document.querySelector(".arrow_left")
const bannerImg=document.querySelector(".banner-img")
const text = document.querySelector("#banner p")
const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const dot3 = document.getElementById('dot3')
const dot4 = document.getElementById('dot4')
const dotAll = [dot1, dot2, dot3, dot4]

const goToNextImage=()=>{
	index=index+1
	if(index>slides.length-1){
		index=0
	}
	console.log(index)
	console.log(slides[index])
	bannerImg.src= "./assets/images/slideshow/"+slides[index].image
	text.innerHTML = slides[index].tagLine
	changeDot();
}
setInterval(goToNextImage, 5000);

const goToPreviousImage=()=>{
	index=index-1
	if(index<0){
		index=slides.length-1
	}
	console.log(index)
	console.log(slides[index])
	bannerImg.src= "./assets/images/slideshow/"+slides[index].image
	text.innerHTML = slides[index].tagLine
	changeDot();
}
arrowRight.addEventListener("click", goToNextImage)
arrowLeft.addEventListener("click", goToPreviousImage)


const changeDot = () => {
	dotAll.forEach(dotSelected => {
		dotSelected.classList.remove('dot_selected')
	});
	switch (index) {
		case 0:
			dot1.classList.add('dot_selected')
			break;
		case 1:
			dot2.classList.add('dot_selected')
			break;
		case 2:
			dot3.classList.add('dot_selected')
			break;
		case 3:
			dot4.classList.add('dot_selected')
			break;
		default:
			break;
	}
}

