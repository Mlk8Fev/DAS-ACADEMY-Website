// Animation du logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo img');
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
        logo.style.transition = 'all 1s ease-in-out';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }, 500);
});

// Animation du texte DAS'ACADEMY
function animateText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text[index];
        setTimeout(() => animateText(element, text, index + 1), 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.hero__caption h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    setTimeout(() => {
        animateText(title, originalText);
    }, 1000);
}); 