const photos = [
  '004-untitled-29_twilight.jpg','006-untitled-22_twilight.jpg','035-untitled-15.jpg','042-untitled-22.jpg',
  '052-untitled-32.jpg','053-untitled-33.jpg','061-untitled-41.jpg','063-untitled-43.jpg',
  '065-untitled-45.jpg','067-untitled-47.jpg','070-untitled-50.jpg','073-untitled-53.jpg',
  '077-untitled-57.jpg','079-untitled-59.jpg','082-untitled-62.jpg','085-untitled-65.jpg',
  '090-untitled-70.jpg','094-untitled-74.jpg','095-untitled-75.jpg','098-untitled-78.jpg',
  '099-untitled-79.jpg','100-untitled-80.jpg','105-untitled-85.jpg','109-inlaw-suite-bedroom.jpg'
];
const gallery = document.getElementById('photoGallery');
photos.forEach((file, index) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('aria-label', `Open property photo ${index + 1}`);
  const img = document.createElement('img');
  img.src = `${file}`;
  img.alt = `Beach & Bay Getaway property photo ${index + 1}`;
  img.loading = 'lazy';
  btn.appendChild(img);
  btn.addEventListener('click', () => openLightbox(index));
  gallery.appendChild(btn);
});

let current = 0;
const box = document.getElementById('lightbox');
const boxImg = document.getElementById('lightboxImage');
function show(i){ current=(i+photos.length)%photos.length; boxImg.src=`${photos[current]}`; }
function openLightbox(i){ show(i); box.classList.add('open'); box.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeLightbox(){ box.classList.remove('open'); box.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
document.getElementById('lightboxClose').onclick=closeLightbox;
document.getElementById('lightboxPrev').onclick=()=>show(current-1);
document.getElementById('lightboxNext').onclick=()=>show(current+1);
box.addEventListener('click',e=>{ if(e.target===box) closeLightbox(); });
document.addEventListener('keydown',e=>{ if(!box.classList.contains('open')) return; if(e.key==='Escape') closeLightbox(); if(e.key==='ArrowLeft') show(current-1); if(e.key==='ArrowRight') show(current+1); });
document.getElementById('year').textContent=new Date().getFullYear();
