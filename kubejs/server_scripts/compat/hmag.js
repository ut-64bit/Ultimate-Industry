// requires: hmag

ServerEvents.recipes(event => {
	event.remove({ id: "hmag:evil_crystal" })
	event.remove({ id: "hmag:evil_crystal_from_evil_crystal_block" })

	function anvil_upgrade(item, material, count, min, max) {
		event.custom(
			{
				"type": "lychee:anvil_crafting",
				"item_in": [
					Ingredient.of(item).toJson(),
					Ingredient.of(material).toJson()
				],
				"item_out": Ingredient.of(item).toJson(),
				"level_cost": 1,
				"material_cost": count,
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

	Ingredient.of("#forge:tools/swords").itemIds.forEach(element=>{
		anvil_upgrade(element, "hmag:evil_crystal_fragment", 20, 0, 3)
		anvil_upgrade(element, "hmag:evil_crystal", 20, 3, 6)
		anvil_upgrade(element, "hmag:ancient_stone", 20, 6, 9)
		anvil_upgrade(element, "alexsmobs:void_worm_eye", 1, 9, 10)
	})
})

LootJS.modifiers(event => {
	event.addEntityLootModifier(["zombie", "husk", "drowned", "skeleton", "wither_skeleton", "stray"])
		.killedByPlayer()
		.randomChanceWithLooting(0.015, 0.005)
		.addLoot("hmag:evil_crystal_fragment")

		event.addEntityLootModifier(["hmag:zombie_girl", "hmag:husk_girl", "hmag:drowned_girl", "hmag:skeleton_girl", "hmag:wither_skeleton_girl", "hmag:stray_girl"])
		.killedByPlayer()
		.randomChanceWithLooting(0.015, 0.005)
		.addLoot("hmag:evil_crystal")
})
