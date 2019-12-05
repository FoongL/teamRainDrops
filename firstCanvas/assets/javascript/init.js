
//------------------Pen Function Buttons
$('#drawLine').on('click', function() {
  console.log('I AM CLICKEDDDD');
  $("#funcDesc").html(`Pencil Drawing Tool`);
  $("#details").html(`Just a little something to help you draw stuff.`);
  currentFunction = new PencilLine(contextReal, lineColor);
});

$('#graffiti').on('click', function() {
  $('#funcDesc').html('Graffiti Spray Paint');
  $("#details").html(`To help you looks like a real punk ass bitch`);
    currentFunction = new Graffiti(contextReal, lineColor);
  });
  $('#marker').on('click', function() {
    $('#funcDesc').html('Marker');
    $("#details").html(`for when the pencil just not think enough`);
    currentFunction = new Marker(contextReal, lineColor);
  });
//------------------Selecter
$('#selector-button').on('click', function() {
  $('#funcDesc').html('Selector tool');
  $("#details").html(`Allows you to cut out the ugly parts of your painting`);
  currentFunction = new Selecting(contextReal, contextDraft);
});
//------------------Colors
$('#fill').on('click', function() {
  $('#funcDesc').html("Paint Fill");
  $("#details").html(`Because you're too lazy to do this manually`);
  currentFunction = new ColorFill(contextReal, contextDraft);
});

// David's Clicks
$('#drawingRect').on('click', function(){
  $('#funcDesc').html('Rectangles baby!');
  $("#details").html(`That four sided thing`);
  currentFunction = new DrawingRectangle(contextReal,contextDraft)
})

$('#drawingTriangle').on('click', function(){
  $('#funcDesc').html('Triangles baby!');
  $("#details").html(`That three sided thing`);
  currentFunction = new DrawingTriangle(contextReal, contextDraft)
})

$('#drawingCircle').on('click', function(){
  $('#funcDesc').html('Circles Baby!');
  $("#details").html(`That no sided thing`);
  currentFunction = new DrawingCircle(contextReal, contextDraft)
})

$('#drawingPolygon').on('click', function(){
  $('#funcDesc').html('PPPOOOLLLYYYGGGOOONNN!!!');
  $("#details").html(`YEEEEEEEAAAAAA BABYYYYYY`);
  currentFunction = new DrawingPolygon(contextReal, contextDraft)
});

$('#drawingEraser').on('click', function(){
  $('#funcDesc').html('Eraser');
  $("#details").html(`Only losers make mistakes`);
  currentFunction = new DrawingEraser(contextReal, contextDraft)
})

/* Image stamping */

$('#drawingImages').on('click', function(){
  $('#funcDesc').html('Pick one of our friendly emojis to add color into your dark lonely existence.');
  $("#details").html(``);
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
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageBanana(contextReal, contextDraft);
})

$('#imagebox4').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageIcecream(contextReal, contextDraft);
})

$('#imagebox5').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageHeart(contextReal, contextDraft);
})

$('#imagebox6').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageUnicorn(contextReal, contextDraft);
})

$('#imagebox7').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageRaccoon(contextReal, contextDraft);
})

$('#imagebox8').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageBear(contextReal, contextDraft);
})
  
$('#imagebox9').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageTomato(contextReal, contextDraft);
})
  
$('#imagebox10').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageUnderwear(contextReal, contextDraft);
})
  
$('#imagebox11').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageDog(contextReal, contextDraft);
})

$('#imagebox12').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageMonkey(contextReal, contextDraft);
})

$('#imagebox13').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageCat(contextReal, contextDraft);
})

$('#imagebox14').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageFlower(contextReal, contextDraft);
})

$('#imagebox15').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImagePoop(contextReal, contextDraft);
})

$('#imagebox16').click(function(){
  $('#funcDesc').html('Clown Emoji');
  currentFunction = new ImageMoney(contextReal, contextDraft);
})
  
$('#clearCanvas').on('click', function(){
  $('#funcDesc').html('Clear Canvas');
  $("#details").html(`Only failures make big mistakes`);
  new clearCanvas(contextReal, contextDraft)
})

// Suruchi's Clicks
$('#straight-line').on('click',function(){
  $('#funcDesc').html('Straight Lines');
  $("#details").html(``);
  currentFunction = new DrawingStraight(contextReal,contextDraft)
})

$('#curve-line').on('click',function(){
  $('#funcDesc').html('Curved Lines');
  $("#details").html(`"Liam, I did this with NO help..." - Suruchi, 2019`);
  currentFunction = new DrawingCurve(contextReal,contextDraft)
})
