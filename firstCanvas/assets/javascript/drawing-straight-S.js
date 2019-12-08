class DrawingStraight extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = getHSL();
    this.contextReal.lineWidth = getStroke();
    this.contextReal.lineJoin = 'round';
    this.contextReal.lineCap = 'round';
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.strokeStyle = getHSL();
    this.contextDraft.lineWidth = getStroke();
    this.contextDraft.lineJoin = 'round';
    this.contextDraft.lineCap = 'round';
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
