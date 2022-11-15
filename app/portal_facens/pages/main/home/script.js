function openSub() {
  var btn = document.querySelector('#btn-title');
  var display = document.querySelector('#sub-title').style.display;
  if (display == 'none') {
    document.querySelector('#sub-title').style.display = 'block';
    btn.style.background = '#0099F2';
    btn.style.color = 'white';
    btn.style.borderRight = '8px solid #005C9E';
  } else {
    document.querySelector('#sub-title').style.display = 'none';
    btn.style.background = 'white';
    btn.style.color = '#005C9E';
    btn.style.borderRight = '';
  }
}
