exports.routes = function (expressApp, MessageModel) {

    expressApp

    // GET all messages
        .get("/messages", function (req, res) {

            MessageModel.find({}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // GET message by id
        .get("/messages/:id", function (req, res) {
            var id = req.params.id;

            MessageModel.findOne({_id: id}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // DELETE message by id
        .delete("/messages/:id", function (req, res) {
            var id = req.params.id;

            MessageModel.remove({_id: id}, function (err) {
                if (err) {
                    console.log("error", err);
                }
                else {
                    res.json({"success": true});
                }
            });


        })
    ;

}