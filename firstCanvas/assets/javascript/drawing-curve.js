class DrawingCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.newLine = true;
  }

  onMouseDown(coord, event) {
    if (this.newLine == true) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextReal.lineJoin = 'round';
      this.contextReal.lineCap = 'round';
      this.contextReal.strokeStyle = getHSL();
      this.contextReal.lineWidth = getStroke();
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
    } else {
    }
  }

  onDragging(coord, event) {
    if (this.newLine == true) {
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.closePath();
      this.contextDraft.lineJoin = 'round';
      this.contextDraft.lineCap = 'round';
      this.contextDraft.strokeStyle = getHSL();
      this.contextDraft.lineWidth = getStroke();
      this.drawCurve([this.origX, this.origY]);
    } else {
      this.drawCurve(coord);
      this.drawCircle([coord[0], coord[1]]);
    }
  }

  onMouseUp(coord, event) {
    if (this.newLine == true) {
      this.centerX = (this.origX + this.endX) / 2;
      this.centerY = (this.origY + this.endY) / 2;
      this.drawCircle([this.centerX, this.centerY]);
      this.newLine = false;
    } else {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.endX,
        this.endY
      );
      this.contextReal.stroke();
      this.newLine = true;
    }
  }

  onMouseMove() {}
  onMouseLeave() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  }
  onMouseEnter() {}

  drawCurve(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.quadraticCurveTo(
      coord[0],
      coord[1],
      this.endX,
      this.endY
    );
    this.contextDraft.stroke();
  }
  drawCircle(coord) {
    this.contextDraft.beginPath();
    this.contextDraft.arc(coord[0], coord[1], 5, 0, 2 * Math.PI);
    this.contextDraft.stroke();
    this.contextDraft.fill();
  }
}
