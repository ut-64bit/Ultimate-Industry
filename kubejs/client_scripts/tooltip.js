ItemEvents.tooltip(tooltip => {
	// 削除したアイテムの表示
	tooltip.add(global.deleteItem, Text.red("DELETED").underlined().italic())

	/*
	// ネザー特攻
	tooltip.addAdvanced("#fabrication:nether_tools", (item, advanced, text) => {
		text.add(1, Text.translate("item.tooltip.nethers_speciality").red())
	})

	// ネザー特化
	tooltip.addAdvanced("#fabrication:nether_only_tools", (item, advanced, text) => {
		text.add(1, Text.translate("item.tooltip.nether_exclusive").red())
	})

	tooltip.addAdvanced("#tooltip:fire_resistance", (item, advanced, text) => {
		text.add(1, Text.translate("item.tooltip.fire_resistance").gray())
	})
	*/
})