document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.getElementById('projects-section');
    const projectsContainer = document.getElementById('projects-container');

    // addProject('Project Name', 'Description', 'flutter');
    function addProject(title, description, tech) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-tech', tech);
        
        projectCard.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
        `;

        projectsContainer.appendChild(projectCard);
        
        if (!projectsSection.classList.contains('visible')) {
            projectsSection.classList.add('visible');
        }
    }

    // Fade in animation
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    const techIcons = {
        flutter: '<i class="fab fa-flutter"></i>',
        cpp: '<i class="fab fa-cuttlefish"></i>',
        python: '<i class="fab fa-python"></i>'
    };

    projectCards.forEach(card => {
        const tech = card.getAttribute('data-tech');
        if (tech && techIcons[tech]) {
            const icon = document.createElement('div');
            icon.innerHTML = techIcons[tech];
            icon.style.fontSize = '2rem';
            icon.style.marginBottom = '1rem';
            card.insertBefore(icon, card.firstChild);
        }
    });
}); 