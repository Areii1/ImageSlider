var currentImageIndex = 0;
var nextImageIndex;
var imageSlides = document.getElementsByTagName('li');
var imageCount = imageSlides.length;

fadeIn(document.getElementById('img0'));

function isLastImage() {
	return currentImageIndex == imageCount - 1;
}

function isFirstImage() {
	return currentImageIndex == 0;
}

document.getElementById('next-button').addEventListener('click', function() {
    if (isLastImage()) {
		nextImageIndex = 0;
	}
	else {
   		nextImageIndex = currentImageIndex + 1;
	}
	renderImage();

	if (isLastImage()) {
		currentImageIndex = 0;
	}
	else {
		currentImageIndex++;
	}
	
});

document.getElementById('previous-button').addEventListener('click', function() {
    if (isFirstImage()) {
		nextImageIndex = imageCount - 1;
	}
	else {
   		nextImageIndex = currentImageIndex - 1;
	}
	renderImage();

	if (isFirstImage()) {
		currentImageIndex = imageCount - 1;
	}
	else {
		currentImageIndex--;
	}
});

function renderImage() {
	fadeOut(document.getElementById('img' + currentImageIndex));
	fadeIn(document.getElementById('img' + nextImageIndex));
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 20);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 20);
}

