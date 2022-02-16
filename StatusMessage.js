class Status_Message {
  constructor(application, message) {
    this.application = application;
    this.message = message;

    var o = {};
    o['application'] = application;
    o['message'] = message;
    // console.log(JSON.stringify(o));

    Status_Message.statuses.push(JSON.stringify(o));
    if (Status_Message.statuses.length > 15) {
        console.log("EMPTY");
        Status_Message.statuses = [];
    }
  }
}

Status_Message.print_sm = function () {
  for (const s of Status_Message.statuses) {
    console.log(s);
  }
};

Status_Message.statuses = [];

function add_message() {
    new Status_Message("app_" + Math.floor(100*Math.random()).toString());
}

function main() {
  console.log("## status messaages ##");
  sm = new Status_Message("config", "true");

  for (i = 0 ; i < 5 ; i++) {
    new Status_Message("app_" + i.toString(), "msg_" + i.toString());
  }   

  // https://nodejs.org/en/docs/guides/timers-in-node/
  const tid = setInterval(Status_Message.print_sm, 1000);
  const tsm = setInterval(add_message, 100);

  function killTimeOut() {
    // clearInterval(tid); 
    clearInterval(tsm);
    console.log("DONE");
    };
    
    
    setTimeout(killTimeOut, 10000);
}

if (require.main === module) {
  main();
  Status_Message.print_sm();
}
