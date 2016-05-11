var currentImageOrderNumber = 0;
document.getElementById('img1').style.display = 'block';
document.getElementById('img2').style.display = 'none';
document.getElementById('img3').style.display = 'none';

document.getElementById("nextButton").addEventListener("click", function(){
    nextImage(currentImageOrderNumber);
    currentImageOrderNumber++;
});

function nextImage(currentImageOrderNumber) {
	if (currentImageOrderNumber == 0) {
		document.getElementById('img1').style.display = 'none';
		document.getElementById('img2').style.display = 'block';
		document.getElementById('img3').style.display = 'none';
	}
	else if (currentImageOrderNumber == 1) {
		document.getElementById('img1').style.display = 'none';
		document.getElementById('img2').style.display = 'none';
		document.getElementById('img3').style.display = 'block';
	}
	console.log(currentImageOrderNumber);
}
