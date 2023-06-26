input.onButtonPressed(Button.A, function () {
    basic.showString("EFEKT")
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            basic.pause(delay)
            led.plot(j, i)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= 4; l++) {
            basic.pause(delay)
            led.unplot(l, k)
        }
    }
})
let delay = 0
delay = 500
