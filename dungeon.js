function displayEnemy() {
  console.log('Enemy displayed');
  const enemy = document.getElementById("enemy-display");
  enemy.innerText = "A Mythic Shadow Fiend appears!";
}
function updateStats() {
  console.log('Player stats updated');
  const stats = document.getElementById("player-stats");
  stats.innerText = "HP: 100 | MP: 50 | XP: 0";
}