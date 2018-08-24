import 'protobufjs/minimal'
import { serializers } from './msg_types'

window.sendMessage = function () {
  const message = {
    uri: "http://javaone.com/keynote.mpg",
    title: "Javaone Keynote",
    width: 640,
    height: 480,
    format: "video/mpg4",
    duration: 18000000, // half hour in milliseconds
    size: 58982400, // bitrate * duration in seconds / 8 bits per byte
    bitrate: 262144, // 256k
    person: ["Bill Gates", "Steve Jobs스"],
    player: 0,
    copyright: null
  };

  function rpcImpl (method, requestData, callback) {
    const xhr = new XMLHttpRequest;
    xhr.open("POST", 'http://localhost:4000/protobuf');
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(requestData);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(null, serializers.protobuf.media.Response.create(JSON.parse(xhr.response)))
      }
    }
  }
  const uploadMedia = serializers.protobuf.media.UploadMedia.create(rpcImpl, false, false)
  uploadMedia.upload(message, function (err, res) {
    console.log('protobuf:', res)
  })
};
