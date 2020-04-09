const bg = document.getElementById('landing-mountains__bg');
const fg = document.getElementById('landing-mountains__fg');

let bgPosY = 125;
let fgPosY = 135;

bg.style.backgroundPositionY = `${bgPosY}%`
fg.style.backgroundPositionY = `${fgPosY}%`

const parallaxDown = () => {
	bg.style.backgroundPositionY = `${bgPosY-40}%`
	fg.style.backgroundPositionY = `${fgPosY}%`
}

const parallaxUp = () => {
	bg.style.backgroundPositionY = `${bgPosY+10}%`
	fg.style.backgroundPositionY = `${fgPosY}%`
}

const pageScroller = new PageScroller('page-scroller', 500);

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
	}
);
