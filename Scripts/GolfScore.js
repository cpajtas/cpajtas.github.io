function isOther() {
	if (document.getElementById('other').checked) {
		document.getElementById('other_rounds').style.visibility = "visible";
	}
}
function getNumRounds() {
	if (document.getElementById('nine').checked) {
		document.getElementById('other_rounds').style.visibility = "hidden";
		return document.getElementById('nine').value;
	} else if (document.getElementById('eighteen').checked) {
		document.getElementById('other_rounds').style.visibility = "hidden";
		return document.getElementById('eighteen').value;
	} else if (document.getElementById('other').checked) {
		isOther();
		return document.getElementById('other_rounds').value;
	}
}

// Player nametags used to label who deals for each round
function labelDealers() {
	var txt = document.getElementById("player"+j+"NameTag").innerHTML;
	console.log(txt);
}

function setScoreboard() {
	var players = document.getElementById("player_id").value;
	var rounds = parseInt(getNumRounds());
	
	var tabl = document.getElementById('scorecard');
	
	tabl.innerHTML = "";
	
	// players is columns + 1
	// rounds is rows + 1
	
	// create first row for names (1st row)
	var row = tabl.insertRow(0);
	var cel = row.insertCell(0);
	
	
		// adds player names into table (1st row)	
	for (var j=1; j<=players;j++) {
		cel = row.insertCell(j);
		cel.innerHTML = "<input class='player_name' onChange='labelDealers("+j+")' id='player"+j+"NameTag' type='test' value='player"+j+"'></input>"
	}
	
	

	// adds input for score
	for (var i=1; i<= rounds; i++) {
		// adds total
	row = tabl.insertRow(rounds+1);
	cel = row.insertCell(0);
	cel.innerHTML = "<b>Total</b>";
	for (var i=1;i<=players;i++) {
		cel = row.insertCell(i);
		cel.innerHTML = "<input class='round_score' type='number' id='player"+i+"_total' value='0' readonly></input>";
	}
		
		row = tabl.insertRow(i);
		cel = row.insertCell(0);
		cel.innerHTML = "<center><b>" + i + "</b></center>";
		for (var j=1; j<=players;j++) {
			var player = "player"+j;
			cel = row.insertCell(j);
			cel.innerHTML = "<input class='round_score' min='-60' max='60' pattern='\d*' onchange='calculateScore(\""+player+"\")' type='number' name='"+player+"_score' value='0'></input>";
		}
	}
	

}

function disableSettings() {
	var t = document.getElementsByName('rounds');
	var pid = document.getElementById('player_id');
	var othr = document.getElementById('other_rounds');
	var lockcheck = document.getElementById('lock');
	
	if (lockcheck.checked == true) {
		pid.disabled = true;
		othr.disabled = true;
	} else {
		pid.disabled = false;
		othr.disabled = false;
	}
	
	for (var i=0; i<t.length; i++) {
		if (lockcheck.checked == true) {
			t[i].disabled = true;
		} else {
			t[i].disabled = false;
		}
	}
}

function calculateScore(player_score) {
	var player_count = document.getElementById('player_id');
	
		var round_score = document.getElementsByName(player_score + '_score');
		var score = 0;
		for (var j=0; j<round_score.length; j++) {
			score += parseInt(round_score[j].value);
		}
		
		document.getElementById(player_score+'_total').value = score;
	
}