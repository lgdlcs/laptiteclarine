// =============================================================
// LA P'TITE CLARINE — Menu data (fallback si Google Sheet KO)
// =============================================================
// Source principale : Google Sheet (voir SHEET_ID dans script.js)
// Ce fichier sert de backup uniquement.
// =============================================================

const menuDataFallback = {
  sale: {
    title: "Le Salé",
    categories: [
      {
        name: "Spécialités à partager",
        note: "2 personnes minimum",
        items: [
          { name: "Fondue savoyarde", description: "et salade verte", price: "25.00" },
          { name: "Fondue savoyarde aux morilles", description: "et salade verte", price: "29.00" },
          { name: "Fondue savoyarde aux cèpes", description: "et salade verte", price: "28.00" },
          { name: "Fondue Suisse moitié-moitié", description: "pommes de terre et salade verte", price: "30.00" },
          { name: "Raclette au lait cru", description: "sur réservation, intérieur uniquement — pommes de terre, charcuterie et salade verte", price: "29.50" }
        ]
      },
      {
        name: "Nos plats",
        items: [
          { name: "Tartiflette", description: "charcuterie et salade verte", price: "23.50" },
          { name: "Reblochon rôti au miel", description: "pommes de terre, charcuterie et salade verte", price: "26.50" },
          { name: "Croûte savoyarde", description: "charcuterie et salade verte", price: "23.00" },
          { name: "Délice de la Clarine", description: "pommes de terre, charcuterie et salade verte", price: "26.00" },
          { name: "Diots fumés sauce au vin blanc", description: "pommes de terre dorées", price: "24.50" },
          { name: "Gratin de Crozets au Reblochon", description: "charcuterie et salade verte", price: "23.50" },
          { name: "Assiette du randonneur", description: "", price: "23.50" },
          { name: "Salade Clarine", description: "", price: "23.50" },
          { name: "Filet de bœuf sauce aux morilles", description: "pommes de terre dorées", price: "36.50" }
        ]
      }
    ]
  },
  sucre: {
    title: "Le Sucré",
    categories: [
      {
        name: "Coupes glacées",
        items: [
          { name: "Vallon", description: "Glace vanille, compotée de myrtilles, crumble et chantilly maison", price: "8.50" },
          { name: "Criou", description: "Glaces chocolat Valrhona et croquantine, madeleine, chocolat chaud et chantilly maison", price: "11.00" },
          { name: "Clarine", description: "Glace vanille, sorbet framboise, coulis de framboises, chantilly maison", price: "11.00" },
          { name: "Dame blanche", description: "Glace vanille, chocolat chaud et chantilly maison", price: "11.00" }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Faisselle de Samoëns", description: "au coulis de myrtilles ou framboises", price: "7.00" },
          { name: "Meringue \"Double crème\"", description: "", price: "10.50" },
          { name: "Crème brûlée maison au Génépi", description: "et son shooter de Génépi", price: "11.50" },
          { name: "Mousse au chocolat maison", description: "et son crumble", price: "9.00" },
          { name: "Profiteroles", description: "sauce chocolat maison", price: "11.00" }
        ]
      }
    ]
  },
  vins: {
    title: "Les Vins",
    categories: [
      {
        name: "Rouge",
        items: [
          { name: "Gamay — Entre Lacs et Sommets", description: "Vin de Savoie AOP — Frais, Léger, Fruité", price: "7.00 (12cl) · 28.00 (75cl)" },
          { name: "Mondeuse Vieilles Vignes — Cave de Chautagne", description: "Vin de Savoie AOP — Élégante, Épicée", price: "30.00 (75cl)" },
          { name: "Vacqueyras — Château des Hautes-Ribes", description: "Rhône AOP — Élégant, Harmonieux, Fruits noirs", price: "39.00 (75cl)" },
          { name: "Pic Saint-Loup — Les Déesses Muettes \"Exception\"", description: "Languedoc-Roussillon AOP — Fruité, Fondu, Réglissé", price: "8.50 (12cl) · 37.00 (75cl)" }
        ]
      },
      {
        name: "Blanc",
        items: [
          { name: "Apremont — Domaine Chapot", description: "Vin de Savoie AOP — Sec, Floral", price: "7.00 (12cl) · 28.00 (75cl)" },
          { name: "Roussette Altesse Vieilles Vignes — Cave de Chautagne", description: "Vin de Savoie AOP — Élégant, Fin, Complexe", price: "31.50 (75cl)" },
          { name: "Chardonnay \"Confidence\" — Cave de Chautagne", description: "Vin de Savoie AOP — Pur, Équilibré", price: "7.50 (12cl) · 30.00 (75cl)" },
          { name: "Bourgogne Aligoté — André Ducal", description: "Bourgogne AOP — Fraîcheur, Vivacité, Floral", price: "31.50 (75cl)" }
        ]
      },
      {
        name: "Rosé",
        items: [
          { name: "Côtes de Provence — Amaryllis", description: "Provence AOP — Finesse, Floral, Robe pâle", price: "7.50 (12cl) · 29.50 (75cl)" }
        ]
      },
      {
        name: "Vins en carafe",
        items: [
          { name: "Rouge — Les Magerans", description: "AOP Côtes du Rhône", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" },
          { name: "Blanc — Sauvignon Maslourel", description: "IGP Pays d'Oc", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" },
          { name: "Rosé — Tères Antiques", description: "IGP Méditerranée", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" }
        ]
      }
    ]
  }
};
