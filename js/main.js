const bg = document.getElementById('landing-mountains__bg');
const fg = document.getElementById('landing-mountains__fg');

const introductionContainer = document.getElementById('introduction');
const nameElement = document.getElementById('landing-name__text');
const introductionSubText = document.getElementById('introduction__subtext');
const greetingHi = document.getElementById('greeting-hi');
const greetingMyName = document.getElementById('greeting-my-name');
const greetingName = document.getElementById('greeting-name');
const greetingContainer = document.getElementById('greeting-container')

const textContainer = document.getElementById('content-container__text');
const skillContainer = document.getElementById('content-container__skills');
const contentDivider = document.getElementById('content-container__divider');
const contentContainer = document.getElementById('content-container');

// global variables
let hasSaidHello = false;

let bgPosY = -50;
let fgPosY = -120;

const parallaxDown = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl.fromTo('#introduction-container', 0.55, {y: `-${window.innerHeight}`, ease: Power3.easeOut}, {y: '0'})	
	bg.style.bottom = `${bgPosY+120}px`
	fg.style.bottom = `${fgPosY}px`
}

const parallaxUp = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl.fromTo('#introduction-container', 0.5, {y: '0'}, {y: `-${window.innerHeight}`})
	bg.style.bottom = `${bgPosY+10}px`
	fg.style.bottom = `${fgPosY}px`
}

const onResize = () => {
	bg.style.backgroundPositionY = `${bgPosY}%`
	fg.style.backgroundPositionY = `${fgPosY}%`
}

const animatePage2 = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl
		.to("#greeting-hi", 0.6, {opacity: '1', ease: Power3.easeIn})
		.fromTo("#greeting-hi", 0.8, {x: '-15%'}, {x: '0', ease: Power3.easeIn}, "-=0.6")

		.to("#greeting-my-name", 0.4, {opacity: '1', ease: Power3.easeIn}, 1)
		.fromTo("#greeting-my-name", 0.4, {y: `${greetingMyName.offsetHeight}px`}, {y: `0`, ease: Power2.easeIn}, "-=0.6")

		.to("#greeting-name", 0, {opacity: '1', ease: Power3.easeIn}, 0.4)
		.fromTo("#greeting-name", 0.6, {width: '0'}, {width: `${greetingName.offsetWidth}px`, ease: Power2.easeIn})

		.to("#greeting-hi", 0.8, {opacity: '0', ease: Power3.easeInOut}, 2.5)
		.fromTo("#greeting-hi", 1, {x: '0'}, {x: '-50%', ease: Power3.easeInOut}, '-=0.4')

		.to("#greeting-my-name", 0.6, {opacity: '0', ease: Power3.easeInOut}, '-=0.8')
		.fromTo("#greeting-my-name", 0.8, {x: '0'}, {x: '-35%', ease: Power3.easeInOut}, '-=0.8')
		
		.to("#greeting-name", 0.4, {y: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeInOut})
		
		
		.to("#content-container", 0, {display: 'flex'})
		.fromTo("#content-container", 0.6, {opacity: '0'}, {opacity: '1', ease: Power3.easeInOut}, "+=0.3")
		.fromTo("#content-container", 0.8, {x: '35%'}, {x: '0', ease: Power3.easeInOut}, '-=0.6')
		.to("#arrow-container-2", 0.4, {opacity: '1', ease: Power3.easeInOut}, '+=2')
		hasSaidHello = true;
}

const introductionPageLeave = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	if (hasSaidHello) {
		tl
			.to("#greeting-name", 0.4, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn})
			.fromTo("#greeting-name", 0.4, {opacity: '1'}, {opacity: '0', ease: Power3.easeInOut}, "-=0.4")
			
			.fromTo("#content-container", 0.4, {opacity: '1'}, {opacity: '0', ease: Power3.easeInOut}, "-=0.4")
			.fromTo("#content-container", 0.4, {x: '0%'}, {x: '35%', ease: Power3.easeInOut}, '-=0.4')
	}
	tl 
	.fromTo("#work__title", 0.6,{x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`}, {x: `0`, ease: Power3.easeInOut}, (hasSaidHello) ? '-=0.4' : 0)
	.fromTo("#work__title", 0.6, {opacity: '0', ease: Power3.easeInOut}, {opacity: '1'}, "-=0.6")

	.fromTo("#study-container", 0.4, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn}, {x: 0},   '-=0.6')
	.fromTo("#work-container", 0.4, {x: `${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn}, {x: 0},   '-=0.6')
}

const introductionPageEnter = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	if (hasSaidHello) {
		const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
		tl
			.to("#greeting-name", 0.6, {x: `0`, ease: Power3.easeInOut})
			.fromTo("#greeting-name", 0.6, {opacity: '0', ease: Power3.easeInOut}, {opacity: '1'}, "-=0.6")
			
			.fromTo("#content-container", 0.6, {opacity: '0', ease: Power3.easeInOut}, {opacity: '1'}, "-=0.6")
			.fromTo("#content-container", 0.6, {x: '35%', ease: Power3.easeInOut}, {x: '0%'},   '-=0.6')
	}
	tl

	.to("#work__title", 0.4, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn}, (hasSaidHello) ? '-=0.4' : 0)
	.fromTo("#work__title", 0.4, {opacity: '1'}, {opacity: '0', ease: Power3.easeInOut}, "-=0.4")
	
	.fromTo("#study-container", 0.4, {x: 0}, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn},   '-=0.6')
	.fromTo("#work-container", 0.4, {x: 0}, {x: `${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn},   '-=0.6')

}

const pojectsPageEnter = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl

	.to("#work__title", 0.4, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn})
	.fromTo("#work__title", 0.4, {opacity: '1'}, {opacity: '0', ease: Power3.easeInOut}, "-=0.4")
	
	.fromTo("#projects-preview-container", 0.6, {opacity: '0', ease: Power3.easeInOut}, {opacity: '1'}, "-=0.6")
	.fromTo("#projects-preview-container", 0.6, {x: '35%', ease: Power3.easeInOut}, {x: '0%'},   '-=0.6')
	
	.fromTo("#study-container", 0.4, {x: 0}, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn},   '-=0.6')
	.fromTo("#work-container", 0.4, {x: 0}, {x: `${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn},   '-=0.6')

}

const projectsPageLeave = () => {
	const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
	 tl
	.fromTo("#work__title", 0.6, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`}, {x: `0`, ease: Power3.easeInOut})
	.fromTo("#work__title", 0.6, {opacity: '0', ease: Power3.easeInOut}, {opacity: '1'}, "-=0.6")
	
	.fromTo("#projects-preview-container", 0.4, {opacity: '1'}, {opacity: '0', ease: Power3.easeInOut}, "-=0.4")
	.fromTo("#projects-preview-container", 0.4, {x: '0%'}, {x: '35%', ease: Power3.easeInOut}, '-=0.4')

	.fromTo("#study-container", 0.4, {x: `-${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn}, {x: 0},   '-=0.6')
	.fromTo("#work-container", 0.4, {x: `${greetingName.offsetTop - greetingContainer.offsetTop + window.innerHeight * 0.1}`, ease: Power3.easeIn}, {x: 0},   '-=0.6')
}

let skillsAreShown = false;

const showSkillBars = () => {
	document.getElementById('arrow-right').style.display = 'none';
	if (window.innerWidth < 800) {
		if (!skillsAreShown) {
			skillsAreShown = true;
			contentDivider.classList.remove('bar-left-animation');
			contentDivider.classList.add('bar-right-animation');
			const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
			tl	
				.to('.content-container__text', 0, {'max-height': `${textContainer.offsetHeight}px`, 'min-height': `${textContainer.offsetHeight}px`})
				.to('.content-container__text p', 0, {'min-width': `${textContainer.offsetWidth}px`})
				.to('.content-container__text', 0.6, {width: '0vw', ease: Power3.easeInOut})
				.fromTo('#content-container__skills', 0.6, {width: '0'}, {width: '80vw', ease: Power3.easeInOut}, "-=0.6")
		}
	} else {
		if (!skillsAreShown) {
			skillsAreShown = true;
			contentDivider.classList.remove('bar-right-animation');
			contentDivider.classList.remove('bar-left-animation');
			const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
			tl	
				.fromTo('#content-container__skills', 0.6, {width: '0'}, {width: '20vw', ease: Power3.easeInOut})
		}
	}
}

const hideSkillBars = () => {
	if (window.innerWidth < 800) {
		if (skillsAreShown) {
			contentDivider.classList.remove('bar-right-animation');
			contentDivider.classList.add('bar-left-animation');
			const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
			tl	
			.to('.content-container__text', 0.6, {width: '500px', ease: Power3.easeInOut})
			.fromTo('#content-container__skills', 0.6, {width: '80vw'}, {width: '0', ease: Power3.easeInOut}, "-=0.6")
			setTimeout(() => {
				skillsAreShown = false;
			}, 600);
		}
	} else {
		if (skillsAreShown) {
			contentDivider.classList.remove('bar-right-animation');
			contentDivider.classList.add('bar-left-animation');
			const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
			tl	
				.fromTo('#content-container__skills', 0.6, {width: '20vw'}, {width: '0', ease: Power3.easeInOut})
			setTimeout(() => {
				skillsAreShown = false;
			}, 600);
		}
	}
}

window.mobileAndTabletcheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
  };

const pageScroller = new PageScroller('page-scroller', 400);

pageScroller.set({
	dragTreshold: 0.15,
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
			},
			{
				from: '1',
				to: '2',
				callback: () => introductionPageLeave(),
			},
			{
				from: '2',
				to: '1',
				callback: () => introductionPageEnter(),
			},
			{
				from: '2',
				to: '3',
				callback: () => pojectsPageEnter(),
			},
			{
				from: '3',
				to: '2',
				callback: () => projectsPageLeave(),
			}
		],
	easingForAll : {
		from: '1',
		to: '2',
		func: (window.mobileAndTabletcheck) ? 'easeOutCubic': 'easeInOutCubic',
	},
});

onResize();
window.addEventListener('resize', onResize);

window.addEventListener('scroll', ()=> {
	const name = document.getElementById('landing-name');
	if (window.pageYOffset + 110 > window.innerHeight / 2) {
		name.style.display = 'none';
	} else if (window.pageYOffset + 110 < window.innerHeight / 2) {
		name.style.display = 'flex';

	}
})

window.addEventListener('touchmove', ()=> {
	const name = document.getElementById('landing-name');
	if (window.pageYOffset + 100 > window.innerHeight / 2) {
		name.style.display = 'none';
	} else if (window.pageYOffset  < window.innerHeight / 2) {
		name.style.display = 'flex';

	}
})

introductionSubText.addEventListener('click', () => {
	const animationLength = 0.7;
	introductionContainer.style.transition = `opacity ${animationLength}s`;
	introductionContainer.style.opacity = '0';
	setTimeout(() => {
		introductionContainer.style.display = 'none';
	}, animationLength * 1000)
	animatePage2();
})

introductionSubText.addEventListener('touch', () => {
	const animationLength = 0.7;
	introductionContainer.style.transition = `opacity ${animationLength}s`;
	introductionContainer.style.opacity = '0';
	setTimeout(() => {
		introductionContainer.style.display = 'none';
	}, animationLength * 1000)
	animatePage2();
});

contentDivider.addEventListener('mouseover', showSkillBars);
skillContainer.addEventListener('mouseleave', hideSkillBars);

const hammerContent = new Hammer(document.getElementById('content-inner-container'));
hammerContent.on('swiperight', function(ev) {
	if (!skillsAreShown){
		showSkillBars();
	} 
});

hammerContent.on('swipeleft', function(ev) {
	if (skillsAreShown) {
		hideSkillBars();
	}
});

let workIsShown = false

const hammerWork = new Hammer(document.getElementById('work-content-container'));
hammerWork.on('swiperight', function(ev) {
	if (workIsShown && window.innerWidth < 1400) {
		workIsShown = false;
		document.getElementById('work-divider').classList.remove('bar-left-animation');
		document.getElementById('work-divider').classList.add('bar-right-animation');
		const workContainer = document.getElementById('work-container');
		const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
		tl	
			.to('#work-container', 0.6, {opacity: '0', ease: Power3.easeInOut})

			.to('#work-container', 0, {'max-height': `${workContainer.offsetHeight}px`, 'min-height': `${workContainer.offsetHeight}px`}, '-=0.6')
			.to('#work-container p ', 0, {'min-width': `${workContainer.offsetWidth}px`}, '-=0.6')
			.to('#work-container', 0.6, {width: '0', ease: Power3.easeInOut}, '-=0.6')
			.to('#work-container', 0, {display: 'none', ease: Power3.easeInOut})

			
			.fromTo('#study-container', 0, {display: 'block'}, {width: '80vw', ease: Power3.easeInOut}, "-=0.6")
			.fromTo('#study-container', 0.6, {width: '0'}, {width: '80vw', ease: Power3.easeInOut}, "-=0.6")
			.fromTo('#study-container', 0.6, {opacity: '0'}, {opacity: '1', ease: Power3.easeInOut}, "-=0.6")
	}
});

hammerWork.on('swipeleft', function(ev) {
	if (!workIsShown && window.innerWidth < 1400) {
		workIsShown = true;
		document.getElementById('work-divider').classList.remove('bar-right-animation');
		document.getElementById('work-divider').classList.add('bar-left-animation');
		const studyContainer = document.getElementById('study-container');
		const workContainer = document.getElementById('work-container');
		workContainer.style.maxHeight = `${studyContainer.offsetHeight}px`
		const tl = gsap.timeline({repeat: 0, repeatDelay: 0});
		tl	
			.to('#study-container', 0.6, {opacity: '0', ease: Power3.easeInOut})

			.to('#study-container', 0, {'max-height': `${studyContainer.offsetHeight}px`, 'min-height': `${studyContainer.offsetHeight}px`}, '-=0.6')
			.to('#study-container p ', 0, {'min-width': `${studyContainer.offsetWidth}px`}, '-=0.6')
			.to('#study-container', 0.6, {width: '0vw', ease: Power3.easeInOut}, '-=0.6')
			.to('#study-container', 0, {display: 'none', ease: Power3.easeInOut})

			.fromTo('#work-container', 0.6, {width: '0'}, {width: '80vw', ease: Power3.easeInOut}, "-=0.6")
			.fromTo('#work-container', 0, {display: 'block'}, {width: '80vw', ease: Power3.easeInOut}, "-=0.6")
			.fromTo('#work-container', 0.6, {opacity: '0'}, {opacity: '1', ease: Power3.easeInOut}, "-=0.6")
	}
});

document.getElementById('arrow-container-1').addEventListener('click', () => {
	pageScroller.scrollToPage(1);
});
document.getElementById('arrow-container-2').addEventListener('click', () => {
	pageScroller.scrollToPage(2);
});

document.getElementById('arrow-container-3').addEventListener('click', () => {
	pageScroller.scrollToPage(3);
});

