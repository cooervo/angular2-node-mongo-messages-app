exports.getDbModel = function () {

    var mongoose = require('mongoose');
    mongoose.Promise = require("bluebird");
    mongoose.connect('mongodb://localhost/app_db');

   // Create Schema to define structure of a document
    var messageSchema = mongoose.Schema({
            sender: String,
            subject: String,
            message: String,
            time_sent: String,
        },
        {collection: "messages"}
    );

    var MessageModel = mongoose.model("Message", messageSchema);
    return MessageModel;
}
