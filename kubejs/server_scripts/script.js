ItemEvents.entityInteracted("glass_bottle", event => {
	if (event.target.type != "minecraft:cow") event.exit();
	event.item.count--
	event.player.giveInHand(Item.of("farmersdelight:milk_bottle"))
	event.target.playSound('entity.cow.milk')
})
