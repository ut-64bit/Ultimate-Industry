stopsound @s record alexsmobs:music_wormboss
stopsound @s music

scoreboard players add @s voiwormbosstheme 1
execute if score @s voiwormbosstheme matches 4550.. run scoreboard players set @s voiwormbosstheme 0
execute if score @s voiwormbosstheme matches 1 run playsound alexsmobsmusic:voidwormbattlemusic hostile @s ~ ~ ~ 1 1 1
