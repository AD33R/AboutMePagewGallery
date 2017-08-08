alert("hello world!");
console.log("secret msg");
function change(){
	document.getElementById('el').innerHTML ="You Clicked";
}

var first = 100;
var second = 200;
console.log( first + second);

function addText(){
	var string1 = document.getElementById('string1').value;
	var string2 = document.getElementById('string2').value;
	document.getElementById('result').innerHTML=string1 + string2;

}

var MyInfo = {
	First: 'Adam', 
	Last: 'Deer', 
	Birth: 'March19',
	Interests:["hockey", "internetz", "dogs"]
};

var MyInterest = ["hockey", "internetz", "dogs"];

console.log(MyInfo['Last']);
console.log(MyInterest[1]);
console.log(MyInterest[0], MyInfo['First']);
console.log(MyInterest[2], MyInfo['Birth']);
console.log(MyInfo.Interests[1]);

