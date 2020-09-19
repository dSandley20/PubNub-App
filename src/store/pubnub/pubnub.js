const PubNub = require("pubnub");

pubnubConnection = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  uuid: "danielS",
});

export default pubnubConnection;
