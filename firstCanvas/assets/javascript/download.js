function download() {
  let ourCanvas = $('#canvas-real');
  var downloadClick = $('#download');
  var image = ourCanvas[0]
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream');
    downloadClick[0].setAttribute('href', image);
}
