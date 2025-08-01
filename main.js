const players = [
  { "number": "00", "name": "ゲラ" },
  { "number": "0", "name": "木浪聖也" },
  { "number": "1", "name": "森下翔太" },
  { "number": "2", "name": "梅野隆太郎" },
  { "number": "3", "name": "大山悠輔" },
  { "number": "4", "name": "熊谷敬宥" },
  { "number": "5", "name": "近本光司" },
  { "number": "8", "name": "佐藤輝明" },
  { "number": "12", "name": "坂本誠志郎" },
  { "number": "13", "name": "岩崎優" },
  { "number": "14", "name": "岩貞祐太" },
  { "number": "15", "name": "西純矢" },
  { "number": "16", "name": "西勇輝" },
  { "number": "18", "name": "伊原陵人" },
  { "number": "19", "name": "下村海翔" },
  { "number": "20", "name": "デュプランティエ" },
  { "number": "24", "name": "工藤泰成" },
  { "number": "25", "name": "渡邉諒" },
  { "number": "26", "name": "椎葉剛" },
  { "number": "27", "name": "伊藤将司" },
  { "number": "28", "name": "今朝丸裕喜" },
  { "number": "29", "name": "高橋遥人" },
  { "number": "30", "name": "門別啓人" },
  { "number": "31", "name": "早川太貴" },
  { "number": "32", "name": "井上広大" },
  { "number": "33", "name": "糸原健斗" },
  { "number": "34", "name": "漆原大晟" },
  { "number": "35", "name": "才木浩人" },
  { "number": "36", "name": "畠世周" },
  { "number": "37", "name": "及川雅貴" },
  { "number": "38", "name": "小幡竜平" },
  { "number": "39", "name": "榮枝裕貴" },
  { "number": "40", "name": "井坪陽生" },
  { "number": "41", "name": "村上頌樹" },
  { "number": "42", "name": "ネルソン" },
  { "number": "43", "name": "町田隼乙" },
  { "number": "44", "name": "戸井零士" },
  { "number": "45", "name": "佐野大陽" },
  { "number": "46", "name": "島本浩也" },
  { "number": "47", "name": "桐敷拓馬" },
  { "number": "48", "name": "茨木秀俊" },
  { "number": "49", "name": "大竹耕太郎" },
  { "number": "50", "name": "富田蓮" },
  { "number": "51", "name": "中野拓夢" },
  { "number": "52", "name": "山田脩也" },
  { "number": "53", "name": "島田海吏" },
  { "number": "54", "name": "木下里都" },
  { "number": "55", "name": "楠本泰史" },
  { "number": "56", "name": "百崎蒼生" },
  { "number": "57", "name": "長坂拳弥" },
  { "number": "58", "name": "前川右京" },
  { "number": "59", "name": "藤田健斗" },
  { "number": "60", "name": "小野寺暖" },
  { "number": "61", "name": "豊田寛" },
  { "number": "62", "name": "植田海" },
  { "number": "63", "name": "石黒佑弥" },
  { "number": "64", "name": "岡留英貴" },
  { "number": "65", "name": "湯浅京己" },
  { "number": "66", "name": "津田淳哉" },
  { "number": "67", "name": "高寺望夢" },
  { "number": "68", "name": "中川勇斗" },
  { "number": "69", "name": "石井大智" },
  { "number": "82", "name": "ハートウィグ" },
  { "number": "85", "name": "ドリス" },
  { "number": "94", "name": "原口文仁" },
  { "number": "95", "name": "ヘルナンデス" },
  { "number": "97", "name": "野口恭佑" },
  { "number": "98", "name": "佐藤蓮" },
  { "number": "99", "name": "ビーズリー" },
  { "number": "120", "name": "森木大智" },
  { "number": "121", "name": "鈴木勇斗" },
  { "number": "122", "name": "小川一平" },
  { "number": "123", "name": "松原快" },
  { "number": "125", "name": "伊藤稜" },
  { "number": "126", "name": "福島圭音" },
  { "number": "128", "name": "嶋村麟士朗" },
  { "number": "130", "name": "川崎俊哲" },
  { "number": "131", "name": "ベタンセス" },
  { "number": "132", "name": "マルティネス" },
  { "number": "133", "name": "アルナエス" },
  { "number": "134", "name": "コンスエグラ" },
];

let score = 0;
let timeLeft = 60;
let timerId;
let currentQuestion = null;

const startBtn = document.getElementById("startBtn");
const timerDiv = document.getElementById("timer");
const scoreDiv = document.getElementById("score");
const questionDiv = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const judgeDiv = document.getElementById("judge");
const resultDiv = document.getElementById("result");
const shareDiv = document.getElementById("share");
const shareLink = document.getElementById("shareLink");

startBtn.addEventListener("click", () => {
  clearInterval(timerId);
  score = 0;
  timeLeft = 60;
  scoreDiv.textContent = `得点: ${score}`;
  timerDiv.textContent = `残り時間: ${timeLeft}秒`;
  resultDiv.style.display = "none";
  shareDiv.style.display = "none";

  timerDiv.style.display = "block";
  scoreDiv.style.display = "block";
  questionDiv.style.display = "block";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";

  nextQuestion();

  timerId = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `残り時間: ${timeLeft}秒`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
});

btn1.addEventListener("click", () => handleAnswer(btn1.textContent));
btn2.addEventListener("click", () => handleAnswer(btn2.textContent));

function nextQuestion() {
  const correct = players[Math.floor(Math.random() * players.length)];
  let wrong;
  do {
    wrong = players[Math.floor(Math.random() * players.length)];
  } while (wrong.number === correct.number);

  currentQuestion = correct;
  questionDiv.textContent = `${correct.name} の背番号は？`;

  const isFirst = Math.random() < 0.5;
  btn1.textContent = isFirst ? correct.number : wrong.number;
  btn2.textContent = isFirst ? wrong.number : correct.number;

  btn1.disabled = false;
  btn2.disabled = false;
}

function handleAnswer(selected) {
  btn1.disabled = true;
  btn2.disabled = true;

  const isCorrect = selected === currentQuestion.number;
  showJudge(isCorrect);
  score += isCorrect ? 1 : -1;
  scoreDiv.textContent = `得点: ${score}`;

  setTimeout(() => {
    nextQuestion();
  }, 600);
}

function showJudge(isCorrect) {
  judgeDiv.style.display = "block";
  judgeDiv.textContent = isCorrect ? "⭕️" : "❌️";
  judgeDiv.style.color = isCorrect ? "green" : "red";
  setTimeout(() => {
    judgeDiv.style.display = "none";
  }, 500);
}

function endGame() {
  questionDiv.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  resultDiv.style.display = "block";
  resultDiv.textContent = `あなたのスコア: ${score} 点`;

  const tweet = `TIGERS NUMBER QUIZ 2025\nスコア: ${score} 点\n#阪神タイガース\n #クイズ\n\nhttps://tigers-q.kkpwebninja.com/?v=2\n\n@kkp_webninja`;
  shareLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  shareDiv.style.display = "block";
}
