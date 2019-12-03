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

//------------------Colors

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

$('#drawingHeart').on('click', function(){
  currentFunction = new DrawingHeart(contextReal, contextDraft)
})

$('#drawingPolygon').on('click', function(){
  currentFunction = new DrawingPolygon(contextReal, contextDraft)
})

$('#drawingEraser').on('click', function(){
  currentFunction = new DrawingEraser(contextReal, contextDraft)
})


$('#drawingImages').on('click', function(){
  $('.imagebox').toggle('show');
})

$('#clearCanvas').on('click', function(){
  new clearCanvas(contextReal, contextDraft)
})

// Suruchi's Clicks
$('#straight-line').on('click',function(){
  currentFunction = new DrawingStraight(contextReal,contextDraft)
})

$('#curve-line').on('click',function(){
  currentFunction = new DrawingCurve(contextDraft,contextReal)
})


