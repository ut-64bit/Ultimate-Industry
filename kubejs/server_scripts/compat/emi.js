// requires: emi

ServerEvents.tags("item", event => {
	event.add("c:hidden_from_recipe_viewers", "createcasing:processing_chorium")
	event.add("c:hidden_from_recipe_viewers", Ingredient.of("@citadel").itemIds)
	event.add("c:hidden_from_recipe_viewers", Ingredient.of(/createcasing:.*_encased_.*shaft/).itemIds)
	event.add("c:hidden_from_recipe_viewers", Ingredient.of(/createcasing:.*_encased_.*cogwheel/).itemIds)
})