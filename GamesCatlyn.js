
var ws = new WebSocket('ws://' + "zockerlot.de:8000" + '/ws');

document.addEventListener("DOMContentLoaded", function () {
	window.setTimeout(startGame, 200);
})

function startGame(event) {
	document.getElementById("essen").addEventListener("click", essen);
	document.getElementById("spiel").addEventListener("click", spiel);
	document.getElementById("putzen").addEventListener("click", putzen);
	document.getElementById("ersteHilfe").addEventListener("click", leben);
	
	aktuell()
	almaBackground()

	//EventListener
	ws.addEventListener('message', function (e) {
		var msg = JSON.parse(e.data);

		var kot = msg.kot;
		document.getElementById("leben").innerHTML = (msg.leben / 100) + '%';
		document.getElementById("spielen").innerHTML = (msg.spiel / 100) + '%';
		document.getElementById("hunger").innerHTML = (msg.hunger / 100) + '%';

		var LebenString = msg.leben.toString();
		var ZustandString;

		if (LebenString == "Tod") {
			ZustandString = "ist tod";
			document.getElementById("almaBild").setAttribute("src", "http://der-fallende-planet.dd-dns.de/bilderte/almat.png");
		} else {
			if (msg.hunger >= 3000) {
				ZustandString = "ist hungrig";
			} else {
				ZustandString = "ist zufrieden";
			}
		}

		if (kot == false) {
			document.getElementById("schmutzig").innerHTML = '100%';
			ZustandString = ZustandString + " und dreckig";
		} else {
			document.getElementById("schmutzig").innerHTML = '0%';
		}

		document.getElementById("zustand").innerHTML = ZustandString + ".";
		balkenUpdate()
	});
}

function almaBackground(event) {
	Heute = new Date();
	Stunde = Heute.getHours();
	Minute = Heute.getMinutes();
	Sekunde = Heute.getSeconds();
	var dayLightValue = 255 - Math.pow(Math.abs(Stunde - 12), 2.5);
	document.getElementById("almaBild").style.background = "rgb(" + dayLightValue + ", " + dayLightValue + ", " + dayLightValue + ")";
	document.querySelector(".game").style.background = "rgb(" + dayLightValue + ", " + dayLightValue + ", " + dayLightValue + ")";
}

function essen(event) {
	if (ws.readyState == 1) {
		ws.send(JSON.stringify({
				hunger: "1",
				username: "essen"
			}));
		document.getElementById("almaBild").setAttribute("src", "Pictures/Dankdirkatze_feeding.png");
	} else {
		window.setTimeout(essen, 200);
	}
}

function spiel(event) {
	if (ws.readyState == 1) {
		ws.send(JSON.stringify({
				spiel: "1"
			}));
		document.getElementById("almaBild").setAttribute("src", "Pictures/Dankdirkatze_playing.png");
	} else {
		window.setTimeout(spiel, 200);
	}
}

function putzen(event) {
	if (ws.readyState == 1) {
		ws.send(JSON.stringify({
				kot: true,
				username: "putzen"
			}));
		document.getElementById("almaBild").setAttribute("src", "Pictures/Dankdirkatze_cleaning.png");
	} else {
		window.setTimeout(putzen, 200);
	}
}

function leben(event) {
	if (ws.readyState == 1) {
		ws.send(JSON.stringify({
				leben: "1",
				username: "leben"
			}));
		document.getElementById("almaBild").setAttribute("src", "Pictures/Dankdirkatze.png");
	} else {
		window.setTimeout(leben, 200);
	}
}

function balkenUpdate(event) {
	balkenWidth = document.getElementsByClassName("balken")
	for (var i = 0; i < balkenWidth.length; i++) {
		w = balkenWidth[i].innerText
		balkenWidth[i].setAttribute("style", "width :" + w)
	}
}

function aktuell(event) {
	if (ws.readyState == 1) {
		ws.send(JSON.stringify({
				username: "test"
			}));
		window.setTimeout(aktuell, 5000);
	} else {
		window.setTimeout(aktuell, 200);
	}
}
