// Imports the Google Cloud client library
const fs = require('fs') ;

const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = '480418348927';

// Instantiates a client
const visionClient = Vision({
  projectId: projectId
});
 let base64Image ;
var request = require('request');
request('http://192.168.1.72:3000/image', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  base64Image = body;
  const fileName = '/home/stel/TEAMDRONE/googleVision/image.png';
  fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
    visionClient.detectLabels(fileName)
      .then((results) => {
        const labels = results[0];
        console.dir(results[1])
        console.log('Labels:');
        labels.forEach((label) => console.log(label));
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });

  });
});
// The name of the image file to annotate

// Performs label detection on the image file
