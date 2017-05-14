// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = '480418348927';

// Instantiates a client
const visionClient = Vision({
  projectId: projectId
});

// The name of the image file to annotate
const fileName = '/home/stel/Pictures/2.jpg';

// Performs label detection on the image file
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
