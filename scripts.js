const links = [
  {
    url: 'https://shipflow.netlify.app',
    icon: 'rocket',
    title: 'ShipFlow',
    description: 'High-converting SaaS website',
    external: true
  },
  {
    url: 'https://polaris-construction.netlify.app',
    icon: 'hammer',
    title: 'Polaris Construction',
    description: 'Interactive construction website',
    external: true
  },
  {
    url: 'https://downtown-barbershop.netlify.app',
    icon: 'scissors',
    title: 'Downtown Barbershop',
    description: 'Modern barbershop website',
    external: true
  },
  {
    url: 'https://austingraham.ca',
    icon: 'briefcase',
    title: 'Portfolio',
    description: 'Full project showcase',
    external: true
  }
];

function generateLinks() {
  const container = document.getElementById('links-container');

  const linksHTML = links.map(link => {
    const externalAttrs = link.external ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <a href="${link.url}" class="link-item" ${externalAttrs}>
        <div class="link-content">
          <div class="link-icon">
            <i data-lucide="${link.icon}" width="24" height="24"></i>
          </div>
          <div class="link-text">
            <span class="link-title">${link.title}</span>
            <span class="link-description">${link.description}</span>
          </div>
        </div>
        <i data-lucide="arrow-right" class="arrow" width="20" height="20"></i>
      </a>
    `;
  }).join('');

  container.innerHTML = linksHTML;

  lucide.createIcons();
}

generateLinks();