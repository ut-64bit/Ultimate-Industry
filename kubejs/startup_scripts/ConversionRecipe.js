// priority: 1
// requires: create

StartupEvents.postInit(event => {
	let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
	let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

	$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))
	$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
})