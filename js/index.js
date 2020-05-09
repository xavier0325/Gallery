//页面加载完才轮播
var timer;

function init() {
	timer = setInterval(changeImg, 2000);
	return timer;
}
// 数组存储图片路径
var pathImgArr = new Array(
	"img/before.jpg",
	"img/pikaqiu.png",
	"img/QQ图片20200422211935.jpg",
	"img/QQ图片20200422212107.jpg",
	"img/QQ图片20200423193313.jpg"
);
// 自动换图
var i = 0;
var page; //表示当前页
function changeImg() {
	var myImg = document.getElementById("myImg");
	var countPage = document.getElementById("pagecount");
	i++;
	if (i >= pathImgArr.length) {
		i = 0;
	}
	myImg.src = pathImgArr[i];
	countPage.innerText = i + 1;
	page = i;
}
//上一张图片
function preImg() {
	var myImg = document.getElementById("myImg");
	var countPage = document.getElementById("pagecount");
	i--;
	if (i < 0) {
		i = pathImgArr.length - 1;
	}
	myImg.src = pathImgArr[i];
	countPage.innerText = i + 1;
	page = i;
}
//下一张图片
function nextImg() {
	changeImg();
}

//处理图片文字部分
function showText() {
	var textImg = document.getElementById("textImg");
	var myImg = document.getElementById("myImg");
	textImg.setAttribute("style", "transform: translateY(-150px);");
	myImg.setAttribute("style", "transform: scale(1.2);");
	clearInterval(timer);
	setText();
}

function hideText() {
	var textImg = document.getElementById("textImg");
	var myImg = document.getElementById("myImg");
	textImg.setAttribute("style", "transform: translateY(150px);");
	myImg.setAttribute("style", "transform: scale(1);");
	init();
}
var textTitleArr = new Array(
	"wcy的画廊",
	"皮卡丘:pika~pika~",
	"镜中的你",
	"宿舍的你",
	"抖音特效的你"
);
var textMainArr = new Array(
	"QWQ,这是什么呀~",
	"OVO,这是皮卡丘带来的定制画廊~",
	"镜花水月,琉璃千盏",
	"宿曦之灵,婆娑羽翎",
	"斗转星云,霓裳舞裙"
);

function setText() {
	var textTitle = document.getElementById("textTitle");
	var textMain = document.getElementById("textMain");
	textTitle.innerText = textTitleArr[page]; //用到之前的全局变量page
	textMain.innerText = textMainArr[page];
}
