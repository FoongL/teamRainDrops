class DrawingCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft=contextDraft;
        this.counter= 0;            
    }
    onMouseDown(coord,event){

        //this will increase the counter
        this.counter +=1;

        //this gives color to the lines 
        this.contextReal.strokestyle="#000";
        this.lineWidth = 5;

        //if it's any odd click
        if ((this.counter%2)!=0) 
        {
        this.origX=coord[0];
        this.origY=coord[1];
        console.log(this.origX,this.origY);
        
    }
        // on an even click
        else if ((this.counter)%2==0){
            this.cp1=coord[0]; //capturing the control points
            this.cp2=coord[1];
            console.log(this.cp1,this.cp2);
            
        }
        
    }
    onDragging(coord,event){
        
        this.contextDraft.strokestyle="blue";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0], coord[1])
        this.contextDraft.stroke();
        this.origX1=coord[0];
        this.origY1=coord[1];
    
    }

    onMouseUp(coord){
        if ((this.counter%2)==0) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.quadraticCurveTo(this.cp1,this.cp2, this.origX1,this.origY1);
            this.contextReal.lineTo(this.origX1,this.origY1);
            this.contextReal.stroke();
            this.contextReal.closePath();
        
        }
        else {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(this.origX1,this.origY1);
        this.contextDraft.stroke();
        }
    }
    
    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}
}
