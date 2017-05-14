function video(name, deps) {

    var latestImage;
    var getPixels = require("get-pixels")
    deps.app.get('/image', function (req, res) {
        var fs = require('fs');

        // function to encode file data to base64 encoded string
        function base64_encode(file) {
            // read binary data
            var bitmap = fs.readFileSync(file);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');
        }
        var base64str = base64_encode('images/fileName.png');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });

        return res.end(base64str, "binary");
    });

    // Add a new route to fetch camera image
    deps.app.get('/camera/:id', function (req, res) {
        if (!latestImage) {
            res.writeHead(301, { "Location": "/plugin/" + name + "/images/nofeed.jpg" });
            res.end();
            return;
        }
        //console.log(req)
        res.writeHead(200, { 'Content-Type': 'image/png' });
        setTimeout(function () {
            //save image to filepath
            var readWriteFile = function (req) {
                var fs = require('fs');
                fs.writeFile('images/fileName.png', req, 'binary', function (err) {
                    if (err) {
                        console.log("There was an error writing the image")
                    }
                    else {
                        console.log("The sheel file was written")
                    }
                });
            }

            readWriteFile(latestImage)

            var PNG = require('png-js');
            //PNG.decode('fileName.png', function (pixels) {
            //    var r = pixels[0]
            //    var b = pixels[1]
            //    var g = pixels[2]
            //    var a = pixels[3]

            //});
        }, 2000)

        return res.end(latestImage, "binary");
    });

    // Add a handler on images update
    deps.client.getPngStream()
        .on('error', console.log)
        .on('data', function (frame) {
            latestImage = frame;
        });
};

module.exports = video;
