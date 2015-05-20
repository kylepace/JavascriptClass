$(function () {
	$.get('/selectlist', function (data) {
		document.getElementById('baseballPlayers').innerHTML = data;
	});
});
