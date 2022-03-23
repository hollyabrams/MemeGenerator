document.addEventListener('DOMContentLoaded', function() {
	const memeForm = document.getElementById('meme-form');
	const listGallery = document.querySelector('.gallery');

	memeForm.addEventListener('submit', function(event) {
		event.preventDefault();

		// creating the li image elements
		const memeLi = document.createElement('li');
		memeLi.classList.add('meme-img');

		// creating the gallery
		const urlInput = document.getElementById('uploaded-img').value,
			src = urlInput,
			img = document.createElement('img');
		img.src = src;

		// adding text to the top of the div
		const topTextDiv = document.createElement('div');
		topTextDiv.classList.add('text', 'top');
		topTextDiv.innerText = document.getElementById('text-top').value;

		// adding text to the bottom of the div
		const bottomTextDiv = document.createElement('div');
		bottomTextDiv.classList.add('text', 'bottom');
		bottomTextDiv.innerText = document.getElementById('text-bottom').value;

		// remove div
		const removeDiv = document.createElement('div');
		removeDiv.classList.add('red-cross');
		removeDiv.innerText = 'X';
		removeDiv.style.color = 'darkred';

		listGallery.appendChild(memeLi);
		memeLi.appendChild(img);
		memeLi.appendChild(topTextDiv);
		memeLi.appendChild(bottomTextDiv);
		memeLi.appendChild(removeDiv);

		memeForm.reset();
	});

	function remove(event) {
		event.target.parentNode.remove();
	}

	listGallery.addEventListener('click', remove, false);
});
