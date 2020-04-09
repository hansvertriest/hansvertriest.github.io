const bg = document.getElementById('landing-mountains__bg');
const fg = document.getElementById('landing-mountains__fg');
const nameContainer = document.getElementById('landing-name');
const nameElement = document.getElementById('landing-name__text');

// place mountains

let bgPosY = -50;
let fgPosY = -120;

const parallaxDown = () => {
	bg.style.bottom = `${bgPosY+120}px`
	fg.style.bottom = `${fgPosY}px`
}

const parallaxUp = () => {
	bg.style.bottom = `${bgPosY+10}px`
	fg.style.bottom = `${fgPosY}px`
}

const onResize = () => {
	bg.style.backgroundPositionY = `${bgPosY}%`
	fg.style.backgroundPositionY = `${fgPosY}%`
	
	// position name
	nameContainer.style.left = `${(((window.innerWidth) / 2) -( nameContainer.offsetWidth / 2)) }px`;
	nameContainer.style.top = `${(((window.innerHeight) / 2) -( nameContainer.offsetHeight / 2)) }px`;
}

const pageScroller = new PageScroller('page-scroller', 300);

pageScroller.set({
	reset: 'true',
	whileTransitioning : 
		[
			{
				from: '0',
				to: '1',
				callback: () => parallaxDown(),
			},
			{
				from: '1',
				to: '0',
				callback: () => parallaxUp(),
			}
		],
		
	easingForAll : {
		from: '1',
		to: '2',
		func: 'easeInOutCubic',
	}
	}
);

// ===== Page-1
onResize();
window.addEventListener('resize', onResize);

window.addEventListener('scroll', ()=> {
	const newInnerHTML = 'Oh, I should introduce myself properly...'
	const clickMeButton = document.getElementById('landing-name__subtext');
	if (window.pageYOffset + 100 > window.innerHeight / 2) {
		nameElement.innerHTML = newInnerHTML;
		nameElement.classList.add('landing-name__text--transformed');
		clickMeButton.style.display = 'inherit';
	} else if (nameElement.innerHTML === newInnerHTML) {
		nameElement.innerHTML = 'Hans Vertriest';
		nameElement.classList.remove('landing-name__text--transformed');
		clickMeButton.style.display = 'none';
	}
	nameContainer.style.left = `${(((window.innerWidth) / 2) -( nameContainer.offsetWidth / 2)) }px`;
	nameContainer.style.top = `${(((window.innerHeight) / 2) -( nameContainer.offsetHeight / 2)) }px`;
})