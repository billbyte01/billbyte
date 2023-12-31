let color = 'white'

const button = document.getElementById('dark_mode')

button.addEventListener('click', function () {
	// using ternary operators: color = color === 'white' ? 'black' : 'white';
	if (color === 'white') {
		color = 'black'
	} else {
		color = 'white'
	}
	document.body.style.background = color
	// document.body.classList.toggle('color')
	// when in .css file we have .color{background: black;}
})

const msgStatus = document.querySelector('.msg-status')

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'message sent'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
} else if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'message not sent'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}
