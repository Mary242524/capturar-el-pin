input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setScore(0)
basic.forever(function () {
    basic.pause(50)
    sprite.move(1)
    sprite.ifOnEdgeBounce()
})
