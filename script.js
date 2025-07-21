document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = `${savedTheme}-mode`;
    updateThemeIcon(savedTheme);

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.className.includes('light') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.className = `${newTheme}-mode`;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'light' ? 'moon icon' : 'sun icon';
    }

    // Add smooth scroll for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.style.opacity = '0.5';
            setTimeout(() => {
                link.style.opacity = '1';
                window.open(link.href, '_blank');
            }, 300);
        });
    });

    // Add a subtle parallax effect to clouds on mouse move
    document.addEventListener('mousemove', (e) => {
        const clouds = document.querySelectorAll('.cloud');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        clouds.forEach((cloud, index) => {
            const speed = (index + 1) * 2;
            const offsetX = (mouseX - 0.5) * speed;
            const offsetY = (mouseY - 0.5) * speed;
            
            let scale = 1.5;
            if (cloud.classList.contains('cloud2')) scale = 1.2;
            else if (cloud.classList.contains('cloud3')) scale = 0.8;
            else if (cloud.classList.contains('cloud4')) scale = 0.6;
            else if (cloud.classList.contains('cloud5')) scale = 0.6;
            
            cloud.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        });
    });
});
