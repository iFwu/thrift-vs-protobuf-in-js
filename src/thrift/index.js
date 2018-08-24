import "./lib/thrift.js";
import "./gen-js/msg_types";
import "./gen-js/UploadMedia";
import TCompactProtocol from "./lib/compact_protocol";
import TJSONProtocol from "./lib/json_protocol";
import TXHRTransport from "./lib/txhr_transport";

// import TCompactProtocol from 'thrift/lib/nodejs/lib/thrift/compact_protocol'
// import TBufferedTransport from 'thrift/li/nodejs/lib/thrift/buffered_transport'
// import TJSONProtocol from 'thrift/lib/nodejs/lib/thrift/json_protocol'

window.sendMessage = function() {
  const trans = new TXHRTransport("http://localhost:3000/thrift");
  const prot = new TJSONProtocol(trans);
  const client = new serializers.thrift.media.UploadMediaClient(prot);
  client.Upload(
    {
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
    },
    function(res) {
      console.log(res);
    }
  );
  // MediaMessage.write(prot)

  // return trans.outBuffers
};
