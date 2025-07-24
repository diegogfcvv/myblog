document.addEventListener('DOMContentLoaded', function() {
  // Target all elements containing "minute read"
  const timeElements = document.querySelectorAll('.text-slate-500, .text-slate-400');
  
  timeElements.forEach(el => {
    if (el.textContent.includes('minute read')) {
      const text = el.textContent
        .replace('minute read', 'm. de lectura')  // Singular
        .replace('minutes read', 'm. de lectura'); // Plural
      el.textContent = text;
    }
  });
});