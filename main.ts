let direcao = 0
basic.forever(function () {
    direcao = input.compassHeading()
    if (direcao < 23) {
        basic.showString("N")
    } else if (direcao < 68) {
        basic.showString("NE")
    } else if (direcao < 113) {
        basic.showString("L")
    } else if (direcao < 158) {
        basic.showString("SE")
    } else if (direcao < 203) {
        basic.showString("S")
    } else if (direcao < 248) {
        basic.showString("SO")
    } else if (direcao < 293) {
        basic.showString("O")
    } else if (direcao < 338) {
        basic.showString("NO")
    } else {
        basic.showString("N")
    }
})
