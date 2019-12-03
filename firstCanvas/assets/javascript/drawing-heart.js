class DrawingHeart extends PaintFunction{
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
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.contextDraft.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.contextDraft.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.contextDraft.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.contextDraft.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.contextDraft.bezierCurveTo(85, 25, 75, 37, 75, 40);

        this.contextDraft.fill();
        this.contextDraft.stroke()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.lineTo((coord[0]+250),(coord[1]-0));
        this.contextReal.fill();
        this.contextReal.closePath()
        this.contextReal.stroke()
        
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

//d