// 1) سحب الخيط لتشغيل الإضاءة
const cord = document.getElementById('cord');
const title = document.getElementById('title');
cord.addEventListener('click', () => {
  cord.classList.remove('pulled'); void cord.offsetWidth; cord.classList.add('pulled');
  const off = document.body.classList.toggle('off');
  title.textContent = off ? 'اسحب الخيط… وخلّ البيت يضوي' : 'أهلاً بك في نور';
  cord.setAttribute('aria-label', off ? 'شغّل الإضاءة' : 'طفّ الإضاءة');
});

// 2) فلترة المنتجات
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  cards.forEach(card => {
    const show = chip.dataset.f === 'all' || card.dataset.c === chip.dataset.f;
    card.classList.toggle('hide', !show);
    if (show) { card.classList.remove('enter'); void card.offsetWidth; card.classList.add('enter'); }
  });
}));

// 3) حرارة اللون
const temp = document.getElementById('temp');
const room = document.getElementById('room');
const label = document.getElementById('tempLabel');
function updateTemp() {
  const v = +temp.value;
  const r = Math.round(255 - v * 0.2), g = Math.round(190 + v * 0.65), b = Math.round(110 + v * 1.4);
  room.style.background = `rgb(${r},${g},${b})`;
  label.textContent = v < 35 ? 'دافئة – للبيت' : v < 70 ? 'محايدة – للمطبخ' : 'باردة – للمكتب';
}
temp.addEventListener('input', updateTemp); updateTemp();
