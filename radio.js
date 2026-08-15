/**
 * ZaryaR Radio Window Controller
 * Features: Draggable window, Minimizable to bottom dock / taskbar, Restore functionality.
 */
(function() {
  const radioWindow = document.getElementById('radio-window');
  const titlebar = document.getElementById('radio-titlebar');
  const minBtn = document.getElementById('radio-min-btn');
  const taskbar = document.getElementById('taskbar');
  const taskbarBtn = document.getElementById('taskbar-radio-btn');

  if (!radioWindow || !titlebar || !minBtn || !taskbar || !taskbarBtn) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  // Pointer drag start
  titlebar.addEventListener('pointerdown', (e) => {
    // Ignore clicks on window action buttons
    if (e.target.closest('.win-btn')) return;

    isDragging = true;
    radioWindow.classList.add('is-dragging');
    titlebar.setPointerCapture(e.pointerId);

    const winRect = radioWindow.getBoundingClientRect();
    startX = e.clientX - winRect.left;
    startY = e.clientY - winRect.top;
  });

  // Pointer drag move
  titlebar.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    let newLeft = e.clientX - startX;
    let newTop = e.clientY - startY;

    // Viewport bounds protection
    const winWidth = radioWindow.offsetWidth;
    const winHeight = radioWindow.offsetHeight;
    const maxLeft = window.innerWidth - winWidth;
    const maxTop = window.innerHeight - winHeight;

    newLeft = Math.max(8, Math.min(newLeft, Math.max(8, maxLeft - 8)));
    newTop = Math.max(8, Math.min(newTop, Math.max(8, maxTop - 8)));

    radioWindow.style.left = `${newLeft}px`;
    radioWindow.style.top = `${newTop}px`;
    radioWindow.style.right = 'auto';
    radioWindow.style.bottom = 'auto';
  });

  // Pointer drag end
  const stopDrag = (e) => {
    if (isDragging) {
      isDragging = false;
      radioWindow.classList.remove('is-dragging');
      try {
        if (e && e.pointerId) {
          titlebar.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    }
  };

  titlebar.addEventListener('pointerup', stopDrag);
  titlebar.addEventListener('pointercancel', stopDrag);

  // Minimize window
  minBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    radioWindow.classList.add('minimized');
    taskbar.classList.add('visible');
  });

  // Restore window from taskbar dock
  taskbarBtn.addEventListener('click', () => {
    radioWindow.classList.remove('minimized');
    taskbar.classList.remove('visible');
  });

  // Keep window in bounds on viewport resize
  window.addEventListener('resize', () => {
    const winRect = radioWindow.getBoundingClientRect();
    const maxLeft = window.innerWidth - radioWindow.offsetWidth;
    const maxTop = window.innerHeight - radioWindow.offsetHeight;

    if (winRect.left > maxLeft && maxLeft > 0) {
      radioWindow.style.left = `${Math.max(8, maxLeft - 8)}px`;
    }
    if (winRect.top > maxTop && maxTop > 0) {
      radioWindow.style.top = `${Math.max(8, maxTop - 8)}px`;
    }
  }, { passive: true });
})();
