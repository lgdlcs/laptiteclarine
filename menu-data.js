// =============================================================
// LA P'TITE CLARINE — Données du menu
// =============================================================
// Pour modifier les prix ou les plats, changez simplement
// le texte et le prix ci-dessous. Pas besoin de toucher
// aux autres fichiers !
// =============================================================

const menuData = {
  // ─── LE SALÉ ───────────────────────────────────────────────
  sale: {
    title: "Le Salé",
    categories: [
      {
        name: "Spécialités à partager",
        note: "2 personnes minimum",
        items: [
          {
            name: "Fondue savoyarde",
            description: "et salade verte",
            price: "25.00"
          },
          {
            name: "Fondue savoyarde aux morilles",
            description: "et salade verte",
            price: "29.00"
          },
          {
            name: "Fondue savoyarde aux cèpes",
            description: "et salade verte",
            price: "28.00"
          },
          {
            name: "Fondue Suisse moitié-moitié",
            description: "pommes de terre et salade verte",
            price: "30.00"
          },
          {
            name: "Raclette au lait cru",
            description: "sur réservation, intérieur uniquement — pommes de terre, charcuterie et salade verte",
            price: "29.50"
          }
        ]
      },
      {
        name: "Nos plats",
        items: [
          {
            name: "Tartiflette",
            description: "charcuterie et salade verte",
            price: "23.50"
          },
          {
            name: "Reblochon rôti au miel",
            description: "pommes de terre, charcuterie et salade verte",
            price: "26.50"
          },
          {
            name: "Croûte savoyarde",
            description: "charcuterie et salade verte",
            price: "23.00"
          },
          {
            name: "Délice de la Clarine",
            description: "pommes de terre, charcuterie et salade verte",
            price: "26.00"
          },
          {
            name: "Diots fumés sauce au vin blanc",
            description: "pommes de terre dorées",
            price: "24.50"
          },
          {
            name: "Gratin de Crozets au Reblochon",
            description: "charcuterie et salade verte",
            price: "23.50"
          },
          {
            name: "Assiette du randonneur",
            description: "",
            price: "23.50"
          },
          {
            name: "Salade Clarine",
            description: "",
            price: "23.50"
          },
          {
            name: "Filet de bœuf sauce aux morilles",
            description: "pommes de terre dorées",
            price: "36.50"
          }
        ]
      }
    ]
  },

  // ─── LE SUCRÉ ──────────────────────────────────────────────
  // À compléter
  sucre: {
    title: "Le Sucré",
    categories: [
      {
        name: "Nos desserts",
        items: [
          // À compléter — ajoutez vos desserts ici :
          // { name: "Nom du dessert", description: "détails", price: "0.00" },
        ]
      }
    ]
  },

  // ─── LES VINS ──────────────────────────────────────────────
  // À compléter
  vins: {
    title: "Les Vins",
    categories: [
      {
        name: "Notre sélection",
        items: [
          // À compléter — ajoutez vos vins ici :
          // { name: "Nom du vin", description: "région, cépage", price: "0.00" },
        ]
      }
    ]
  }
};
