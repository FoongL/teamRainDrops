class ColorFill extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.pixelStack = [];
    this.imgData;
    this.clickPoint;
    this.red;
    this.green;
    this.blue;
    this.rgb;
    this.test = [];
    this.result;
  }
  onMouseDown(coord) {
    let hsl = getHSL().split(',');
    let h = Number(hsl[0].split('(')[1]);
    let s = Number(hsl[1].split('%')[0])/ 100;
    let l = Number(hsl[2].split('%')[0])/ 100;
    this.rgb = this.hslToRgb(h, s, l);
    this.contextReal.fillStyle = getHSL();
    this.imgData = this.contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );
    this.checkColor(coord);
    this.colorCombining();
    this.compare();
    if (this.result == true) {
      this.test = [];
    } else if (this.result == false) {
      this.floodFill(coord);
      this.contextReal.putImageData(this.imgData, 0, 0);
      this.test = [];
    }
  }
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  compare() {
    var arr1 = this.rgb;
    var arr2 = this.test;
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
      this.result = true;
    } else if (JSON.stringify(arr1) != JSON.stringify(arr2)) {
      this.result = false;
    }
  }

  colorCombining() {
    this.test.push(this.red + '');
    this.test.push(this.green + '');
    this.test.push(this.blue + '');
  }

  checkColor(coord) {
    this.clickPoint = (coord[1] * canvasReal.width + coord[0]) * 4;
    this.red = this.imgData.data[this.clickPoint];
    this.green = this.imgData.data[this.clickPoint + 1];
    this.blue = this.imgData.data[this.clickPoint + 2];
  }

  floodFill(coord) {
    var newPos, x, y, pixelPos, reachLeft, reachRight;
    //add task to pixel stack
    this.pixelStack.push(coord);
    while (this.pixelStack.length) {
      //set new locaiton from pixel stack
      newPos = this.pixelStack.pop();
      x = newPos[0];
      y = newPos[1];

      //set new pixel location
      pixelPos = (y * canvasReal.width + x) * 4;

      //go up as long as the color matches and are inside the canvas (return true)
      while (y >= 0 && this.matchStartColor(pixelPos)) {
        y -= 1;
        pixelPos -= canvasReal.width * 4;
      }
      //update
      pixelPos += canvasReal.width * 4;
      y += 1;

      //initialize for addition of pixel stack
      reachLeft = false;
      reachRight = false;

      //go down as long as the color matches in inside the canvas
      while (y <= canvasReal.height - 1 && this.matchStartColor(pixelPos)) {
        this.colorPixel(pixelPos);
        y += 1;

        if (x > 0) {
          if (this.matchStartColor(pixelPos - 4)) {
            if (!reachLeft) {
              this.pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          } else if (reachLeft) {
            reachLeft = false;
          }
        }

        if (x < canvasReal.width - 1) {
          if (this.matchStartColor(pixelPos + 4)) {
            if (!reachRight) {
              this.pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }
        pixelPos += canvasReal.width * 4;
      }
    }
  }
  matchStartColor(pixelPos) {
    var re = this.imgData.data[pixelPos];
    var gr = this.imgData.data[pixelPos + 1];
    var bl = this.imgData.data[pixelPos + 2];
    return re === this.red && gr === this.green && bl === this.blue;
  }
  //fill color
  colorPixel(pixelPos) {
    this.imgData.data[pixelPos] = this.rgb[0];
    this.imgData.data[pixelPos + 1] = this.rgb[1];
    this.imgData.data[pixelPos + 2] = this.rgb[2];
    this.imgData.data[pixelPos + 3] = 255;
  }

  hslToRgb = function(hue, saturation, lightness){
    // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
    if( hue == undefined ){
      return [0, 0, 0];
    }
  
    var chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;
    var huePrime = hue / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
  
    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;
  
    if( huePrime === 0 ){
      red = chroma;
      green = secondComponent;
      blue = 0;
    }else if( huePrime === 1 ){
      red = secondComponent;
      green = chroma;
      blue = 0;
    }else if( huePrime === 2 ){
      red = 0;
      green = chroma;
      blue = secondComponent;
    }else if( huePrime === 3 ){
      red = 0;
      green = secondComponent;
      blue = chroma;
    }else if( huePrime === 4 ){
      red = secondComponent;
      green = 0;
      blue = chroma;    
    }else if( huePrime === 5 ){
      red = chroma;
      green = 0;
      blue = secondComponent;
    }
  
    var lightnessAdjustment = lightness - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;
  
    return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
  
  };
}
