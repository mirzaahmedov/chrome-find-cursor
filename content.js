const WIDTH = 60

let mouseX = null, 
    mouseY = null,
    ctrlKey = false

document.addEventListener('mouseleave', function () {
  mouseX = null;
  mouseY = null;
});
document.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Control') {
    ctrlKey = true;
  }
});
document.addEventListener('keyup', function (e) {
  if (e.key === 'Control') {
    ctrlKey = false;
  }
  if (e.key === ' ' && ctrlKey && mouseX !== null && mouseY !== null) {
    const div = document.createElement('div');
    div.style.boxSizing = 'content-box';
    div.style.position = 'fixed';
    div.style.left = mouseX + 'px';
    div.style.top = mouseY + 'px';
    div.style.width = WIDTH + 'px';
    div.style.height = WIDTH + 'px';
    div.style.borderRadius = '50%';
    div.style.border = '0px solid rgba(255, 255, 0, 0.8)';
    div.style.zIndex = 999999;
    div.style.transform = 'translate(-50%, -50%)'
    div.style.transition = 'border-width 1s 0s, border-color 0.8s 0.2s';
    document.body.appendChild(div);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        div.style.border = '500px solid rgba(255, 255, 0, 0.0)';
      });
    });
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
})
