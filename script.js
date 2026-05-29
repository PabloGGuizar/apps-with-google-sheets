document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Add a simple mouse move effect for the glow blobs to make it feel more dynamic
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');
        
        // Very subtle movement based on mouse position
        if(blob1) blob1.style.transform = `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`;
        if(blob2) blob2.style.transform = `translate(${mouseX * -0.02}px, ${mouseY * -0.02}px)`;
    });

    // Modal Logic
    const modal = document.getElementById('customModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeSpan = document.querySelector('.close-modal');

    if(openModalBtn && modal) {
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('show');
        });
    }

    const closeModal = () => {
        if(modal) {
            modal.classList.remove('show');
        }
    };

    if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if(closeSpan) closeSpan.addEventListener('click', closeModal);

    // Close when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
