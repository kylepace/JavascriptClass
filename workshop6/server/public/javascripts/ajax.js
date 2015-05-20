function loadPeople() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/people", true);

	// this is why it's crappy
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log(JSON.parse(xmlhttp.responseText));
		}
	};

	xmlhttp.send();
}

function loadPeopleHtml() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/peopleHTML", true);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('baseballPlayers').innerHTML = xmlhttp.responseText;
		}
	};

	xmlhttp.send();
}

// Demo second time through
function loadError() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/peopleFail", true);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				document.getElementById('baseballPlayers').innerHTML = xmlhttp.responseText;
			} else {
				document.getElementById('baseballPlayers').innerHTML = '';
				alert('There was a problem communicating with the server.');
			}
		}
	};

	xmlhttp.send();
}
