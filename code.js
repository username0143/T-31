Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendString("CD")
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendString("CU")
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        radio.sendString("B")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("CL")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        radio.sendString("F")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    } else if (receivedString == "B") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    } else if (receivedString == "L") {
        motor.servo(motor.Servos.S1, 135)
    } else if (receivedString == "R") {
        motor.servo(motor.Servos.S1, 45)
    } else if (receivedString == "CU" && domeServoVerticalAngle < 180) {
        domeServoVerticalAngle += 5
    } else if (receivedString == "CL" && domeServoHorizontalAngle > 0) {
        domeServoHorizontalAngle += -5
    } else if (receivedString == "CR" && domeServoHorizontalAngle < 180) {
        domeServoHorizontalAngle += 5
    } else if (receivedString == "CD" && domeServoVerticalAngle < 180) {
        domeServoVerticalAngle += -5
    } else {
        motor.servo(motor.Servos.S1, 90)
        motor.motorStopAll()
    }
    motor.servo(motor.Servos.S3, 180 - domeServoHorizontalAngle)
    if (previousVerticalAngle != domeServoVerticalAngle) {
        motor.servo(motor.Servos.S2, 180 - domeServoVerticalAngle)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("CR")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        radio.sendString("R")
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    while (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        radio.sendString("L")
    }
})
let previousVerticalAngle = 0
let domeServoVerticalAngle = 0
let domeServoHorizontalAngle = 0
domeServoHorizontalAngle = 90
domeServoVerticalAngle = 90
previousVerticalAngle = -1
loops.everyInterval(500, function () {
    radio.sendString("UPDATE")
})
