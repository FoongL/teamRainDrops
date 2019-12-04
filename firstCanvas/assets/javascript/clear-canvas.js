class clearCanvas extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.contextReal.fillStyle = 'rgba(255, 255, 255,1)';  
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(0,0,canvasReal.width,canvasReal.height);
        beforeDraw()      
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}


//d