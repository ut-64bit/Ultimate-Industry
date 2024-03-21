// requires: hmag

ServerEvents.recipes(event => {
	event.remove({id:"hmag:evil_crystal"})
	event.remove({id:"hmag:evil_crystal_from_evil_crystal_block"})
})

LootJS.modifiers(event => {
	event.addEntityLootModifier(["zombie", "husk", "drowned", "skeleton", "wither_skeleton", "stray"])
		.killedByPlayer()
		.randomChanceWithLooting(0.015, 0.005)
		.addLoot("hmag:evil_crystal_fragment")
})
