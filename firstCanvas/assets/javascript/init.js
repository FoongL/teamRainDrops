
//------------------Pen Function Buttons
$('#drawLine').on('click', function() {
  console.log('I AM CLICKEDDDD');
  $("#funcDesc").html(`Pencil`);
  currentFunction = new PencilLine(contextReal, lineColor);
});

$('#graffiti').on('click', function() {
  $('#funcDesc').html('Spray Paint');
    currentFunction = new Graffiti(contextReal, lineColor);
  });
  $('#marker').on('click', function() {
    $('#funcDesc').html('Marker');
    currentFunction = new Marker(contextReal, lineColor);
  });
//------------------Selecter
$('#selector-button').on('click', function() {
  $('#funcDesc').html('Selector Tool');
  currentFunction = new Selecting(contextReal, contextDraft);
});
//------------------Colors
$('#fill').on('click', function() {
  $('#funcDesc').html('Paint Fill');
  currentFunction = new ColorFill(contextReal, contextDraft);
});

// David's Clicks
$('#drawingRect').on('click', function(){
  $('#funcDesc').html('Insert Rectangle');
  currentFunction = new DrawingRectangle(contextReal,contextDraft)
})

$('#drawingTriangle').on('click', function(){
  $('#funcDesc').html('Insert Triangle');
  currentFunction = new DrawingTriangle(contextReal, contextDraft)
})

$('#drawingCircle').on('click', function(){
  $('#funcDesc').html('Insert Circle');
  currentFunction = new DrawingCircle(contextReal, contextDraft)
})

$('#drawingPolygon').on('click', function(){
  $('#funcDesc').html('Draw Polygon');
  currentFunction = new DrawingPolygon(contextReal, contextDraft)
});

$('#drawingEraser').on('click', function(){
  $('#funcDesc').html('Eraser');
  currentFunction = new DrawingEraser(contextReal, contextDraft)
})

/* Image stamping */

$('#drawingImages').on('click', function(){
  $('.imagebox').toggle('show');
})

$('#imagebox1').click(function(){
  $('#funcDesc').html('Eggplant Emoji');
  currentFunction = new ImageEggplant(contextReal, contextDraft);
})

$('#imagebox2').click(function(){
  $('#funcDesc').html('Clown Emoji');
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
  $('#funcDesc').html('Canvas has been CLEARED');
  new clearCanvas(contextReal, contextDraft)
})

// Suruchi's Clicks
$('#straight-line').on('click',function(){
  $('#funcDesc').html('Straight Line');
  currentFunction = new DrawingStraight(contextReal,contextDraft)
})

$('#curve-line').on('click',function(){
  $('#funcDesc').html('Curved Line (Liam, I did this with NO help...)');
  currentFunction = new DrawingCurve(contextReal,contextDraft)
})
