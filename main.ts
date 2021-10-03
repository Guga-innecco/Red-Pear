controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
function jump () {
    mySprite.vy = -150
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f 1 e e 1 f . . . . . 
    . . . . . f e f f e f . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 6 6 6 6 f f . . . . 
    . . . f . f 6 6 6 6 f . f . . . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
