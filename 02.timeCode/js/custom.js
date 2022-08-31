$(document).ready(function(){

	const timer = setInterval(function(){

		// 변수에 시간 데이터 저장
		const now = new Date();
		const hr = now.getHours();
		const min = now.getMinutes();
		const sec = now.getSeconds();

		// 시간이 한자리 숫자일 때 앞에 0 붙이기
		
		if ( hr >= 10 ) {
			hNum = hr;
		} else {
			hNum = '0'+hr;
		};
		if ( min >= 10 ) {
			mNum = min;
		} else {
			mNum = '0'+min;
		};
		if ( sec >= 10 ) {
			sNum = sec;
		} else {
			sNum = '0'+sec;
		};
	
		// 태그안에 시간데이터 출력
		$('p span').eq(0).text(hNum);
		$('p span').eq(1).text(mNum);
		$('p span').eq(2).text(sNum);

	}, 1000);

	// 시간에 맞는 테마를 자동으로 연결

	const now = new Date();
	const hr = now.getHours();

	if ( hr >= 5 && hr < 11 ) {
		$('div#wrap').removeClass();
		$('div#wrap').addClass('morning');
		$('nav li').removeClass();
		$('nav li').eq(0).addClass('on');
	} else if ( hr >= 11 && hr < 16 ) {
		$('div#wrap').removeClass();
		$('div#wrap').addClass('afternoon');
		$('nav li').removeClass();
		$('nav li').eq(1).addClass('on');
	} else if ( hr >= 16 && hr < 20 ) {
		$('div#wrap').removeClass();
		$('div#wrap').addClass('evening');
		$('nav li').removeClass();
		$('nav li').eq(2).addClass('on');
	} else if ( hr >= 20 || hr < 5 ) {
		$('div#wrap').removeClass();
		$('div#wrap').addClass('night');
		$('nav li').removeClass();
		$('nav li').eq(3).addClass('on');
	}

	// nav 버튼 클릭시 강제 변환
	$('nav li').click(function(){
		let className = $(this).children('a').text();
		$('nav li').removeClass();
		$(this).addClass('on');
		$('div#wrap').removeClass();
		$('div#wrap').addClass(className);
	});

});