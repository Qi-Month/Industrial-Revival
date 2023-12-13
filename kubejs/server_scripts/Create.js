onEvent('recipes', event => {
	// Create
	const {
		createFilling,
		createMixing,
		createCrushing,
		createSequencedAssembly,
		createDeploying,
		createMechanicalCrafting,
		createSplashing,
		createPressing,
		createSandpaperPolishing,
		createCompacting,
		createBasin,
		createMilling
	} = event.recipes;
	// Vanilla
	const {
		shaped,
		smithing,
		stonecutting
	} = event;

	// 小齿轮
	smithing(
		'2x create:cogwheel',
		'alloyed:bronze_sheet',
		'create:andesite_alloy'
	)

	createDeploying(
		'2x create:cogwheel', [
		'alloyed:bronze_sheet',
		'create:andesite_alloy'
	]).id('create:deploying/cogwheel')

	createDeploying(
		'2x create:cogwheel', [
		'create:incomplete_cogwheel',
		'create:shaft'
	])

	// 大齿轮
	smithing(
		'create:large_cogwheel',
		'create:cogwheel',
		'alloyed:bronze_sheet'
	)
	smithing(
		'2x create:large_cogwheel',
		'create:cogwheel',
		'create:andesite_alloy'
	)
	createDeploying(
		'2x create:large_cogwheel', [
		'create:cogwheel',
		'create:andesite_alloy'
	])
	createDeploying(
		'create:large_cogwheel', [
		'create:cogwheel',
		'alloyed:bronze_sheet'
	])
	createDeploying(
		'2x create:large_cogwheel', [
		'create:incomplete_large_cogwheel',
		'create:shaft'
	])
})