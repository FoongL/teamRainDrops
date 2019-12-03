class StampPan extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }
    onMouseDown(coord, event) {
        var img = new Image();
        img.src = './img/pan.png';
        img.onload =  () => {
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onDragging(coord, event){
        var img = new Image();
        img.src = './img/pan.png';
        img.onload =  () => {  
            this.context.drawImage(img, coord[0], coord[1], 150, 150);
        }
    }
    onMouseUp(){
        // History
        history.push($('#canvas-real')[0].toDataURL());
    }
}