let panier = JSON.parse(localStorage.getItem('panier')) || [];

const produits = [
    { nom: 'Produit 1', prix: 10 },
    { nom: 'Produit 2', prix: 20 },
    { nom: 'Produit 3', prix: 30 },
];

function ajouterAuPanier(produit) {
    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
    calculerTotal();
}
  
function retirerDuPanier(nomProduit) {
    panier = panier.filter(produit => produit.nom !== nomProduit);
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
    calculerTotal();
}
  
function afficherProduits() {
    const produitsContainer = document.getElementById('produits');
  
    produits.forEach(produit => {
      const produitElement = document.createElement('div');
      produitElement.classList.add('produit');
      produitElement.innerHTML = `${produit.nom} - $${produit.prix}`;
      const addButton = document.createElement('button');
      addButton.textContent = 'Ajouter au panier';
      addButton.classList.add('ajouter');
      addButton.addEventListener('click', () => ajouterAuPanier(produit));
      produitElement.appendChild(addButton);
  
      produitsContainer.appendChild(produitElement);
    });
}
  

function afficherPanier() {
    const panierContainer = document.getElementById('panier');
    panierContainer.innerHTML = '';
  
    panier.forEach(produit => {
      const produitElement = document.createElement('div');
      produitElement.classList.add('produit');
      produitElement.innerHTML = `${produit.nom} - $${produit.prix}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Retirer du panier';
      removeButton.classList.add('retirer');
      removeButton.addEventListener('click', () => retirerDuPanier(produit.nom));
      produitElement.appendChild(removeButton);
  
      panierContainer.appendChild(produitElement);
    });
}
  

function calculerTotal() {
    const totalContainer = document.getElementById('total');
    const total = panier.reduce((acc, produit) => acc + produit.prix, 0);
    totalContainer.textContent = `Total: $${total}`;
}
  

// Au chargement de la page, afficher les produits et le panier
afficherProduits();
afficherPanier();