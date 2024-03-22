function passerCommande() {
  const typePlat = document.querySelector('.menu-item input[type="text"]').value;
  const nombrePlats = document.querySelector('.menu-item input[type="number"]').value;
  const adresseLivraison = document.querySelector('.menu-item input[type="text"]').value;
  
  // Envoyer les données à une fonction de traitement des commandes
  traiterCommande(typePlat, nombrePlats, adresseLivraison);
}

function traiterCommande(typePlat, nombrePlats, adresseLivraison) {
  // Ici vous pouvez mettre en place la logique pour traiter la commande
  // Par exemple, envoyer un e-mail de confirmation, enregistrer les détails de la commande, etc.
  
  // Afficher un message de notification
  alert(`Nouvelle commande passée pour ${nombrePlats} plat(s) de ${typePlat}. Adresse de livraison: ${adresseLivraison}`);
}
