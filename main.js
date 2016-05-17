var currentImageIndex = 0;
var nextImageIndex;
var imageCount = document.getElementsByTagName('li').length;

fadeIn(document.getElementById('img0'));

document.getElementById('next-button').addEventListener('click', function() {
    if (isCurrentImageLast()) {
		renderImage(0);
		currentImageIndex = 0;
	}
	else {
   		renderImage(currentImageIndex + 1);
   		currentImageIndex++;
	}
});

function isCurrentImageLast() {
	return currentImageIndex == imageCount - 1;
}

document.getElementById('previous-button').addEventListener('click', function() {
    if (isCurrentImageFirst()) {
		renderImage(imageCount - 1);
		currentImageIndex = imageCount - 1;
	}
	else {
   		renderImage(currentImageIndex - 1);
   		currentImageIndex--;
	}
});

function isCurrentImageFirst() {
	return currentImageIndex == 0;
}

function renderImage(nextImage) {
	fadeOut(document.getElementById('img' + currentImageIndex));
	fadeIn(document.getElementById('img' + nextImage));
}

function fadeIn(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 20);
}

function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 20);
}