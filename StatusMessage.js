class Status_Message {
  constructor(application, message) {
    this.application = application;
    this.message = message;

    var o = {};
    o['application'] = application;
    o['message'] = message;
    // console.log(JSON.stringify(o));
    Status_Message.statuses.push(JSON.stringify(o));
  }
}

Status_Message.print_sm = function () {
  for (const s of Status_Message.statuses) {
    console.log(s);
  }
};

Status_Message.statuses = [];

function main() {
  console.log("## status messaages ##");
  sm = new Status_Message("config", "true");

  for (i = 0 ; i < 5 ; i++) {
    new Status_Message("app_" + i.toString(), "msg_" + i.toString());
  }   

  // https://nodejs.org/en/docs/guides/timers-in-node/
  t = setInterval(Status_Message.print_sm, 1500);
}

if (require.main === module) {
  main();
  Status_Message.print_sm();
}
