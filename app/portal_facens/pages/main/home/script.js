function openSub() {
  var btn = document.querySelector('#btn-title');
  var display = document.querySelector('#sub-title').style.display;
  if (display == 'none') {
    document.querySelector('#sub-title').style.display = 'block';
    btn.style.background = '#0099F2';
    btn.style.color = 'white';
  } else {
    document.querySelector('#sub-title').style.display = 'none';
    btn.style.background = 'white';
    btn.style.color = '#005C9E';

  }
}
