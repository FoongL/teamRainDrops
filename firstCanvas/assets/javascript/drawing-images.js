class ImageEggplant extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
    }
    onMouseDown(coord, event) {
        let img = new Image();
        img.src = './assets/images/imageicon/eggplant.png';
        img.onload =  () => {
            this.contextReal.drawImage(img, coord[0], coord[1], 100, 100);
        }
    }
    onDragging(){}
    onMouseUp(){}
}

class ImageClown extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
    }
    onMouseDown(coord, event) {
        let img = new Image();
        img.src = './assets/images/imageicon/clown.png';
        img.onload =  () => {
            this.contextReal.drawImage(img, coord[0], coord[1], 100, 100);
        }
    }
    onDragging(){}
    onMouseUp(){}
}



