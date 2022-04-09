Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("S")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("CU")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("B")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("CL")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("F")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "CL" && domeServoHorizontalAngle > 0) {
        domeServoHorizontalAngle += -5
    }
    if (receivedString == "CR" && domeServoHorizontalAngle < 180) {
        domeServoHorizontalAngle += 5
    }
    if (receivedString == "S") {
        motor.motorStopAll()
    }
    if (receivedString == "CU" && domeServoVerticalAngle < 180) {
        domeServoVerticalAngle += 5
    } else {
        if (domeServoVerticalAngle > 0) {
            domeServoVerticalAngle += -5
        }
    }
    if (receivedString == "F") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    }
    if (receivedString == "B") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    }
    if (receivedString == "L") {
        motor.servo(motor.Servos.S1, 135)
    } else {
        if (receivedString == "R") {
            motor.servo(motor.Servos.S1, 45)
        } else {
            motor.servo(motor.Servos.S1, 90)
        }
    }
    motor.servo(motor.Servos.S3, 180 - domeServoHorizontalAngle)
    motor.servo(motor.Servos.S2, 180 - domeServoVerticalAngle)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("CR")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("R")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("L")
})
let domeServoVerticalAngle = 0
let domeServoHorizontalAngle = 0
domeServoHorizontalAngle = 90
domeServoVerticalAngle = 90
