// Apply previously selected theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const switchToggle = document.getElementById('themeSwitch');
  const theme = localStorage.getItem('theme') || 'dark';

  // Set HTML data attribute
  document.documentElement.setAttribute('data-theme', theme);

  // Set toggle state
  if (theme === 'light') {
    switchToggle.checked = true;
    document.getElementById('themeLabel').textContent = '☀️ Light Mode';
  } else {
    document.getElementById('themeLabel').textContent = '🌙 Dark Mode';
  }

  // Toggle Theme on Switch
  switchToggle.addEventListener('change', () => {
    const newTheme = switchToggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('themeLabel').textContent = newTheme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});