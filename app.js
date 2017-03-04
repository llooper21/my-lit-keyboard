document.body.addEventListener('keydown',getID)

function getID(e) {
	console.log(e.key);
	var ids = document.getElementById(e.key);
	if (e.key === "Shift") {
		ids = document.getElementById(e.code)
	};
	//console.log(ids);
	ids.classList.add('active');
	document.getElementById('cat').play();
}

document.body.addEventListener('keyup',getId)

function getId(e) {
	console.log(e.key);
	var ids = document.getElementById(e.key);
	if (e.key === "Shift") {
		ids = document.getElementById(e.code)
	};
	//console.log(ids);
	ids.classList.remove('active');
	document.getElementById('cat').pause();
}

function reset(){  
  document.getElementById('ta').value = "";
}