var currentImageIndex = 0;
var imageSlides = document.getElementsByTagName('li');
var imageCount = imageSlides.length;

renderImage(currentImageIndex);

document.getElementById('next-button').addEventListener('click', function() {
    if (currentImageIndex == imageCount - 1) {
		currentImageIndex = 0;
	}
	else {
   		currentImageIndex++;	
	}
	renderImage(currentImageIndex);
});

document.getElementById('previous-button').addEventListener('click', function() {
    if (currentImageIndex == 0) {
		currentImageIndex = imageCount - 1;
	}
	else {
   		currentImageIndex--;	
	}
	renderImage(currentImageIndex);
});

function renderImage(currentImageIndex) {
	for (var i = 0; i < imageCount; i++) {
		if (i == currentImageIndex) {
			fadeIn(document.getElementById('img' + i));
		}
		else {
			document.getElementById('img' + i).style.display = 'none';
		}
	}
}

function fadeIn(element) {
	element.style.opacity = '0';
	element.style.display = 'block';

	for (var i = 0; i <= 100; i++) {
		(function(index) {
			setTimeout(function() {
				element.style.opacity = index/100;
			}, index * 5);
		})(i);
	}
}

function fadeOut() {}