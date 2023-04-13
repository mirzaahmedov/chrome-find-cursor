const WIDTH = 60

let mouseX, mouseY;

window.addEventListener('mousemove', function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('keyup', function (e) {
  if (e.key === ' ' && e.ctrlKey) {
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
        div.style.border = '1000px solid rgba(255, 255, 0, 0.3)';
      });
    });
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
})
