const tag = document.querySelector('.tag');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');

function handleMousemove(event) {
  const x = event.x;
  const y = event.y;

  vertical.style.left = x + 'px';
  horizontal.style.top = y + 'px';

  target.style.left = x + 'px';
  target.style.top = y + 'px';

  tag.style.left = x + 'px';
  tag.style.top = y + 'px';

  tag.innerHTML = `${x}px, ${y}px`;
}
document.addEventListener('mousemove', handleMousemove);
