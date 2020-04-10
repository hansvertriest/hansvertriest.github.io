const canvas = document.getElementById('canvas')
var c = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//--------Variables--------

const starRatio = 0.0007; //aantal sterren per vierkante pixel

const maxBigStarRadius = 1.5;

const maxSmallGlowCycle = 3000; // ms 
const maxSmallGowIntensity = 10; 

const maxSmallStarRadius = 1;


const oppScreen = canvas.width * canvas.height;
const totalSmallStars = starRatio * oppScreen;
const totalBigStars = totalSmallStars / 100;

const smallStarList = []
const bigStarList = []
const twinkleStarList = []

let beeldScale = canvas.width / 1300;

let bgPositionFactor = 1.1;
let fgPositionFactor = 1.2;

//--------Events--------

window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var oppScreen = canvas.width * canvas.height;
		var totalSmallStars = starRatio * oppScreen;
		var totalBigStars = totalSmallStars / 100;
		init()
	})


//--------objects--------

//Sterren

class Star {
	constructor (x, y, radius, glowingProps) {
		this.x = x;
		this.y = y;
		this.initRadius = radius;
		this.radius = radius;
		this.kleur = 'white';

		this.starIntensityFactor = (glowingProps) ? glowingProps.starIntensityFactor : undefined ;
		this.animationStart = (glowingProps) ? glowingProps.animationStart : undefined;
		this.animationCycle = (glowingProps) ? glowingProps.animationCycle : undefined;
		this.twinklePause = (glowingProps) ? glowingProps.twinklePause : undefined;
		
		this.animationPrePause = this.twinklePause * Math.random();
	
		this.opacity = 1.0;
	}

	drawTwinkle(time) {
		const maxRadius = this.starIntensityFactor * this.initRadius;
		this.radius = (Math.sin((time/this.animationCycle) + this.animationPrePause) * (maxRadius / 2)) + maxRadius;
	}

	draw() {
		c.beginPath();
		c.fillStyle = this.kleur;
			
		const dateNow = new Date().getTime();
		const time = dateNow - this.animationStart ;
		if (this.starIntensityFactor && this.animationCycle && this.animationStart) {
			this.drawTwinkle(time);
		}

		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, );
		c.fill();
	}
}


//--------Standaard functies--------

const animation = () => {
	requestAnimationFrame(animation);
	var grd = c.createLinearGradient(0, 0, 0, (canvas.height * 100) / 30);
	grd.addColorStop(0, '#17384D');
	grd.addColorStop(1, '#246880');
	c.fillStyle = grd;


	c.fillRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < totalSmallStars; i++) {
		smallStarList[i].draw();
	}
	for (i = 0; i < totalBigStars; i++) {
		bigStarList[i].draw();
	}

	for (i = 0; i < twinkleStarList.length; i++) {
		twinkleStarList[i].draw();
	}
}

const init = () => {
	//genereer kleine sterren
	for (i = 0; i < totalSmallStars; i++) {
		var x = Math.random() * (canvas.width);
		var y = Math.random() * (canvas.height);
		var radius = Math.random() * maxSmallStarRadius + 0.1;
		const time = new Date();
		smallStarList[i] = new Star(x, y, radius, { animationCycle: 800, starIntensityFactor: 1.05, animationStart: time.getTime(), twinklePause: 1000000000000000000});
	}

	//genereer grote sterren
	for (i = 0; i < totalBigStars; i++) {
		var x = Math.random() * (canvas.width);
		var y = Math.random() * (canvas.height);
		var radius = Math.random() * (maxBigStarRadius - maxSmallStarRadius) + maxBigStarRadius + 0.1;
		bigStarList[i] = new Star(x, y, radius);
	}

	//genereer grote sterren
	for (i = 0; i < 10 ; i++) {
		var x = Math.random() * (canvas.width);
		var y = Math.random() * (canvas.height);
		var radius = Math.random() * (maxBigStarRadius - maxSmallStarRadius) + maxBigStarRadius + 0.1;
		const time = new Date();
		twinkleStarList[i] = new Star(x, y, radius, { animationCycle: 400, starIntensityFactor: 1.2, animationStart: time.getTime(), twinklePause: 10000000});
	}
}


//--------initialisatie--------

init();
animation();