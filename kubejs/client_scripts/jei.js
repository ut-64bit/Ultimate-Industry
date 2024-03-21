// requires: jei

JEIEvents.hideItems(event => {
	global.deleteItem.forEach(element => { event.hide(element) })
})

JEIEvents.addItems(event => {
	event.add(Item.of("create:chromatic_compound"))
	event.add(Item.of("create:refined_radiance"))
	event.add(Item.of("create:shadow_steel"))
	event.add(Item.of("create:refined_radiance_casing"))
	event.add(Item.of("create:shadow_steel_casing"))

	event.add(Item.of("immersiveengineering:blueprint"))
})
