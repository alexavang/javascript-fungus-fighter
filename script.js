let fungusHp = 100;
let attackPower = 100;

function arcanescepter() {
  fungusHp -= 14;
  attackPower -= 12;

  if (fungusHp < 0) {
    fungusHp = 0;
  }

  renderHP();
  renderAP();
}

function entangle() {
  fungusHp -= 9;
  attackPower -= 23;

  if (fungusHp < 0) {
    fungusHp = 0;
  }

  renderHP();
  renderAP();
}

function dragonblade() {
  fungusHp -= 47;
  attackPower -= 38;

  if (fungusHp < 0) {
    fungusHp = 0;
  }

  renderHP();
  renderAP();
}

function starfire() {
  fungusHp -= 25;
  attackPower -= 33;

  if (fungusHp < 0) {
    fungusHp = 0;
  }

  renderHP();
  renderAP();
}

function renderAP() {
  let apValue = document.getElementById("ap-meter");
  apValue.textContent = attackPower;
  let apMeter = document.getElementById("ap-meter");
  apMeter.value = attackPower;
}

function renderHP() {
  let hpValue = document.getElementById("hp-meter");
  hpValue.textContent = fungusHp;
  let hpMeter = document.getElementById("hp-meter");
  hpMeter.value = fungusHp;
}
