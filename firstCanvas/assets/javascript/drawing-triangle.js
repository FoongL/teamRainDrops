class DrawingTriangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;           
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "transparent";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.lineTo(this.origX+(this.origX-coord[0]),(coord[1]));
        this.contextDraft.fill();
        this.contextDraft.closePath()
        this.contextDraft.stroke()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.lineTo(this.origX+(this.origX-coord[0]),(coord[1]));
        this.contextReal.fill();
        this.contextReal.closePath()
        this.contextReal.stroke()
        
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

//d
