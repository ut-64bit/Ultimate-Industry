execute as @a at @s if entity @e[type=alexsmobs:void_worm,distance=..300] run tag @s add vsVoidWorm
execute as @a[tag=!vsVoidWorm] unless score @s voiwormbosstheme matches 0 run stopsound @s hostile alexsmobsmusic:voidwormbattlemusic
execute as @a[tag=!vsVoidWorm] unless score @s voiwormbosstheme matches 0 run scoreboard players set @s voiwormbosstheme 0

execute as @a[tag=vsVoidWorm] at @s run function alexmobsmusic:main

tag @a[tag=vsVoidWorm] remove vsVoidWorm
