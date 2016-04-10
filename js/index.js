'use strict';

//This is the base URL for API resources
let baseURL = "https://api.twitch.tv/kraken/";

let $streamDisplay = $("#streamDisplay");

//List of streamers we'll loop over to see who/who isn't streaming
let streamerList = [{
  stream_name: "freecodecamp",
  status: true
}, {
  stream_name: "storbeck",
  status: true
}, {
  stream_name: "itsHafu",
  status: true
}, {
  stream_name: "VGBootCamp",
  status: true
}, {
  stream_name: "RobotCaleb",
  status: true
}, {
  stream_name: "vgbootcamp2",
  status: true
}, {
  stream_name: "nl_Kripp",
  status: true
}, {
  stream_name: "TrumpSC",
  status: true

}, {
  stream_name: "reynad27",
  status: true
}, {
  stream_name: "Kolento",
  status: true
}, {
  stream_name: "BobRoss",
  status: true
}, {
  stream_name: "brunofin",
  status: true
}];

for (var i = 0; i < streamerList.length; i++) {
  let currentStreamer = streamerList[i];
  let currentStreamerURL = "http://twitch.tv/" + currentStreamer.stream_name;

  //Be able to see who's currently streaming and set status (online/offline)
  $.getJSON(baseURL + "streams/" + streamerList[i].stream_name + "?callback=?", function(status) {
    if (status.stream == null) {
      currentStreamer.status = "offline";
    } else if (status.stream != null) {
      currentStreamer.status = "online";
    }

    //Create a new row for every person streaming + display status and get taken to channel when you click the status output
    if (currentStreamer.status == "online") {
      $streamDisplay.append("<a href=" + currentStreamerURL + " target='_blank'>" + "<div class='row'><img src='" + status.stream.channel.logo + "'></img>" + "<div class='online'></div>" + currentStreamer.stream_name + "<br><b>" + status.stream.game + "</b></div></a>");
    } else if (currentStreamer.status == "offline") {
      $streamDisplay.append("<a href=" + currentStreamerURL + " target='_blank'>" + "<div class='row'>" + "<div class='offline'></div>" + currentStreamer.stream_name + "<br>" + "</div></a>");
    }
  });
}