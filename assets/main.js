function toggleNav(){
  const links = document.querySelector('.navlinks');
  links.classList.toggle('open');
}
window.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const upd = document.getElementById('updated');
  if (upd) upd.textContent = new Date(document.lastModified).toLocaleDateString('de-DE');
});
