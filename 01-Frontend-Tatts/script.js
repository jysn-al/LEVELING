window.addEventListener('scroll', function() {
    const nav = document.querySelector('#nav-section');
    
    if (window.scrollY > 50) {  // Adjust this value to control when the background changes
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.getElementById('btn-book-now').addEventListener('click', function() {
    document.getElementById('contacts').scrollIntoView({
        behavior: 'smooth'  // Smooth scrolling effect
    });
});
