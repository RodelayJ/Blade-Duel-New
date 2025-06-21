function usePotion() {
  console.log('Potion use attempt');
  const log = document.getElementById("dungeon-log");
  if (inventory.includes("Healing Potion")) {
    log.innerText = "You used a Healing Potion. +50 HP!";
    inventory = inventory.filter(p => p !== "Healing Potion");
    updateInventory();
  } else {
    log.innerText = "No potions left!";
  }
}