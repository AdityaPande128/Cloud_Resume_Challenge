lucide.createIcons();


const sections = document.querySelectorAll('.fade-in-section');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


const skillTabs = document.querySelectorAll('.skill-tab');
const skillContents = {
    languages: document.getElementById('languages-tab'),
    tools: document.getElementById('tools-tab'),
    certs: document.getElementById('certs-tab')
};

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;

        
        skillTabs.forEach(t => {
            t.classList.remove('skill-tab-active');
            t.classList.add('text-slate-400');
        });
        tab.classList.add('skill-tab-active');
        tab.classList.remove('text-slate-400');

        
        Object.values(skillContents).forEach(content => {
            content.classList.add('hidden');
        });
        skillContents[tabName].classList.remove('hidden');
    });
});