controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 1) {
        mySprite2.setImage(img`
            ....................
            ....................
            ....................
            .....7777...........
            ....777777..........
            .....dddd...........
            .....dddd...........
            .....dddd...........
            ....7feeeeeeeee.....
            ....eee7ff....dddd..
            ....7f77f7..........
            ....7f77f7..........
            .....7777...........
            .....7777...........
            .....e..e...........
            .....e..e...........
            `)
        projectile = sprites.createProjectileFromSprite(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .............555....
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, mySprite2, 50, 0)
        info.changeScoreBy(-1)
        pause(500)
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 . . . . . . . 
            . . . . 7 7 7 7 7 7 . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . . d d d d . . . . . . . 
            . . . . 7 f 7 7 f 7 . . . . . . 
            . . . . f f 7 7 f f . . . . . . 
            . . . . 7 f 7 7 f 7 . . . . . . 
            . . . . 7 f 7 7 f 7 . . . . . . 
            . . . e e e e e e e e e . . . . 
            . e e e . 7 7 7 7 . . d d d d . 
            . . . . . e . . e . . . . . . . 
            . . . . . e . . e . . . . . . . 
            `)
    }
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .............f..................
    .............ff.................
    .............fff................
    .............fff................
    f............ffffff2............
    ff...........fff................
    fff........ffffff...............
    fffffffffffffffffffffffffff99...
    fffffffffffffffffffffffffffffff.
    .fffffffffffffffffffffffffffffff
    ...........fffffffffff..........
    .............ffff...............
    .............fff................
    .............ffffff2............
    .............fff................
    .............fff................
    .............ff.................
    .............f..................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . 7 f 7 7 f 7 . . . . . . 
    . . . . f f 7 7 f f . . . . . . 
    . . . . 7 f 7 7 f 7 . . . . . . 
    . . . . 7 f 7 7 f 7 . . . . . . 
    . . . e e e e e e e e e . . . . 
    . e e e . 7 7 7 7 . . d d d d . 
    . . . . . e . . e . . . . . . . 
    . . . . . e . . e . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
info.setScore(5)
