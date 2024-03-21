// priority: 0

/**
 * @type {Special.Ingredient[]}
 */
global.deleteItem = [
	'@hammerlib',
	'aquaculture:diamond_fillet_knife',
	'aquaculture:gold_fillet_knife',
	'aquaculture:iron_fillet_knife',
	'aquaculture:stone_fillet_knife',
	'aquaculture:wooden_fillet_knife',
	/createdeco:.*_vert/,
	'railways:conductor_vent',
	'createaddition:electrum_amulet',
	////'thermal:apple_block',
	////'thermal:beetroot_block',
	////'thermal:carrot_block',
	////'thermal:potato_block',
	//'immersiveengineering:capacitor_lv',
	//'immersiveengineering:capacitor_mv',
	//'immersiveengineering:capacitor_hv',
	////'thermal:energy_cell',
	////'thermal:energy_cell_frame',
	"@mekanism",
	"aquaculture:neptunium_fillet_knife",
	'createaddition:capacitor',
	'createaddition:modular_accumulator',
]

ServerEvents.recipes(event => {

	// Create
	{
		// 色彩の化合物
		event.recipes.create.mixing("create:chromatic_compound", ["create:polished_rose_quartz", "3x create:powdered_obsidian", "3x glowstone_dust"]).superheated().id("create:mixing/chromatic_compound")

		// 鋼鉄
		event.recipes.create.mixing(Item.of("immersiveengineering:ingot_steel"), ["iron_ingot", "2x coal"], 1200).superheated().id("create:mixing/steel_ingot")

		// cast iron
		event.remove({ id: "minecraft:compacting/cast_iron_ingot" })
		event.recipes.create.compacting("createdeco:cast_iron_ingot", "create:industrial_iron_ingot").heated().id("createdeco:compacting/cast_iron_ingot")

		// エクストルーダー
		event.recipes.create_mechanical_extruder.extruding("andesite", ["water", "lava"], "diorite").id("immersive_weathering:extruding/andesite")
		event.recipes.create_mechanical_extruder.extruding("diorite", ["water", "lava"], "smooth_quartz").id("immersive_weathering:extruding/diorite")
		event.recipes.create_mechanical_extruder.extruding("tuff", ["blue_ice", "lava"], "immersive_weathering:ash_block").id("immersive_weathering:extruding/tuff")
		event.recipes.create_mechanical_extruder.extruding("blackstone", ["blue_ice", "lava"], "magma_block").id("immersive_weathering:extruding/blackstone")

		event.replaceInput({ id: "extendedgears:crafting/cogwheel" }, Item.of("create:andesite_alloy"), Item.of("create:shaft"))
		event.replaceInput({ id: "extendedgears:crafting/large_cogwheel" }, Item.of("create:andesite_alloy"), Item.of("create:shaft"))

		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_slab" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_stairs" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create:copycat_step_from_ingots_zinc_stonecutting" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_vertical_step" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_beam" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_fence" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_fence_gate" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create:copycat_panel_from_ingots_zinc_stonecutting" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_board" }, "create:zinc_ingot", 'create_connected:copycat_block')
		event.replaceInput({ id: "create_connected:crafting/palettes/copycat_wall" }, "create:zinc_ingot", 'create_connected:copycat_block')

		// 苔
		event.remove({ id: "create:compat/quark/crushing/moss_block" })
		event.recipes.create.mixing("quark:moss_paste", ['immersive_weathering:moss_clump']).id("create:mixing/moss_paste")

		// コンデンサーを変更
		event.replaceInput({ id: "createaddition:mechanical_crafting/alternator" }, "createaddition:capacitor", 'pneumaticcraft:capacitor')
		event.replaceInput({ id: "createaddition:mechanical_crafting/electric_motor" }, "createaddition:capacitor", 'pneumaticcraft:capacitor')
		event.replaceInput({ id: "createaddition:mechanical_crafting/tesla_coil" }, "createaddition:capacitor", 'pneumaticcraft:capacitor')

		event.remove({ id: "createaddition:crafting/modular_accumulator_gold" })
		event.remove({ id: "createaddition:crafting/modular_accumulator_electrum" })

		// 鋼材
		event.recipes.minecraft.crafting_shaped("create:industrial_iron_ingot", [
			"###",
			"###",
			"###"
		], {
			"#": "create:industrial_iron_nugget"
		}).id("create:industrial_iron_ingot_from_nuggets")

		event.recipes.minecraft.crafting_shapeless("9x create:industrial_iron_nugget", "create:industrial_iron_ingot").id("create:industrial_iron_nugget_from_ingot")

		event.recipes.create.compacting("2x create:industrial_iron_ingot", ["#minecraft:coals", "iron_ingot"]).heated().id("create:compacting/industrial_iron_ingot")
		event.recipes.create.pressing("create:industrial_iron_sheet", "create:industrial_iron_ingot").heated().id("create:pressing/industrial_iron_sheet")

		event.recipes.minecraft.stonecutting("design_decor:industrial_plating_block", "create:industrial_iron_ingot").id("design_decor:stonecutting/industrial_plating")
		event.recipes.minecraft.stonecutting("create:industrial_iron_block", "create:industrial_iron_ingot").id("create:industrial_iron_block_from_ingots_iron_stonecutting")
	}

	// Farmers Delight
	{
		event.replaceOutput({ id: "farmersdelight:cutting/oak_log" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:oak_bark"))
		event.replaceOutput({ id: "farmersdelight:cutting/dark_oak_log" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:dark_oak_bark"))
		event.replaceOutput({ id: "farmersdelight:cutting/spruce_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:spruce_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/birch_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:birch_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/jungle_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:jungle_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/acacia_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:acacia_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/mangrove_log" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:mangrove_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/crimson_hyphae" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:crimson_scales'))
		event.replaceOutput({ id: "farmersdelight:cutting/warped_hyphae" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:warped_scales'))
		event.replaceOutput({ id: "farmersdelight:cutting/oak_wood" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:oak_bark"))
		event.replaceOutput({ id: "farmersdelight:cutting/dark_oak_wood" }, 'farmersdelight:tree_bark', Item.of("immersive_weathering:dark_oak_bark"))
		event.replaceOutput({ id: "farmersdelight:cutting/spruce_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:spruce_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/birch_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:birch_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/jungle_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:jungle_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/acacia_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:acacia_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/mangrove_wood" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:mangrove_bark'))
		event.replaceOutput({ id: "farmersdelight:cutting/crimson_stem" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:crimson_scales'))
		event.replaceOutput({ id: "farmersdelight:cutting/warped_stem" }, 'farmersdelight:tree_bark', Item.of('immersive_weathering:warped_scales'))
	}

	// Pneumatic Craft
	{
		event.replaceInput({ id: "pneumaticcraft:spawner_core_shell" }, "emerald", 'quark:soul_bead')
	}

	event.remove({ id: "immersive_weathering:plate_iron" })
	event.shaped("32x immersive_weathering:plate_iron", [
		"##",
		"##"
	], {
		"#": "iron_block"
	}).id("immersive_weathering:plate_iron")

	event.shaped("immersive_weathering:steel_wool", [
		"###",
		"###"
	], {
		"#": "#forge:wires/iron"
	}).id("immersive_weathering:steel_wool")

	event.shaped("suppsquared:metal_frame", [
		" / ",
		"/ /",
		" / "
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_frame")

	event.shaped("suppsquared:metal_brace", [
		"  /",
		"/ /",
		"/  "
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_brace")

	event.shaped('suppsquared:metal_cross_brace', [
		"/ /",
		"   ",
		"/ /"
	], {
		"/": "#forge:rods/iron"
	}).id("suppsquared:metal_cross_brace")

	event.shaped(Item.of('quark:iron_rod'), [
		"/",
		"/",
		"#"
	], {
		"/": "#forge:rods/iron",
		"#": '#forge:ingots/iron'
	}).id("quark:automation/crafting/iron_rod")

	// ガラス片
	event.recipes.minecraft.smelting('quark:clear_shard', 'immersive_weathering:sand_layer_block', 0.025, 50)
	event.recipes.minecraft.smelting('quark:clear_shard', 'immersive_weathering:red_sand_layer_block', 0.025, 50)

	event.shaped('4x quark:iron_ladder', [
		"/ /",
		"/#/",
		"/ /"
	], {
		"/": "#forge:rods/iron",
		"#": "#forge:ingots/iron"
	}).id("quark:building/crafting/iron_ladder")

	// Immersive Engineering
	{
		// ツールに使う素材を鉄→鋼鉄に変更
		event.replaceInput({ id: "immersiveengineering:crafting/hammer" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/wirecutter" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/screwdriver" }, "#forge:rods/iron", "#forge:rods/steel")

		// ブループリント系のレシピ
		event.shaped("immersiveengineering:blueprint", [
			"BBB",
			"PPP"
		], {
			"B": '#forge:dyes/blue',
			"P": "paper"
		}).id("immersiveengineering:crafting/blueprint")
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'), ["immersiveengineering:blueprint", "#minecraft:banners"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), ["immersiveengineering:blueprint", "#forge:plates/iron"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), ["immersiveengineering:blueprint", "copper_ingot", "#forge:ingots/aluminum", "iron_ingot"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'), ["immersiveengineering:blueprint", "gunpowder", "gunpowder", "immersiveengineering:empty_casing"])

		// 棒のレシピを変更
		let rod = function (input, output, id) {
			event.remove({ output: output, type: "minecraft:crafting_shaped" })
			event.shaped(Item.of(output, 3), [
				"#",
				"#"
			], {
				"#": input
			}).id(`immersiveengineering:crafting/${id}_manual_only`)

			event.custom({
				"type": "createaddition:rolling",
				"input": Ingredient.of(input).toJson(),
				"result": {
					"item": `${output}`,
					"count": 2
				}
			}).id(`createaddition:rolling/${id}`)
		}

		rod("#forge:ingots/iron", 'immersiveengineering:stick_iron', "stick_iron")
		rod("#forge:ingots/steel", 'immersiveengineering:stick_steel', "stick_steel")
		rod("#forge:ingots/copper", 'immersiveposts:stick_copper', "copper_rod")
		rod("#forge:ingots/gold", 'immersiveposts:stick_gold', "gold_rod")
		rod("#forge:ingots/silver", "immersiveposts:stick_silver", "silver_rod")
		rod("#forge:ingots/lead", "immersiveposts:stick_lead", "lead_rod")
		rod("#forge:ingots/nickel", "immersiveposts:stick_nickel", "nickel_rod")
		rod("#forge:ingots/aluminum", "immersiveengineering:stick_aluminum", "stick_aluminum")
		rod("#forge:ingots/constantan", "immersiveposts:stick_constantan", "constantan_rod")
		rod("#forge:ingots/electrum", "immersiveposts:stick_electrum", "electrum_rod")
		rod("#forge:ingots/uranium", "immersiveposts:stick_uranium", "uranium_rod")
		rod("#forge:ingots/brass", 'createaddition:brass_rod', "stick_brass")

		event.remove({ id: "createaddition:rolling/electrum_ingot" })
		event.remove({ id: "createaddition:rolling/steel_ingot" })
		event.remove({ id: "createaddition:rolling/gold_ingot" })
		event.remove({ id: "createaddition:rolling/brass_ingot" })
		event.remove({ id: "createaddition:rolling/copper_ingot" })

		// ダイヤモンドの粉
		event.remove({ id: "createaddition:crushing/diamond" })
		event.recipes.immersiveengineering.crusher("createaddition:diamond_grit", "diamond", []).id("createaddition:crusher/diamond_grit")

		// 薬莢
		event.replaceInput({ id: "immersiveengineering:crafting/empty_casing" }, "create:copper_sheet", "#forge:plates/brass")
		event.replaceInput({ id: "immersiveengineering:crafting/empty_shell" }, "create:copper_sheet", "#forge:plates/brass")
		event.replaceInput({ id: "immersiveengineering:metalpress/bullet_casing" }, "copper_ingot", "#forge:ingots/brass")
		event.replaceInput({ id: "immersiveengineering:bottling/empty_shell" }, "create:copper_nugget", "#forge:nuggets/brass")

		// RS酸
		event.recipes.create.mixing(Fluid.of("immersiveengineering:redstone_acid", 250), [Item.of("redstone"), Fluid.of("minecraft:water", 250)], 25)
	}

	{// Thermal
		event.remove({ id: "thermal:smelting/cured_rubber_from_smelting" })
		event.recipes.create.mixing("thermal:cured_rubber", ['thermal:rubber', 'immersiveengineering:dust_sulfur', 'immersiveengineering:dust_hop_graphite']).heated()
		event.remove({ id: "thermal:machines/smelter/smelter_cured_rubber" })
	}
})

ServerEvents.tags("item", event => {
	event.add("forge:storage_blocks/cast_iron", "createbigcannons:cast_iron_block")
	event.add("forge:flour/wheat", 'pneumaticcraft:wheat_flour')
	event.add('forge:dough/wheat', 'pneumaticcraft:sourdough')

	event.add("forge:dusts/saltpeter", "#forge:dusts/niter")
	event.removeAll("forge:dusts/niter")
})

ServerEvents.tags("fluid", event => {
	event.remove("minecraft:water", ["createaddition:flowing_seed_oil", "createaddition:seed_oil", "createaddition:flowing_bioethanol", "createaddition:bioethanol"])
})

LootJS.modifiers(event => {
	event.addBlockLootModifier("#forge:ores").modifyLoot("#forge:raw_materials", item => {
		const replacement = AlmostUnified.getReplacementForItem(item);
		if (replacement.isEmpty()) {
			return item;
		}
		replacement.setCount(item.getCount());
		return replacement;
	});

	global.deleteItem.forEach(element => {
		event.addLootTableModifier(/.*/).removeLoot(element)
	})

	/**
	 * for (const [key, value] of Object.entries(global.replaceItem)) {
	 * 	event.addLootTableModifier(/.*\/).replaceLoot(key, value)
	 * }
	 */

	event.addBlockLootModifier("tall_grass").replaceLoot("minecraft:grass", "minecraft:tall_grass");

})

ServerEvents.recipes(event => {
	global.deleteItem.forEach(element => {
		event.remove([{ input: element }, { output: element }])
	})

	/** 手元クラフトでしか作れないレシピ
	 * @type {Special.Item[]}
	 */
	let manual_only = [
		"immersiveengineering:hammer",
		"immersiveengineering:wirecutter",
		"glass_bottle",
		"bowl"
	]
	manual_only.forEach(element => {
		event.forEachRecipe({ input: element, type: "minecraft:crafting_shapeless" }, (recipe) => {
			recipe.id(`${recipe.getId()}_manual_only`);
		})
	})
	event.forEachRecipe({ type: "immersiveengineering:hammer_crushing" }, (recipe) => {
		recipe.id(`${recipe.getId()}_manual_only`);
	})

})