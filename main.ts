microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    Mode = message
    microIoT.microIoT_ledBlank()
    microIoT.microIoT_showUserText(0, "Mode: " + Mode)
})
let Mode = ""
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI("DGINCB_WT6F", "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
basic.forever(function () {
    if (Mode == "sunny mode") {
        pins.analogWritePin(AnalogPin.P12, 0)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        microIoT.microIoT_ServoRun(microIoT.aServos.S2, 180)
    }
})
