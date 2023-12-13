onEvent('recipes', event => {
	const custom = event;
	//小齿轮(半成品)
	custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "tconstruct:gear_cast"
		},
		"cast_consumed": false,
		"fluid": {
			"tag": "tconstruct:molten_bronze",
			"amount": 90
		},
		"result": "create:incomplete_cogwheel",
		"cooling_time": 100
	})
	//大齿轮(半成品)
	custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "create:incomplete_cogwheel"
		},
		"cast_consumed": true,
		"fluid": {
			"tag": "tconstruct:molten_bronze",
			"amount": 180
		},
		"result": "create:incomplete_large_cogwheel",
		"cooling_time": 200
	})
	// //强化黑曜石
	// custom({
	// 	"type": "tconstruct:casting_basin",
	// 	"cast": {
	// 		"item": "minecraft:obsidian"
	// 	},
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"tag": "tconstruct:molten_netherite",
	// 		"amount": 72
	// 	},
	// 	"result": "ctza:fortified_obsidian",
	// 	"cooling_time": 200
	// })
	// //烈焰血
	// custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": {
	// 		"item": "create:blaze_cake_base"
	// 	},
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"tag": "tconstruct:blazing_blood",
	// 		"amount": 500
	// 	},
	// 	"result": "create:blaze_cake",
	// 	"cooling_time": 1
	// })
	// //烈焰人的头
	// custom({
	// 	"type": "tconstruct:casting_basin",
	// 	"cast": {
	// 		"item": "create:blaze_cake"
	// 	},
	// 	"cast_consumed": true,
	// 	"fluid": {
	// 		"tag": "tconstruct:blazing_blood",
	// 		"amount": 400
	// 	},
	// 	"result": "tconstruct:blaze_head",
	// 	"cooling_time": 1
	// })
	// //玫瑰金板
	// custom({
	// 	"type": "tconstruct:casting_table",
	// 	"cast": {
	// 		"item": "tconstruct:plate_cast"
	// 	},
	// 	"cast_consumed": false,
	// 	"fluid": {
	// 		"tag": "tconstruct:molten_rose_gold",
	// 		"amount": 144
	// 	},
	// 	"result": "ctza:rose_gold_sheet",
	// 	"cooling_time": 50
	// })
})