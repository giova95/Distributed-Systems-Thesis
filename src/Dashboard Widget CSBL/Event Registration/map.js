async function execute() {
  const data = JSON.parse(param);
  let location = {};
  const lat = data.coordinates.latitude;
  const long = data.coordinates.longitude;
  location.latitude = lat;
  location.longitude = long;

  try {
    const response = await fetch(
      "https://www.snap4city.org/superservicemap/api/v1/location/?position=" +
        lat +
        ";" +
        long
    );
    const json = await response.json();
    location.city = json[0].municipality;
    location.address = json[0].address;
  } catch (error) {
    console.log("There was an error", error);
  }

  const locData = JSON.stringify(location);
  $("body").trigger({
    type: "showExternalContentFromExternalContent_w_ExternalContent_3955_widgetExternalContent37730",
    eventGenerator: $(this),
    targetWidget: "w_ExternalContent_3955_widgetExternalContent37730",
    events: "sendContent",
    passedData: locData,
  });
}
