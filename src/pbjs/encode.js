import { serializers } from './msg_types'

function encode (data, name) {
  const MessageModel = serializers.protobuf.media[name];
  const message = MessageModel.create(data);
  const errMsg = MessageModel.verify(message);
  if (errMsg) {
    throw Error(errMsg);
    console.log("[encodeProtobufMessage]", name, data);
    return;
  }
  const buffer = MessageModel.encode(message).finish();
  return buffer;
}

window.sendMessage = function () {
  const message = {
    Media: {
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
    }
  };
  const MediaMsg = encode(message.Media, 'Media');

  const xhr = new XMLHttpRequest;
  xhr.open("POST", 'http://localhost:4000/protobuf');
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.send(MediaMsg);
};
