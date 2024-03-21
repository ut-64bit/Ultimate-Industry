// requires: biomesoplenty

ServerEvents.recipes(event => {
	// ローズクォーツ
	event.recipes.create.sandpaper_polishing("create:polished_rose_quartz", "biomesoplenty:rose_quartz_shard").id("create:polishing/polished_rose_quartz_from_rose_quartz_shard")

	// 硫黄
	event.shaped("biomesoplenty:brimstone", [
		"##",
		"##"
	], {
		"#": "immersiveengineering:dust_sulfur"
	}).id("immersiveengineering:shaped/brimstone")
	event.recipes.immersiveengineering.crusher("4x immersiveengineering:dust_sulfur", "biomesoplenty:brimstone", []).id("immersiveengineering:crusher/dust_sulfur_from_brimstone")
	event.recipes.immersiveengineering.crusher("2x immersiveengineering:dust_sulfur", "biomesoplenty:brimstone_cluster", []).id("immersiveengineering:crusher/dust_sulfur_from_brimstone_cluster")

})

BlockEvents.broken('biomesoplenty:burning_blossom', event => {
	let [mainhand, offhand] = event.entity.handSlots
	if (mainhand.id == "minecraft:shears") event.exit();

	let { x, y, z } = event.block;
	let explosion = event.level.createExplosion(x + 0.5, y + 0.5, z + 0.5);
	explosion.causesFire(true)
	explosion.damagesTerrain(false)
	explosion.strength(1)
	explosion.explode()
})
