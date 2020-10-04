let hand = 0
let fand = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    fand = randint(1, 3)
    if (fand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (fand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (fand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
    if (hand == 1 && fand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2 && fand == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (hand == 3 && fand == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (hand == 1 && fand == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (hand == 2 && fand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (hand == 3 && fand == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (hand == 1 && fand == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (hand == 2 && fand == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (hand == 3 && fand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
