// processing convert to p5

let charIdx = 0;
let font;
let fontBG, mountainsBG;
const sentenceArray = [];
const article = [
'碧雲天 黄葉地', '秋色連波 波上寒煙翠',
'山映斜陽天接水','芳草無情 更在斜陽外',
'       蘇幕遮・節選'
]

function preload() {
  font = loadFont('衡山毛行.ttf');
}

function setup(){
	
		createCanvas(600, 600);
		smooth();
		colorMode(RGB, 255);
    frameRate(60);
	
		fontBG = createGraphics(600, 600);
  		mountainsBG = createGraphics(600, 600);
	
		// static BG
		drawMT(mountainsBG);
		image(mountainsBG, 0, 0, 600, 600);
	
  	fontBG.textFont(font);

    for(let i=0; i < article.length; i++){
			sentenceArray[i] = new Sentence(article[i], (450 - i*100), 100, i, charIdx);
			sentenceArray[i].formSentence();
			charIdx += sentenceArray[i].count;
    }
}


function draw() {
	image(fontBG, 0, 0, 600, 600);
  for(let sentence of sentenceArray){
      sentence.draw(fontBG);
  }
}