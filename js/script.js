document.addEventListener('DOMContentLoaded', function () {
	var trigger = document.getElementById('trigger')
	var dropdown = document.getElementById('dropdown')

	trigger.addEventListener('click', function () {
		dropdown.style.display =
			dropdown.style.display === 'block' ? 'none' : 'block'
	})

	document.addEventListener('click', function (event) {
		if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
			dropdown.style.display = 'none'
		}
	})
})

///////////////////////////

ymaps.ready(init)
function init() {
	var myMap = new ymaps.Map('map', {
		center: [39.351146, -76.677417],
		zoom: 18,
	})

	myMap.controls.add('zoomControl')
	myMap.controls.add('typeSelector')
	myMap.controls.add('fullscreenControl')
	myMap.controls.add('geolocationControl')

	var myPlacemark = new ymaps.Placemark([39.351146, -76.677417], {
		hintContent: 'Evergreen !',
		balloonContent: 'Maple avenue',
	})

	myMap.geoObjects.add(myPlacemark)
}

///////////////////////////

document.getElementById('openModal').addEventListener('click', function () {
	document.getElementById('myModal').style.display = 'block'
})

var modal = document.getElementById('myModal')
var closeButton = document.getElementsByClassName('close')[0]
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}
closeButton.onclick = function () {
	modal.style.display = 'none'
}
