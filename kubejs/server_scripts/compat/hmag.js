// requires: hmag

ServerEvents.recipes(event => {
	event.remove({ id: "hmag:evil_crystal" })
	event.remove({ id: "hmag:evil_crystal_from_evil_crystal_block" })

	function anvil_upgrade(item, material, min, max) {
		event.custom(
			{
				"type": "lychee:anvil_crafting",
				"item_in": [
					Ingredient.of(item).toJson(),
					Ingredient.of(material).toJson()
				],
				"item_out": Ingredient.of(item).toJson(),
				"level_cost": 1,
				"material_cost": 20,
				"assembling": [
					{
						"type": "nbt_patch",
						"op": "copy",
						"from": "/item_in/0/tag",
						"path": "/item_out/tag"
					},
					{
						"type": "custom",
						"id": "anvil_upgrade"
					}
				],
				"contextual": {
					"type": "custom",
					"id": "can_upgrade",
					"min": min,
					"max": max
				}
			}
		)
	}

	anvil_upgrade("iron_sword", "hmag:evil_crystal", 2, 4)
})

LootJS.modifiers(event => {
	event.addEntityLootModifier(["zombie", "husk", "drowned", "skeleton", "wither_skeleton", "stray"])
		.killedByPlayer()
		.randomChanceWithLooting(0.015, 0.005)
		.addLoot("hmag:evil_crystal_fragment")
})
