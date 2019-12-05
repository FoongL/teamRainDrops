
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

$('#imagebox3').click(function(){
  currentFunction = new ImageBanana(contextReal, contextDraft);
})

$('#imagebox4').click(function(){
  currentFunction = new ImageIcecream(contextReal, contextDraft);
})

$('#imagebox5').click(function(){
  currentFunction = new ImageHeart(contextReal, contextDraft);
})

$('#imagebox6').click(function(){
  currentFunction = new ImageUnicorn(contextReal, contextDraft);
})

$('#imagebox7').click(function(){
  currentFunction = new ImageRaccoon(contextReal, contextDraft);
})

$('#imagebox8').click(function(){
  currentFunction = new ImageBear(contextReal, contextDraft);
})
  
$('#imagebox9').click(function(){
  currentFunction = new ImageTomato(contextReal, contextDraft);
})
  
$('#imagebox10').click(function(){
  currentFunction = new ImageUnderwear(contextReal, contextDraft);
})
  
$('#imagebox11').click(function(){
  currentFunction = new ImageDog(contextReal, contextDraft);
})

$('#imagebox12').click(function(){
  currentFunction = new ImageMonkey(contextReal, contextDraft);
})

$('#imagebox13').click(function(){
  currentFunction = new ImageCat(contextReal, contextDraft);
})

$('#imagebox14').click(function(){
  currentFunction = new ImageFlower(contextReal, contextDraft);
})

$('#imagebox15').click(function(){
  currentFunction = new ImagePoop(contextReal, contextDraft);
})

$('#imagebox16').click(function(){
  currentFunction = new ImageMoney(contextReal, contextDraft);
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
