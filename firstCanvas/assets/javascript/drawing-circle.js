class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        console.log(coord)
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(coord[0], coord[1], coord[1]-this.origY, 0, 2*Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(coord[0], coord[1], coord[1]-this.origY, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke()
        
    }
    onMouseLeave(){}
    onMouseEnter(){}
}


//d