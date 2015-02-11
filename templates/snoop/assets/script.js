var socket = io.connect("http://localhost:7777");
socket.on('domout', function (data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      $(".bubble").empty();
      $(".bubble").append("<p>"+data[key]+"</p>");
    }
  }
});
