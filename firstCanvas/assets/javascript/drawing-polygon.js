// class DrawingPolygon extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;    
//         this.coords = [];
//         this.newPolygon = true;        
//     }
    
//     onMouseDown(coord,event){
//         console.log(coord)
//         this.contextReal.fillStyle = "#f44";
//         if (this.newPolygon) {
//             this.coords = [];
//             this.origX = this.newX = coord[0];
//             this.origY = this.newY = coord[1];
//         } else {
//             this.newLine(this.newX, this.newY, coord [0], coord[1], this.contextDraft); 
//         }
//     }
//     onDragging(coord,event){
//         this.contextDraft.fillStyle = "#f44";
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this..contextDraft.newLine(this.newX, this.newY, coord[0], coord[1]);
//     }

//     onMouseMove(){}
//     onMouseUp(coord){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.newLine(this.newX, this.newY, coord[0], coord[1]);
//         this.coords.push(coord);
//         this.newX = coord[0];
//         this.newY = coord[1];       
//     }

//     newLine (x1, y1, x2, y2, context) {
//         context.beginPath();
//         context.moveTo(x1, y1);
//         context.lineTo(x2, y2);
//         context.stroke();    
//     }

//     onMouseLeave(){
//         this.contextReal.beginPath();
//         this.contextReal.moveTo(this.newX, this.newY);
//         this.contextReal.lineTo(this.origX, this.origY);
//         this.contextReal.stroke();
//         this.contextReal.fill();
//         this.coords = [];
//         this.newPolygon = true;      
//     }

//     onMouseEnter(){}
// }

// // d