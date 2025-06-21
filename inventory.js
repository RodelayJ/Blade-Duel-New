let inventory = ["Healing Potion", "Mana Elixir"];
function updateInventory() {
  console.log('Inventory updated');
  const inv = document.getElementById("inventory-ui");
  inv.innerText = "Inventory: " + (inventory.length ? inventory.join(", ") : "Empty");
}