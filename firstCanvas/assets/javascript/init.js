
//------------------Pen Function Buttons
$('#drawLine').on('click', function() {
  currentFunction = new PencilLine(contextReal, lineColor);
});

$('#graffiti').on('click', function() {
    currentFunction = new Graffiti(contextReal, lineColor);
  });
  $('#marker').on('click', function() {
    currentFunction = new Marker(contextReal, lineColor);
  });
  $('#liam').on('click', function() {
    currentFunction = new Liam(contextReal, liam);
  });
  $('#radialPen').on('click',function(){ // Suruchi
    currentFunction = new Bubbles(contextReal, lineColor);
  });
//------------------Selecter
$('#selector-button').on('click', function() {
  currentFunction = new Selecting(contextReal, contextDraft);
});
//------------------Colors
$('#fill').on('click', function() {
  currentFunction = new ColorFill(contextReal, contextDraft);
});
// Other buttons
$('#drawRect').on('click', function() {
  currentFunction = new DrawingRectangle(contextReal, contextDraft);
});


// David's Clicks
$('#drawingRect').on('click', function(){
  currentFunction = new DrawingRectangle(contextReal,contextDraft)
})

$('#drawingTriangle').on('click', function(){
  currentFunction = new DrawingTriangle(contextReal, contextDraft)
})

$('#drawingCircle').on('click', function(){
  currentFunction = new DrawingCircle(contextReal, contextDraft)
})

$('#drawingPolygon').on('click', function(){
  currentFunction = new DrawingPolygon(contextReal, contextDraft)
});

$('#drawingEraser').on('click', function(){
  currentFunction = new DrawingEraser(contextReal, contextDraft)
})

/* Image stamping */

$('#drawingImages').on('click', function(){
  $('.imagebox').toggle('show');
})

$('#imagebox1').click(function(){
  currentFunction = new ImageEggplant(contextReal, contextDraft);
})

$('#imagebox2').click(function(){
  currentFunction = new ImageClown(contextReal, contextDraft);
})
  
  
$('#clearCanvas').on('click', function(){
  new clearCanvas(contextReal, contextDraft)
})

// Suruchi's Clicks
$('#straight-line').on('click',function(){
  currentFunction = new DrawingStraight(contextReal,contextDraft)
})

$('#curve-line').on('click',function(){
  currentFunction = new DrawingCurve(contextReal,contextDraft)
})

$('#radial-pen').on('click',function(){
  currentFunction= new RadialPen(contextReal,contextDraft)
})
