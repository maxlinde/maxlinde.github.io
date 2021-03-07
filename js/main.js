window.addEventListener('scroll', function() {
	var scroll = document.querySelector('.scroll_to_top');
	scroll.classList.toggle("active", window.scrollY > 500)
})

function scroll_top() {
	window.scrollTo({
		top: 0,
		behaviour: 'smooth'
	})
}

