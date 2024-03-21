// priority: 0

ItemEvents.modification(event => {
	event.modify("createaddition:diamond_grit_sandpaper", item => {
		item.maxDamage = 256
	})

	event.modify(["snowball", "ender_pearl"], item => {
		item.maxStackSize = 64
	})

	event.modify("potion", item => {
		item.maxStackSize = 3
	})

	event.modify(["splash_potion", "lingering_potion"], item => {
		item.maxStackSize = 2
	})
})

StartupEvents.registry("item", event => {
	event.create("create:industrial_iron_ingot").texture("create:item/industrial_iron_ingot").tag("forge:ingots/industrial_iron").group("kubejs")
	event.create("create:industrial_iron_nugget").texture("create:item/industrial_iron_nugget").tag("forge:nuggets/industrial_iron").group("kubejs")
	event.create("create:industrial_iron_sheet").texture("create:item/industrial_iron_sheet").tag("forge:plates/industrial_iron").group("kubejs")
})

/*
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", event => {
	const player = event.entity
	const block = player.level.getBlock(event.getPosition().get())
	const speed = event.getNewSpeed()

	if(block.hasTag("forge:stone"))
	event.setNewSpeed(speed*(64-block.y)*(2/128))
})
*/

LycheeEvents.customAction("anvil_upgrade", event => {
	event.action.applyFunc = (recipe, ctx, times) => {
		let upgrade_count = ctx.getItem(0).nbt?.Upgrade
		upgrade_count = typeof upgrade_count === "number" ? upgrade_count + 1 : 1
		console.log(upgrade_count)

		if (upgrade_count > 1){
			ctx.getItem(2).nbt.merge({ Upgrade: upgrade_count, affix_data: { affixes: { "apotheosis:socket": upgrade_count, } } })
		}else{
			ctx.getItem(2).nbt.merge({ Upgrade: 1, affix_data: { affixes: { "apotheosis:socket": 1, } } })
		}
	}
})

LycheeEvents.customCondition('can_upgrade', event => {
	event.condition.testFunc = (recipe, ctx, times) => {
		return (ctx.getItem(0).nbt?.Upgrade > 5 || ctx.getItem(0).nbt?.apoth_boss == 1) ? 0 : times
	}
	event.cancel()
})