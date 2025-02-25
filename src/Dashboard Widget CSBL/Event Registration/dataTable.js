function execute() {
  const parametri = param;
  let device = parametri.serviceUri;
  let coordsAndType = {};
  coordsAndType.eventGenerator = $(this);
  coordsAndType.desc = "events";
  coordsAndType.query = device;
  coordsAndType.color1 = "#ebb113";
  coordsAndType.color2 = "#eb8a13";
  coordsAndType.targets = "";
  coordsAndType.display = "pins";
  coordsAndType.queryType = "Default";
  coordsAndType.iconTextMode = "text";
  coordsAndType.pinattr = "square";
  coordsAndType.pincolor = "#959595";
  coordsAndType.symbolcolor = "undefined";
  coordsAndType.iconFilePath =
    "https://www.snap4city.org/dashboardSmartCity/img/synopticTemplates/svg/140_SVG_Alert_Status.svg";
  coordsAndType.altViewMode = "DynamicCustomPin";
  coordsAndType.bubbleSelectedMetric = "Severity";
  removePin(device);

  parent.$("body").trigger({
    type: "addBubbleChart",
    target: "w_Map_3955_widgetMap37993",
    passedData: coordsAndType,
  });
  let type = parametri.action;
  if (type === "pin" || type == "0") {
  } else if (type == "custom1" || type == "1") {
    let gps = parametri.position;
    console.log("la posizione:");
    console.log(gps);
    let result;
    var sourceName = "";
    let img = "https://iot-app.snap4city.org/nodered/nr5fqlv/test_view";
    if (parametri.SourceName != undefined) {
      if (
        parametri.SourceName != "FromDashboard" &&
        parametri.SourceName != "" &&
        parametri.SourceName != null
      ) {
        img =
          "https://iot-app.snap4city.org/nodered/nr5fqlv/" +
          parametri.SourceName;
      }
    }
    let param = {};
    param.data = img;
    $("body").trigger({
      type: "showExternalContentFromExternalContent_w_ExternalContent_3955_widgetExternalContent37875",
      eventGenerator: $(this),
      targetWidget: "w_ExternalContent_3955_widgetExternalContent37875",
      events: "sendContent",
      passedData: param,
    });
  } else {
    console.log(type);
  }
}

function removePin(device) {
  let removePin = {};
  removePin.eventGenerator = $(this);
  removePin.desc = "events";
  removePin.query = device;
  removePin.color1 = "#ebb113";
  removePin.color2 = "#eb8a13";
  removePin.targets = "";
  removePin.display = "pins";
  parent.$("body").trigger({
    type: "removeSelectorPin",
    target: "w_Map_3955_widgetMap37993",
    passedData: removePin,
  });
  console.log("REMOVE PINS");
}
