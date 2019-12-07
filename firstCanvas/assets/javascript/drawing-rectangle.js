class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    console.log(coord);
    this.contextReal.fillStyle = 'transparent';
    this.contextReal.strokeStyle = getHSL();
    this.contextReal.lineJoin = 'round';
    this.contextReal.lineCap = 'round';
    this.contextReal.lineWidth = getStroke();
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.strokeStyle = getHSL();
    this.contextDraft.lineWidth = getStroke();
    this.contextDraft.fillStyle = 'transparent';
    this.contextDraft.lineJoin = 'round';
    this.contextDraft.lineCap = 'round';
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(this.origX,this.origY,coord[0] - this.origX,coord[1] - this.origY);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], this.origY);
    this.contextDraft.stroke();
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(this.origX, coord[1]);
    this.contextDraft.stroke();
    // this.contextDraft.beginPath();
    // this.contextDraft.moveTo(this.origX, this.origY);
    // this.contextDraft.lineTo(this.origX, coord[1]);
    // this.contextDraft.stroke();
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.origX, coord[1]);
    this.contextDraft.stroke();
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(coord[0], coord[1]);
    this.contextDraft.lineTo(coord[0], this.origY);
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], this.origY);
    this.contextReal.stroke();
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(this.origX, coord[1]);
    this.contextReal.stroke();
    // this.contextReal.beginPath();
    // this.contextReal.moveTo(this.origX, this.origY);
    // this.contextReal.lineTo(this.origX, coord[1]);
    // this.contextReal.stroke();
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.contextReal.lineTo(this.origX, coord[1]);
    this.contextReal.stroke();
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0], coord[1]);
    this.contextReal.lineTo(coord[0], this.origY);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
