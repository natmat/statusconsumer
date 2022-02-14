var Dequeue = require('dequeue')

class Status_Message {
    constructor(application, message) {
        this.application = application;
        this.message = message;
        Status_Message.statuses.push(this);
    }

    get_application() {
        return this.application;
    }
}

Status_Message.print_sm = function() {
    var i = 0;
    while (i < Status_Message.statuses.length) {
        var sm = Status_Message.statuses[i];
        console.log(sm.get_application());
        i += 1;
    }
}

Status_Message.statuses = new Dequeue();

function main() {
    console.log("Hello world");
    sm = new Status_Message('config', 'true');
  }
  
  if (require.main === module) {
    main();
    Status_Message.print_sm();

  }

