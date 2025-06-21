function attack() {
  console.log('Attack triggered');
  const log = document.getElementById("dungeon-log");
  log.innerText = "You strike with your blade!";
}
function useSkill() {
  console.log('Skill used');
  const log = document.getElementById("dungeon-log");
  log.innerText = "You unleash a class skill!";
}