var rCho, rJung, rJong;
var sentence = []; //문장

function setup() {
  createCanvas(400, 400);

  rCho = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  rJung = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  rJong = [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  speak();
}

function draw() {}

function sst() {
 
}

function speak() {
  j =0;
  var cho, jung, jong;
  sentence = "우리는 할 수 있다.";
  console.log(sentence);
  for (var i = 0; i < sentence.length-1; i++) {
    if (sentence[i] === " ") {
      // console.log("It is space");
    } else {
      // console.log(sentence[i]);
      var nTmp = sentence[i].charCodeAt(0) - 0xac00;
      // print(nTmp);
      jong = nTmp % 28; // 종성
      jung = ((nTmp - jong) / 28) % 21; // 중성
      cho = ((nTmp - jong) / 28 - jung) / 21; // 종성
      print(rCho[cho]+rJung[jung]+rJong[jong]);
      
    }
  }
}
