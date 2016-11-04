exports.routes = function (expressApp, MessageModel) {

    expressApp

    // GET all
        .get("/messages", function (req, res) {

            MessageModel.find({}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // GET by id
        .get("/messages/:id", function (req, res) {
            var id = req.params.id;

            console.log("SERVER id", id)

            MessageModel.findOne({_id: id}).exec().then(function (results) {
                    res.json(results);

                }
            ).catch(function (err) {
                console.log("error", err)
            });

        })

        // DELETE by id
        .delete("/messages/:id", function (req, res) {
            var id = req.params.id;

            console.log("SERVER DELETE id", id)
            res.json({"woot":"woot"});


        })
    ;

}