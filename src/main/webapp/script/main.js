// script : 묘사하다, 서술하다, 설명하다 (=손글씨)
// javascript : HTML, CSS를 조작/제어하는 언어 [client-side + server-side]
// tomcat vs nodeServer(=Express)
 
// (무언가를) 클릭하면 (나타나있는 모달) 팝업을 숨겨준다(=감춘다)
// (무언가를) 클릭하면 (숨겨져있던 모달) 팝업을 보여준다(=노출한다)
// 자바스크립트 변수 선언 : const(=상수), let/var(변수)

const news = document.querySelector("#opener");	// js + id Selector > class Selector
const modal = document.querySelector("#layer_popup");
const closeBtn = document.querySelector(".btn-close");
const body = document.querySelector("body");





news.addEventListener("click", function() {
	console.log("모달을 보여줘");	//console 탭에 내용 출력
	modal.classList.add("show");	//modal에 show라는 클래스를 추가
})

closeBtn.addEventListener("click", function() {
	console.log("모달을 보여줘");	//console 탭에 내용 출력
	modal.classList.remove("show");	//modal에 show라는 클래스를 추가
})

let isMobile = false;	// 지금 상태가 모바일 모드인가? 아니오~false

/*window.addEventListener("resize", function(){
	if(this.matchMedia("max-width: 480px").matches) {
		isMobile = true;	
		console.log("11111");
		
	}
})*/