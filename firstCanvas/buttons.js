$('#drawLine').on('click', function() {
  currentFunction = new DrawingLine(contextReal, contextDraft);
});

$('#drawRect').on('click', function() {
  currentFunction = new DrawingRectangle(contextReal, contextDraft);
});

$('#straight-line').on('click',function(){
  currentFunction = new DrawingStraight(contextReal,contextDraft)
})

$('#curve-line').on('click',function(){
  currentFunction = new DrawingCurve(contextDraft,contextReal)
})