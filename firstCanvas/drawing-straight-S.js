class DrawingStraight extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal=contextReal;
        this.contextDraft=contextDraft;
    }
    onMouseDown(coord,event){
        this.contextReal.strokestyle="#000";
        this.lineWidth = 5;
        this.origX=coord[0];
        this.origY=coord[1];
        
    }
    onDragging(coord,event){
        this.contextDraft.strokestyle="blue";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0], coord[1])
        this.contextDraft.stroke()
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0], coord[1])
        this.contextReal.stroke()
    }
    onMouseLeave(){}
    onMouseEnter(){}
    

}    


/* 

canvas api
1. understand begin path.
2. move to
3. line to
4. stroke

5. think of how the canvas api will be effected by user input
6. match the canvas methods to the mouse events
7. pass the canvas methods mouse coordinates
8. trail and error until you get the planned effect

*/
