basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 400) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(pins.map(
        pins.analogReadPin(AnalogPin.P0),
        0,
        1023,
        100,
        2000
        ))
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(pins.map(
        pins.analogReadPin(AnalogPin.P0),
        0,
        1023,
        100,
        2000
        ))
    }
})
