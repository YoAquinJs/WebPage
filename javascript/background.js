let mouseMoved = false
let initMouseX = 0
let initMouseY = 0

document.addEventListener("mousemove", parallax)
function parallax(e){
	if (!mouseMoved){
		initMouseX = e.pageX
		initMouseY = e.pageY
		mouseMoved = true
	}
	this.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x = ((window.innerWidth - (e.pageX - initMouseX)*speed) / 100)
		const y = ((window.innerHeight - (e.pageY - initMouseY)*speed) / 100)

		layer.style.transform = `translateX(${x - 11}px) translateY(${y - 7}px)`
	})
}