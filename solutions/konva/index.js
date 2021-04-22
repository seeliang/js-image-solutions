var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});
// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'green',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();

 // main API: no need cors
 var imageObj = new Image();
 imageObj.src = 'https://www.apple.com/v/home/t/images/logos/apple-one/logo__dcojfwkzna2q_large_2x.png';
 imageObj.onload = function () {
   var apple = new Konva.Image({
      x: 100,
      y: 160,
     image: imageObj,
     width: 306,
     height: 88,
   });

   // add the shape to the layer
   layer.add(apple);
   layer.batchDraw();
 };
 // alternative API: 
 
 // remote is not working, will need cors
 const remoteImage = 'https://www.apple.com/v/home/x/images/heroes/apple-event-april/hero_endframe__8xosbwdvpaqe_small_2x.jpg'
 const localImage = './fire.png'

 Konva.Image.fromURL(localImage, 
 function (darthNode) {
  darthNode.setAttrs({
    x: 20,
    y: 50,
    scaleX: 0.5,
    scaleY: 0.5,
  });
  layer.add(darthNode);
  layer.batchDraw();
});

// generate image for download

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
const imageURL = layer.toDataURL();

const downloadAction = () => {

  downloadURI(imageURL,'thing.png')
}