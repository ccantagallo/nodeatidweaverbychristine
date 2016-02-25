var app = require("../server");

var port = process.env.PORT || 3000;

module.exports = app;

app.listen(port,function(err) {
    
    if (err) {
        console.dir(err)
    } else {
        console.log("the server is listening")
    }
    
});