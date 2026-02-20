// =============================================================
// LA P'TITE CLARINE — English menu fallback
// =============================================================

const menuDataFallback = {
  sale: {
    title: "Savoury",
    categories: [
      {
        name: "Sharing specialties",
        note: "Minimum 2 people",
        items: [
          { name: "Savoyard Fondue", description: "with green salad", price: "25.00" },
          { name: "Savoyard Fondue with Morels", description: "with green salad", price: "29.00" },
          { name: "Savoyard Fondue with Porcini", description: "with green salad", price: "28.00" },
          { name: "Swiss Fondue half-and-half", description: "potatoes and green salad", price: "30.00" },
          { name: "Raw Milk Raclette", description: "reservation required, indoor only — potatoes, charcuterie and green salad", price: "29.50" }
        ]
      },
      {
        name: "Our dishes",
        items: [
          { name: "Tartiflette", description: "charcuterie and green salad", price: "23.50" },
          { name: "Honey-roasted Reblochon", description: "potatoes, charcuterie and green salad", price: "26.50" },
          { name: "Croûte Savoyarde", description: "charcuterie and green salad", price: "23.00" },
          { name: "Délice de la Clarine", description: "potatoes, charcuterie and green salad", price: "26.00" },
          { name: "Smoked Diots in white wine sauce", description: "golden potatoes", price: "24.50" },
          { name: "Crozets gratin with Reblochon", description: "charcuterie and green salad", price: "23.50" },
          { name: "Hiker's Platter", description: "", price: "23.50" },
          { name: "Clarine Salad", description: "", price: "23.50" },
          { name: "Beef Fillet with Morel sauce", description: "golden potatoes", price: "36.50" }
        ]
      }
    ]
  },
  sucre: {
    title: "Sweet",
    categories: [
      {
        name: "Ice cream sundaes",
        items: [
          { name: "Vallon", description: "Vanilla ice cream, blueberry compote, crumble & homemade whipped cream", price: "8.50" },
          { name: "Criou", description: "Valrhona chocolate ice cream & crunchy praline, madeleine, hot chocolate & homemade whipped cream", price: "11.00" },
          { name: "Clarine", description: "Vanilla ice cream, raspberry sorbet, raspberry coulis & homemade whipped cream", price: "11.00" },
          { name: "Dame Blanche", description: "Vanilla ice cream, hot chocolate & homemade whipped cream", price: "11.00" }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Faisselle from Samoëns", description: "with blueberry or raspberry coulis", price: "7.00" },
          { name: "Meringue \"Double cream\"", description: "", price: "10.50" },
          { name: "Homemade Génépi Crème Brûlée", description: "with a Génépi shooter", price: "11.50" },
          { name: "Homemade Chocolate Mousse", description: "with crumble", price: "9.00" },
          { name: "Profiteroles", description: "homemade chocolate sauce", price: "11.00" }
        ]
      }
    ]
  },
  vins: {
    title: "Wines",
    categories: [
      {
        name: "Red",
        items: [
          { name: "Gamay — Entre Lacs et Sommets", description: "Savoie AOP — Fresh, Light, Fruity", price: "7.00 (12cl) · 28.00 (75cl)" },
          { name: "Mondeuse Vieilles Vignes — Cave de Chautagne", description: "Savoie AOP — Elegant, Spicy", price: "30.00 (75cl)" },
          { name: "Vacqueyras — Château des Hautes-Ribes", description: "Rhône AOP — Elegant, Harmonious, Dark fruits", price: "39.00 (75cl)" },
          { name: "Pic Saint-Loup — Les Déesses Muettes \"Exception\"", description: "Languedoc-Roussillon AOP — Fruity, Smooth, Liquorice", price: "8.50 (12cl) · 37.00 (75cl)" }
        ]
      },
      {
        name: "White",
        items: [
          { name: "Apremont — Domaine Chapot", description: "Savoie AOP — Dry, Floral", price: "7.00 (12cl) · 28.00 (75cl)" },
          { name: "Roussette Altesse Vieilles Vignes — Cave de Chautagne", description: "Savoie AOP — Elegant, Fine, Complex", price: "31.50 (75cl)" },
          { name: "Chardonnay \"Confidence\" — Cave de Chautagne", description: "Savoie AOP — Pure, Balanced", price: "7.50 (12cl) · 30.00 (75cl)" },
          { name: "Bourgogne Aligoté — André Ducal", description: "Burgundy AOP — Fresh, Lively, Floral", price: "31.50 (75cl)" }
        ]
      },
      {
        name: "Rosé",
        items: [
          { name: "Côtes de Provence — Amaryllis", description: "Provence AOP — Finesse, Floral, Pale colour", price: "7.50 (12cl) · 29.50 (75cl)" }
        ]
      },
      {
        name: "House wines (carafe)",
        items: [
          { name: "Red — Les Magerans", description: "AOP Côtes du Rhône", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" },
          { name: "White — Sauvignon Maslourel", description: "IGP Pays d'Oc", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" },
          { name: "Rosé — Tères Antiques", description: "IGP Méditerranée", price: "5.50 (12cl) · 9.00 (25cl) · 17.00 (50cl)" }
        ]
      }
    ]
  }
};
