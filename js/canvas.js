const canvas = document.getElementById('canvas')
var c = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//--------Variables--------

const starRatio = 0.0007; //aantal sterren per vierkante pixel

const maxBigStarRadius = 1.5;
const bigStarGlow = 100; //Hoe neig een grote ster maximaal kan schijnen
const maxBigTwinkleSpeed = 100; //Hoe snel een grote ster zal twinkelen

const maxSmallStarRadius = 1;
const smallStarGlow = 20;
const maxSmallTwinkleSpeed = 800;

const twinkleAnimationSpeed = 0.02;

const oppScreen = canvas.width * canvas.height;
const totalSmallStars = starRatio * oppScreen;
const totalBigStars = totalSmallStars / 100;

const smallStarList = []
const bigStarList = []

let beeldScale = canvas.width / 1300;

const fadeSpeed = 0.005;

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
	constructor (x, y, radius, maxGlow, twinkleSpeed) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.kleur = 'white';
	
		this.maxGlow = maxGlow;
		this.twinkleGlow = maxGlow; //is eigenlijk de actuele glow, initieel gelijk aan maximale glow
		this.twinkleSpeed = twinkleSpeed
		this.twinklecounter = 0;
	
		this.opacity = 1.0;
	}

	draw() {
		c.beginPath();
		c.fillStyle = this.kleur;

		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, );
		c.fill();
	}
}


//--------Standaard functies--------

const animation = () => {
	requestAnimationFrame(animation);
	var grd = c.createLinearGradient(0, 0, 0, (canvas.height * 75) / 100);
	grd.addColorStop(0, '#00001a');
	grd.addColorStop(1, '#003333');
	c.fillStyle = grd;

	c.fillRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < totalSmallStars; i++) {
		smallStarList[i].draw();
	}
	for (i = 0; i < totalBigStars; i++) {
		bigStarList[i].draw();
	}
	// c.drawImage("../images/bg.png", 0, 0)
	const imgBg = new Image()
	imgBg.src = "./images/bg.png"
	c.drawImage(imgBg, 0, canvas.height - imgBg.height/bgPositionFactor)

	const imgFg = new Image()
	imgFg.src = "./images/fg.png"
	c.drawImage(imgFg, 0, canvas.height - imgFg.height/fgPositionFactor)
}

const init = () => {
	//genereer kleine sterren
	for (i = 0; i < totalSmallStars; i++) {
		var x = Math.random() * (canvas.width);
		var y = Math.random() * (canvas.height);
		var radius = Math.random() * maxSmallStarRadius + 0.1;
		var twinkleSpeed = Math.random() * maxSmallTwinkleSpeed + 30;
		smallStarList[i] = new Star(x, y, radius, smallStarGlow, twinkleSpeed);
	}
	//genereer grote sterren
	for (i = 0; i < totalBigStars; i++) {
		var x = Math.random() * (canvas.width);
		var y = Math.random() * (canvas.height);
		var radius = Math.random() * (maxBigStarRadius - maxSmallStarRadius) + maxBigStarRadius + 0.1;
		var twinkleSpeed = Math.random() * (maxBigTwinkleSpeed - maxSmallTwinkleSpeed) + maxBigTwinkleSpeed;
		/*bigStarList[i] = new Star(x, y, radius, bigStarGlow, twinkleSpeed );*/
		bigStarList[i] = new Star(x, y, radius, bigStarGlow, twinkleSpeed);
	}
}


//--------initialisatie--------

init();
animation();