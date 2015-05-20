function loadPeople() {
	$.getJSON("/people", function (data) {
		console.log(data);
	});
}

function loadPeopleHtml() {
	// Long-Hand
	$.ajax('/peopleHTML', {
		success: function (data) {
			document.getElementById('baseballPlayers').innerHTML = data;
		}
	});

	// short-hand
	// $.get('/peopleHTML', function (data) {
	// 	document.getElementById('baseballPlayers').innerHTML = data;
	// });
}

function loadError() {
	// Long-Hand
	$.ajax('/peopleFail', {
		success: function (data) {
			document.getElementById('baseballPlayers').innerHTML = data;
		},
		error: function (data) {
			document.getElementById('baseballPlayers').innerHTML = '';
			alert('There was a problem communicating with the server.');
		}
	});

	// short-hand
	// $.get('/peopleFail', function (data) {
	// 	document.getElementById('baseballPlayers').innerHTML = data;
	// })
	// .fail(function () {
	// 	document.getElementById('baseballPlayers').innerHTML = '';
	// 	alert('There was a problem communicating with the server.');
	//
	// });
}
