$('#drawLine').on('click', function() {
  currentFunction = new DrawingLine(contextReal, contextDraft);
});

$('#drawRect').on('click', function() {
  currentFunction = new DrawingRectangle(contextReal, contextDraft);
});
