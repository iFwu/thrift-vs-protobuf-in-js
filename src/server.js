require = require("esm")(module);

var thrift = require("thrift");

// var ttypes = require("./gen-nodejs/1_types");

const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const port = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.raw({ type: "text/plain" }));

// example code
global.$protobuf = require('protobufjs/minimal')
const pbjsRoot = require("./pbjs/msg_types.js");
const rpcRes = pbjsRoot.serializers.protobuf.media.Response.create({ code: 200, success: true, message: 'ok' })
const MediaMessage = pbjsRoot.serializers.protobuf.media.Media

app.post("/protobuf", (req, res) => {
  console.log(MediaMessage.decode(req.body));
  res.setHeader("Content-Type", "application/json");
  res.send(rpcRes.toJSON());
});

const UploadMedia = require('./thrift/gen-nodejs/UploadMedia');

const uploadHandler = {
	Upload: function(media, resultCallback) {
    console.log(media)
		resultCallback(null, { code: 200, success: true, message: 'ok' });
	}
}

const uploadMediaService = {
	transport: thrift.TBufferedTransport,
	protocol: thrift.TJSONProtocol,
	processor: UploadMedia,
	handler: uploadHandler
};

var ServerOptions = {
	files: "./dist",
	services: {
		"/thrift": uploadMediaService,
	}
}

var server = thrift.createWebServer(ServerOptions);
server.listen(3000, () => console.log('Thrift server listening on port 3000'));
// const TBufferedTransport = require('thrift/lib/nodejs/lib/thrift/buffered_transport')

// app.post('/thrift', (req, res) => {
//   TBufferedTransport.receiver(transWithData => {
//     const input = new TCompactProtocol(transWithData)
//     const MediaMessage = new MediaTypes.Media()
//     MediaMessage.read(input)
//     console.log(MediaMessage)
//     res.status(200)
//     res.end()
//   })(req.body)
// })

app.listen(port, () => console.log(`Protobuf server listening on port ${port}!`));
