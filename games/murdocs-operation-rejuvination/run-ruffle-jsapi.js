function fillGame() {
	const ruffle = window.RufflePlayer.newest();
	const player = ruffle.createPlayer();
	const container = document.getElementById('container');
	container.appendChild(player);
	player.load({
		url: swfName,
		allowScriptAccess: true
	}).then(() => {
		console.info("Ruffle successfully loaded the file");
	}).catch((e) => {
		console.error(`Ruffle failed to load the file: ${e}`);
	});
	player.addEventListener('loadedmetadata', () => {
		console.info(player.metadata);
	})
}
if (document.readyState != 'loading') {
	fillGame();
} else {
	document.addEventListener("DOMContentLoaded", fillGame)
}

function Trackit(a, b, c, d, e, f, g)
  {
    // tracking is so cringe
    // but if i don't put this in
    // console throws an err'r
	console.log(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e + "\n" + f + "\n" + g);
	return;
  }
