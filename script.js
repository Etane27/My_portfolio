 const burger = document.getElementById('burger');
    const navList = document.querySelector('.navs ol');

    burger.addEventListener('click', () => {
      navList.classList.toggle('active');
      burger.classList.toggle('open'); 
    });


const categories = document.querySelectorAll('.skills-catégory li');

categories.forEach(category => {
  category.addEventListener("click", () => {
    
    categories.forEach(el => el.classList.remove("active"));
    
    category.classList.add("active");

    
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove("active"));

    
    const selectedTab = document.getElementById(category.dataset.tab);
    selectedTab.classList.add("active");
  });
});



const projets = [
  {
    titre:"Le juste prix",
    description:"Mon tout premier Projet. Un simple Juste prix basé sur la bibliothèque Random, Je suis à ce jour toujours très fier de ce projet.",
    lien:"https://github.com/Etane27/Just-prix",
    image: "assets/juste_prix.jpg"
  },
  {
    titre:"Le Jeu du Pendu",
    description:" C'était La premiere fois que je me servais d'une Interface Graphique(Tkinter). Je me suis beaucoup amusé sur ce projet Scolaire",
    lien:"https://github.com/Etane27/Hangman",
    image:"assets/pendu.png",
  },
  {
    titre:"Bot Review",
    description:"L'un de mes projets les plus ambitieux. un bot discord permettant de créer un Embed pour recommander un jeu. j'utilise dans ce projet l'API RAWG et la bibliotheque Discord PY",
    lien:"https://github.com/Etane27/Review_BOT",
    image:"assets/JV.png"
  },
  {
    titre:"Portfolio",
    description:"vous êtes actuellement sur ce projet, cela a permis d'ameliorer ma compréhension du JS et du CSS",
    lien :"#",
    image:"assets/icon.png"
  }
  
]

const container = document.querySelector(".project-grid");

projets.forEach((projet) => {
  const card = document.createElement("article");
  card.classList.add("project-card");

  const card_image = document.createElement("img");
  card_image.src = projet.image;
  card_image.classList.add("main-img");


  const card_title = document.createElement("h3");
  card_title.textContent = projet.titre;

  const card_desc = document.createElement("p");
  card_desc.textContent = projet.description;

  
  const github_icon = document.createElement("img");
  github_icon.src = "assets/github-mark.svg";
  github_icon.alt = "Logo GitHub";

  
  const card_link = document.createElement("a");
  card_link.href = projet.lien;
  card_link.target = "_blank";
  card_link.rel = "noopener";
  card_link.append(github_icon, document.createTextNode("Voir le projet"));



  
  const link_wrapper = document.createElement("div");
  link_wrapper.append(card_link);

  
  card.append(card_image, card_title, card_desc, link_wrapper);
  container.append(card);
});

document.getElementById("copy-discord").addEventListener("click", () => {
  const pseudoDiscord = "Etane_"; 

  navigator.clipboard.writeText(pseudoDiscord)
    .then(() => {
      alert("Pseudo Discord copié !");
    })
    .catch(err => {
      console.error("Erreur lors de la copie :", err);
    });
});
