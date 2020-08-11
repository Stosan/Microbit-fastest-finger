let Player_A = 0
let Player_B = 0
basic.forever(function () {
    basic.pause(100)
    basic.pause(randint(0, 400))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(20)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        Player_A += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # # # .
            . # . . #
            . # # # .
            `)
        Player_B += 1
    }
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(100)
    basic.showNumber(Player_A)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showNumber(Player_B)
    basic.pause(100)
    basic.clearScreen()
})
