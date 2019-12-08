//------------------Pen Function Buttons
$('#drawLine').on('click', function() {
  console.log('I AM CLICKEDDDD');
  $('#funcDesc').html(`Pencil`);
  $('#details').html(`Just a little something to help you draw stuff.`);
  currentFunction = new PencilLine(contextReal, lineColor);
});

$('#graffiti').on('click', function() {
  $('#funcDesc').html('Graffiti');
  $('#details').html(`To help you look like a real punk ass bitch`);
  currentFunction = new Graffiti(contextReal, lineColor);
});
$('#marker').on('click', function() {
  $('#funcDesc').html('Marker');
  $('#details').html(`"When you like them thick"`);
  currentFunction = new Marker(contextReal, lineColor);
});
//------------------Selecter
$('#selector-button').on('click', function() {
  $('#funcDesc').html('Selector tool');
  $('#details').html(`Allows you to cut out the ugly parts of your painting`);
  currentFunction = new Selecting(contextReal, contextDraft);
});
//------------------Colors
$('#fill').on('click', function() {
  $('#funcDesc').html('Paint Fill');
  $('#details').html(`Because you're too lazy to do this manually`);
  currentFunction = new ColorFill(contextReal, contextDraft);
});

// David's Clicks
$('#drawingRect').on('click', function() {
  $('#funcDesc').html('Rectangles baby!');
  $('#details').html(`That four sided thing`);
  currentFunction = new DrawingRectangle(contextReal, contextDraft);
});

$('#drawingTriangle').on('click', function() {
  $('#funcDesc').html('Triangles baby!');
  $('#details').html(`That three sided thing`);
  currentFunction = new DrawingTriangle(contextReal, contextDraft);
});

$('#drawingCircle').on('click', function() {
  $('#funcDesc').html('Balls');
  $('#details').html(`A tool for drawing circles`);
  currentFunction = new DrawingCircle(contextReal, contextDraft);
});

$('#drawingEraser').on('click', function() {
  $('#funcDesc').html('Eraser');
  $('#details').html(`Only losers make mistakes`);
  currentFunction = new DrawingEraser(contextReal, contextDraft);
});

/* Image stamping */

$('#drawingImages').on('click', function() {
  $('#funcDesc').html('Image Stamp');
  $('#details').html(`Handpicked with love`);
  $('.imagebox').toggle('show');
});

$('#imagebox1').click(function() {
  $('#funcDesc').html('The Eggplant');
  $('#details').html(`The most used emoji in the world`);
  currentFunction = new ImageEggplant(contextReal, contextDraft);
});

$('#imagebox2').click(function() {
  $('#funcDesc').html('The Clown');
  $('#details').html(`A very good representation of yourself`);
  currentFunction = new ImageClown(contextReal, contextDraft);
});

$('#imagebox3').click(function() {
  $('#funcDesc').html('The Eggplant');
  $('#details').html(`But yellow`);
  currentFunction = new ImageBanana(contextReal, contextDraft);
});

$('#imagebox4').click(function() {
  $('#funcDesc').html('Ice Cream');
  $('#details').html(`R-One has not had free Ice Cream in over a week`);
  currentFunction = new ImageIcecream(contextReal, contextDraft);
});

$('#imagebox5').click(function() {
  $('#funcDesc').html('Heart');
  $('#details').html(`Writing a function for it is too hard`);
  currentFunction = new ImageHeart(contextReal, contextDraft);
});

$('#imagebox6').click(function() {
  $('#funcDesc').html('Unicorn');
  $('#details').html(`Draws a unicorn`);
  currentFunction = new ImageUnicorn(contextReal, contextDraft);
});

$('#imagebox7').click(function() {
  $('#funcDesc').html('The Trash Panda');
  $('#details').html(`Draws a raccoon`);
  currentFunction = new ImageRaccoon(contextReal, contextDraft);
});

$('#imagebox8').click(function() {
  $('#funcDesc').html('The Predator');
  $('#details').html(`'Oh no.'`);
  currentFunction = new ImageBear(contextReal, contextDraft);
});
$('#imagebox9').click(function() {
  $('#funcDesc').html('Tomato');
  $('#details').html(`Butt Emoji`);
  currentFunction = new ImageTomato(contextReal, contextDraft);
});

$('#imagebox10').click(function() {
  $('#funcDesc').html('The Triangle');
  $('#details').html(`Defense Against the Dark Arts`);
  currentFunction = new ImageUnderwear(contextReal, contextDraft);
});

$('#imagebox11').click(function() {
  $('#funcDesc').html('The Cat');
  $('#details').html(`Man's bestfriend`);
  currentFunction = new ImageDog(contextReal, contextDraft);
});

$('#imagebox12').click(function() {
  $('#funcDesc').html('Monkey');
  $('#details').html(`A very good representation of yourself`);
  currentFunction = new ImageMonkey(contextReal, contextDraft);
});

$('#imagebox13').click(function() {
  $('#funcDesc').html('The Coder');
  $('#details').html(`You are not really reading this`);
  currentFunction = new ImageCat(contextReal, contextDraft);
});

$('#imagebox14').click(function() {
  $('#funcDesc').html('Flower');
  $('#details').html(`Smug looking little s***`);
  currentFunction = new ImageFlower(contextReal, contextDraft);
});

$('#imagebox15').click(function() {
  $('#funcDesc').html('Poop');
  $('#details').html(``);
  currentFunction = new ImagePoop(contextReal, contextDraft);
});

$('#imagebox16').click(function() {
  $('#funcDesc').html('Money');
  $('#details').html(`That which we do not have`);
  currentFunction = new ImageMoney(contextReal, contextDraft);
});

$('#clearCanvas').on('click', function() {
  $('#funcDesc').html('Clear Canvas');
  $('#details').html(`Only failures make big mistakes`);
  new clearCanvas(contextReal, contextDraft);
});

$('#drawingPolygon').on('click', function() {
  $('#funcDesc').html('PPOOLLYYGGOOONNN!!!');
  $('#details').html(`YEEEEEEEAAAAAA BABYYYYYY`);
  currentFunction = new DrawingPolygon(contextReal, contextDraft);
});

// Suruchi's Clicks
$('#straight-line').on('click', function() {
  $('#funcDesc').html('Straight Lines');
  $('#details').html(`Not Curved`);
  currentFunction = new DrawingStraight(contextReal, contextDraft);
});

$('#curve-line').on('click', function() {
  $('#funcDesc').html('Curved Lines');
  $('#details').html(`"Liam, I did this with NO help..." - Suruchi, 2019`);
  currentFunction = new DrawingCurve(contextReal, contextDraft);
});
