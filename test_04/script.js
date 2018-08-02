//点击按钮
	function submitBtn(){
		var part = document.getElementById("part1");
		var btn = document.getElementById("submit-btn");
		var txt = document.getElementById("name");
		btn.onclick = function(){				
			var para = document.createElement("p");
			para.textContent = txt.value;
			part.appendChild(para);
			console.log(txt.value);
		}
		txt.onkeydown = function(){
			if(event.keyCode == 13){
				var para = document.createElement("p");
				para.textContent = txt.value;
				part.appendChild(para);
				console.log(txt.value);
			} else if (event.keyCode == 27){
				txt.value = "";
			}
		}
	}
	submitBtn();

	//控制元素的现实及隐藏
	function displayElement(){
		var schoolRadio = document.querySelector("#school");
		var companyRadio = document.querySelector("#company");

		var schoolSelect = document.querySelector("#school-select");
		var companySelect = document.querySelector("#company-select");

		schoolRadio.addEventListener("click", function(){
			schoolSelect.style.cssText = "display:block";
			companySelect.style.cssText = "display:none";
		});

		companyRadio.addEventListener("click", function(){
			schoolSelect.style.cssText = "display:none";
			companySelect.style.cssText = "display:block";
		});

	}

	displayElement();


//事件代理
function listBackgroundColor(){
	var ul = document.querySelector(".palette");
	var para = document.querySelector(".color-picker");

	ul.onmouseover = function(event){
		var event = event || window.event;
		var target = event.target || event.srcElement;

		if(target.nodeName.toLowerCase() == "li"){
			var bgcolor = target.style.backgroundColor;
			para.textContent = bgcolor;
			para.style.color = bgcolor;
		}
	};
}
listBackgroundColor();	

//淡入淡出
var fadeBtn = document.getElementById("fade-btn");
var fadeObj = document.getElementById("fade-obj");
var x= 1;
var myDIV;

fadeBtn.onclick = function(){
	myDIV = setTimeout(shallowOut,100);
}

function shallowOut(){
	fadeBtn.disabled = true;
	x = x- 0.1;	
	fadeObj.style.opacity = x;
	
	if(x<1 && x>=0){
		setTimeout(shallowOut,100);
	} else {
		clearTimeout(myDIV);
		fadeBtn.innerHTML = "淡入";
		fadeBtn.disabled = false;
		fadeBtn.addEventListener("click", shallowIn);
	}
}

function shallowIn(){
	fadeBtn.disabled = true;
	x += 0.1;
	fadeObj.style.opacity = x;

	if(x>0 && x<=1){
		setTimeout(shallowIn,100);
	} else {
		clearTimeout(myDIV);
		fadeBtn.innerHTML = "淡出";
		fadeBtn.disabled = false;
		fadeBtn.addEventListener("click", shallowOut);
	}
}

//erikface
window.onload = function(){
	var smile = document.getElementById("erikface");
	var y = 0;

	function erikface(){
		smile.style.backgroundPositionY = "-" + y + "px";

		if(y>8160){
			y = 480;
		} else {
			y += 480;
		}
	}

	setInterval(erikface,100);
}









	

		
	













