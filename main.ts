namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    SlimaBean.vy += -250
    expiration.setKind(SpriteKind.object)
    expiration.x += Math.randomRange(-70, 70)
    expiration.y += Math.randomRange(-50, -60)
})
let expiration: Sprite = null
let SlimaBean: Sprite = null
scene.setBackgroundColor(9)
SlimaBean = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 7 f f f 7 7 f f f 7 f . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 7 7 f 7 7 7 7 f 7 7 f . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 7 f f f f f f f f 7 f . . 
. . f 7 f 1 1 1 1 1 1 f 7 f . . 
. . f 7 f f 2 2 2 2 f f 7 f . . 
. . f 7 7 f f f f f f 7 7 f . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 7 7 7 7 7 7 7 7 7 7 f . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(SlimaBean)
SlimaBean.ay = 100
expiration = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . f f f f . . . . f f f f . . 
. f 2 2 2 2 f f f f 2 2 2 2 f . 
. f 2 2 f f 2 2 2 2 f f 2 2 f . 
. f 2 1 1 f f 2 2 f f 1 1 2 f . 
. f 2 1 f 1 f 2 2 f 1 f 1 2 f . 
. f 2 1 1 1 2 2 2 2 1 1 1 2 f . 
. f 2 2 2 2 2 f f 2 2 2 2 2 f . 
. f 2 2 2 2 f 2 2 f 2 2 2 2 f . 
. f f f f 2 2 2 2 2 2 f f f f . 
. . . . f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
SlimaBean.setPosition(300, 400)
expiration.setPosition(300, 520)
game.onUpdate(function () {
    SlimaBean.x += controller.dx()
})
