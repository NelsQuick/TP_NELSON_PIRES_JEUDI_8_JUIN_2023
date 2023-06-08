/*=========================================================================
                            TP : LIEN ACTIF
=========================================================================*/

/*-------------------------------------------------------------------------
    OBJECTIF = parvenir à distinguer le lien actif des autres liens
-------------------------------------------------------------------------*/

/*---------------------------- CONSIGNES : -------------------------------*/

/* 
Coder un menu automatique qui s'adapte au nombre d'éléments de menu. 
Chaque élément de menu doit être un lien vers une section de la page.
Lorsqu'un lien est cliqué, il doit avoir une classe active (couleur de fond) qui lui permet de se distinguer des autres liens.
*/

// tableau avec les éléments de menu
const menuItems = [
    { text: 'Accueil', link: '#home' },
    { text: 'Produits', link: '#produits' },
    { text: 'Services', link: '#services' },
    { text: 'Notre équipe', link: '#team' },
    { text: 'Contact', link: '#contact' },
    { text: 'Blog', link: '#blog' },
    { text: 'FAQ', link: '#faq' },
    { text: 'Réseaux sociaux', link: '#social' }
];

// sélectionner la liste de menu
const menuList = document.getElementById('menu');

// itérer sur les éléments de menu et les ajouter à la liste
menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.text;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
});

// Ajouter un écouteur d'événement sur le menu pour détecter les clics
menuList.addEventListener('click', function (e) {
    // Vérifier si l'élément cliqué était un lien
    if (e.target.tagName === 'A') {
        // trouver le lien précédemment actif et le désactiver
        const activeLink = document.querySelector('#menu a.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }

        // activer le lien qui a été cliqué
        e.target.classList.add('active');

        // mettre à jour le fil d'Ariane
        const filAriane = document.getElementById('fil-d-ariane');
        filAriane.textContent = `page actuelle : ${e.target.textContent}`;
    }
});
