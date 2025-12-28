const bookBtn = document.getElementById('bookBtn');
const daySelect = document.getElementById('day');
const timeSelect = document.getElementById('time');
const popup = document.getElementById('popup');

bookBtn.addEventListener('click', () => {
  const day = daySelect.value;
  const time = timeSelect.value;

  popup.innerText = `Appointment booked for ${day} at ${time} / Foglalás: ${day} ${time}`;
  popup.style.display = 'block';
  popup.style.opacity = 0;

  // Fade-in animáció
  let op = 0;
  const interval = setInterval(() => {
    if(op >= 1) clearInterval(interval);
    popup.style.opacity = op;
    op += 0.05;
  }, 30);

  // 2 másodperc után eltűnik
  setTimeout(() => popup.style.display='none',2000);
});
