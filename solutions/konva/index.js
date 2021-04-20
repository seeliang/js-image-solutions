const canvasLayer = new Konva.Layer();
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

 // main API:
 var imageObj = new Image();
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
  
 imageObj.src = 'https://www.apple.com/v/home/t/images/logos/apple-one/logo__dcojfwkzna2q_large_2x.png';