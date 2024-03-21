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
		const upgrade = ctx.getItem(0).nbt?.Upgrade

		if (upgrade > 0) {
			let sockets = 0
			if (upgrade + 1 >= 10) sockets = 1
			else if (upgrade + 1 >= 7) sockets = 2
			else if (upgrade + 1 >= 4) sockets = 3

			if (sockets != 0) ctx.getItem(2).nbt.merge({ Upgrade: upgrade + 1, affix_data: { affixes: { "apotheosis:sword/attribute/violent": 0.1 * (upgrade + 1), "apotheosis:socket": sockets } } })
			else ctx.getItem(2).nbt.merge({ Upgrade: upgrade + 1, affix_data: { affixes: { "apotheosis:sword/attribute/violent": 0.1 * (upgrade + 1) } } })
		} else {
			ctx.getItem(2).nbt.merge({ Upgrade: 1, affix_data: { affixes: { "apotheosis:sword/attribute/violent": 0.1 } } })
		}
	}
})

LycheeEvents.customCondition('can_upgrade', event => {
	const max = event.data.max,
		min = event.data.min;
	event.condition.testFunc = (recipe, ctx, times) => {
		const upgrade = ctx.getItem(0).nbt?.Upgrade
		return (max <= upgrade || upgrade < min || ctx.getItem(0).nbt?.apoth_boss == 1) ? 0 : times
	}
	event.cancel()
})