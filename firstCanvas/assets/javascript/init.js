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
