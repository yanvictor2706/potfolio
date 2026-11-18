
document.getElementById('year').textContent = new Date().getFullYear();


const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'todos' || filter === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

o
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailStatus = document.getElementById('email-status');

copyEmailBtn.addEventListener('click', () => {
  const email = 'yanvictor@email.com';
  navigator.clipboard.writeText(email).then(() => {
    emailStatus.textContent = 'E-mail copiado!';
    emailStatus.style.color = '#10b981';
    setTimeout(() => {
      emailStatus.textContent = 'Clique para copiar';
      emailStatus.style.color = '#94a3b8';
    }, 3000);
  });
});


const sections = document.querySelectorAll('header, section, footer');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentId = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 180;
    if (window.scrollY >= top) {
      currentId = sec.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
});