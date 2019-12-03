class PencilLine extends PaintFunction {
  constructor(contextReal, lineColor) {
    super();
    this.context = contextReal;
    this.lineColor = getHSL();
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = getHSL();
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}

class Graffiti extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.lastPoint = {};
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = getHSL();
    this.lineJoin = 'round';
    this.lineCap = 'round';
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
    this.lastPoint = { x: event.offsetX, y: event.offsetY };
  }

  onDragging(coord, event) {
    function distanceBetween(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }
    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }
    var currentPoint = { x: event.offsetX, y: event.offsetY };
    var dist = distanceBetween(this.lastPoint, currentPoint);
    var angle = angleBetween(this.lastPoint, currentPoint);

    for (var i = 0; i < dist; i += 5) {
      let x = this.lastPoint.x + Math.sin(angle) * i;
      let y = this.lastPoint.y + Math.cos(angle) * i;

      var radgrad = this.context.createRadialGradient(x, y, 10, x, y, 20);

      radgrad.addColorStop(0, getHSL());
      // console.log(getHSL().split(','))
      let hsla = getHSL().split(',');
      let h = hsla[0].split('(')[1];
      let s = hsla[1];
      let l = hsla[2];
      let a = hsla[3];
      a = a.substring(0,a.length -1)
      let aOne = a*0.5
      let aTwo = a*0.1
      radgrad.addColorStop(0.5, `hsla(${h}, ${s}, ${l}, 0.5`);
      radgrad.addColorStop(1, `hsla(${h}, ${s}, ${l}, 0)`);

      this.context.fillStyle = radgrad;
      this.context.fillRect(x - 20, y - 20, 40, 40);
    } 
    this.lastPoint = currentPoint;
  }
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}

class Marker extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
    this.lastPoint = {};
    this.context.lineWidth = 5;
    this.context.lineJoin = 'round';
    this.context.lineCrap = 'round';
    this.lineColor = getHSL();
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = getHSL();
    this.lineWidth = 19;
    this.lineCap = 'round';
    this.lineJoin = 'round';
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
    this.lastPoint = { x: coord[0], y: coord[1] };
  }

  onDragging(coord, event) {
    this.context.beginPath();
    this.lineWidth = 2;

    this.context.globalAlpha = 1;
    this.context.moveTo(this.lastPoint.x - 4, this.lastPoint.y - 4);
    this.context.lineTo(coord[0] - 4, coord[1] - 4);
    this.context.stroke();

    this.context.globalAlpha = 0.6;
    this.context.moveTo(this.lastPoint.x - 2, this.lastPoint.y - 2);
    this.context.lineTo(coord[0] - 2, coord[1] - 2);
    this.context.stroke();

    this.context.globalAlpha = 0.4;
    this.context.moveTo(this.lastPoint.x, this.lastPoint.y);
    this.context.lineTo(coord[0], coord[1]);
    this.context.stroke();

    this.context.globalAlpha = 0.3;
    this.context.moveTo(this.lastPoint.x + 2, this.lastPoint.y + 2);
    this.context.lineTo(coord[0] + 2, coord[1] + 2);
    this.context.stroke();

    this.context.globalAlpha = 0.2;
    this.context.moveTo(this.lastPoint.x + 4, this.lastPoint.y + 4);
    this.context.lineTo(coord[0] + 4, coord[1] + 4);
    this.context.stroke();

    this.lastPoint = { x: coord[0], y: coord[1] };
    this.context.globalAlpha = 1
  }

  onMouseMove() {}
  onMouseUp() {
    this.context.globalAlpha = 1
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}

class Liam extends PaintFunction {
  constructor(contextReal, liam) {
    super();
    this.context = contextReal;
    this.lastPoint = {};
    this.context.lineWidth = 25;
    this.context.lineJoin = 'round';
    this.context.lineCrap = 'round';
    this.liam = liam;
    this.liamSource =
      'https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.0-9/p960x960/76762637_10215845508156918_8517767983102164992_o.jpg?_nc_cat=100&_nc_ohc=uL0fBM8D_P0AQni_8csMhOk76VhK9p_fay9n1mxdBRAoe_cvE3PC0_U-w&_nc_ht=scontent.fhkg4-1.fna&oh=ecd1487f52b5b64d425fc5371ffa8801&oe=5E471005';
  }

  onMouseDown(coord, event) {
    let liamImage = new Image();
    liamImage.src = this.liamSource;
    console.log(liamImage);
    function getPattern() {
      return this.context.createPattern(liamImage, 'repeat');
    }

    liamImage.onload = function() {
      this.context.strokeStyle = getPattern();
    };

    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.lineWidth = 25;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
