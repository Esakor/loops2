input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 0)
        basic.pause(100)
    }
})
basic.showIcon(IconNames.Fabulous)
basic.forever(function () {
	
})
