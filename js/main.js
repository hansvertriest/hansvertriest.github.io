const bg = document.getElementById('landing-mountains__bg');
const fg = document.getElementById('landing-mountains__fg');
const nameElement = document.getElementById('page-1__name');

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
	console.log('resize')
	
	bg.style.backgroundPositionY = `${bgPosY}%`
	fg.style.backgroundPositionY = `${fgPosY}%`
	
	// position name
	nameElement.style.left = `${(((window.innerWidth) / 2) -( nameElement.offsetWidth / 2)) }px`;
	nameElement.style.top = `${(((window.innerHeight) / 2) -( nameElement.offsetHeight / 2)) }px`;
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