// Vollständige Mahlzeiten- und Snack-Datenbank
const mealDatabase = {
  breakfast: [
    {
      name: "Avocado-Rührei-Toast (Herzhaft)",
      macros: "~500 kcal / ~20 g Eiweiß",
      notes: "2 ganze Eier, 1/2 Avocado (z. B. als Guacamole/Creme mit Tomaten und Knoblauch), 1 Scheibe Vollkornbrot, 2 TL Öl zum Braten."
    },
    {
      name: "Feta-Spinat-Omelett (Herzhaft)",
      macros: "~540 kcal / ~31 g Eiweiß",
      notes: "3 ganze Eier, 50 g frischer Blattspinat, 45 g Feta, 1 Scheibe Vollkornbrot, 2 TL Olivenöl zum Braten."
    },
    {
      name: "Hüttenkäse-Gemüse-Teller (Herzhaft)",
      macros: "~520 kcal / ~33 g Eiweiß",
      notes: "200 g körniger Frischkäse (Halbfett, ca. 4%), 1 großes Vollkornbrötchen, 1 TL Butter, 1/2 Paprika & 1/3 Gurke, 15 g Kürbiskerne als Topping."
    },
    {
      name: "Mediterranes Räucherlachs-Vollkornbrot (Herzhaft)",
      macros: "~495 kcal / ~29 g Eiweiß",
      notes: "2 Scheiben Vollkornbrot (ca. 100 g), 40 g Frischkäse (Halbfett/Kräuter), 75 g Räucherlachs, 1/3 Gurke in Scheiben, 1 TL Olivenöl zum Beträufeln mit etwas Dill und Pfeffer."
    },
    {
      name: "Skyr-Bowl mit Nussbutter (Süß)",
      macros: "~490 kcal / ~37 g Eiweiß",
      notes: "300 g Skyr natur, 1 ganze Banane, 20 g Mandelmus (1 gehäufter EL), 15 g geschrotete Leinsamen, Prise Zimt."
    },
    {
      name: "Berry-Protein-Oats (Süß)",
      macros: "~480 kcal / ~39 g Eiweiß",
      notes: "60 g Haferflocken, 30 g Whey-Protein, 100 g Beerenmix, 15 g Chiasamen, 150 ml fettarme Milch (1,5%)."
    },
    {
      name: "Protein-Pancakes mit Apfel & Walnüssen (Süß)",
      macros: "~510 kcal / ~36 g Eiweiß",
      notes: "50 g zarte Haferflocken (oder Hafermehl), 1 ganzes Ei, 25 g Whey-Protein, 50 ml Milch, 1 TL Öl für die Pfanne, getoppt mit 1/2 gewürfeltem Apfel, Zimt und 15 g gehackten Walnüssen."
    }
  ],
  lunch: [
    {
      name: "Klassische Hähnchen-Reis-Pfanne (Hähnchen)",
      macros: "~530 kcal / ~56 g Eiweiß",
      notes: "200 g Hähnchenbrustfilet, 60 g Basmati-Reis (ungekocht), 150 g Brokkoli, 1 TL Olivenöl zum Anbraten, abgelöscht mit 1 EL Sojasauce und etwas Hühnerbrühe."
    },
    {
      name: "Bunte Hähnchen-Fajita-Bowl (Hähnchen)",
      macros: "~515 kcal / ~54 g Eiweiß",
      notes: "180 g Hähnchenbruststreifen, 50 g Quinoa (ungekocht), 1/2 rote Paprika, 1/2 rote Zwiebel, 50 g Kidneybohnen (aus der Dose), 1 TL Pflanzenöl, gewürzt mit Kreuzkümmel, Paprikapulver und Limettensaft."
    },
    {
      name: "Mageres Rinderhack mit Kartoffeln & Bohnen (Fleisch)",
      macros: "~525 kcal / ~46 g Eiweiß",
      notes: "180 g Rinderhackfleisch (mager, max. 5–7 % Fett), 250 g Kartoffeln (gekocht), 150 g Prinzessbohnen, 1 TL Rapsöl zum scharfen Anbraten, gewürzt mit Knoblauch, Salz und Pfeffer."
    },
    {
      name: "Rumpsteak mit Ofen-Süßkartoffel & Kräuterquark (Fleisch)",
      macros: "~520 kcal / ~55 g Eiweiß",
      notes: "180 g Rumpsteak (mager zugeschnitten), 200 g Süßkartoffel (in Spalten im Ofen gebacken), 1 TL Olivenöl, dazu 100 g Magerquark mit Schnittlauch, Knoblauch und einem Schuss Mineralwasser als Dip."
    },
    {
      name: "Lachsfilet auf Blattspinat mit Rosmarinkartoffeln (Fisch)",
      macros: "~590 kcal / ~44 g Eiweiß",
      notes: "180 g Lachsfilet (frisch/TK, im Ofen gegart), 200 g Kartoffeln, 150 g frischer Blattspinat (kurz mit Knoblauch zusammengefallen), 1 TL Olivenöl zum Beträufeln."
    },
    {
      name: "Mediterraner Thunfisch-Kichererbsen-Salat (Fisch)",
      macros: "~505 kcal / ~55 g Eiweiß",
      notes: "1 Dose Thunfisch im eigenen Saft (ca. 150 g Abtropfgewicht), 120 g Kichererbsen (aus der Dose), 1 hartgekochtes Ei (Größe M), 100 g Kirschtomaten & Gurke, Dressing aus 1 EL Olivenöl (ca. 10 g), Zitronensaft, Salz und Petersilie."
    },
    {
      name: "Knuspriger Erdnuss-Tofu mit Edamame & Reis (Vegetarisch)",
      macros: "~630 kcal / ~47 g Eiweiß",
      notes: "200 g fester Naturtofu (gewürfelt und angebraten), 80 g Edamame (Sojabohnen), 40 g Jasmin-Reis (ungekocht), 100 g Paprika & Brokkoli, Sauce aus 15 g Erdnussmus, 1 EL Sojasauce und warmem Wasser."
    },
    {
      name: "Protein-Shakshuka mit Kichererbsen & Feta (Vegetarisch)",
      macros: "~540 kcal / ~41 g Eiweiß",
      notes: "3 ganze Eier (Größe M), 100 g Kichererbsen (aus der Dose), 50 g Feta light (ca. 9–12 % Fett), 200 g stückige Tomaten mit 1/2 Paprika in der Pfanne eingekocht, 1 TL Olivenöl zum Anbraten, frische Petersilie."
    }
  ],
  dinner: [
    {
      name: "Zitronen-Kräuter-Hähnchen mit Ofenkartoffeln (Hähnchen)",
      macros: "~510 kcal / ~55 g Eiweiß",
      notes: "200 g Hähnchenbrustfilet, 250 g Kartoffeln (in Spalten), 150 g Zucchini, 1 TL Olivenöl, gewürzt mit Rosmarin, Knoblauch und frischem Zitronensaft auf dem Blech gebacken."
    },
    {
      name: "Cremiges Curry-Hähnchen mit Blumenkohl & Reis (Hähnchen)",
      macros: "~535 kcal / ~52 g Eiweiß",
      notes: "180 g Hähnchenbrust, 50 g Basmati-Reis (ungekocht), 150 g Blumenkohlröschen, 1 TL Kokosöl, Sauce aus 50 ml leichter Kokosmilch, 100 ml Gemüsebrühe und gelber Currypaste."
    },
    {
      name: "Mageres Rinderfilet-Pfännchen mit buntem Ofengemüse (Fleisch)",
      macros: "~495 kcal / ~45 g Eiweiß",
      notes: "180 g Rinderfilet (in Streifen kurz gebraten), 200 g Süßkartoffelspalten, 150 g gemischte Paprika & rote Zwiebeln, 1 TL Olivenöl, verfeinert mit Meersalz und Rosmarin."
    },
    {
      name: "Schweinefilet-Medaillons mit Champignon-Quark-Sauce (Fleisch)",
      macros: "~515 kcal / ~56 g Eiweiß",
      notes: "200 g mageres Schweinefilet, 200 g Salzkartoffeln, 150 g braune Champignons, 1 TL Butter zum Anbraten, Sauce gebunden mit 80 g Magerquark, Schnittlauch und einem Schuss Brühe."
    },
    {
      name: "Kabeljaufilet (Dorsch) in Tomaten-Oliven-Sud (Fisch)",
      macros: "~460 kcal / ~49 g Eiweiß",
      notes: "250 g Kabeljau- oder Seelachsfilet, 200 g kleine Kartoffeln (gekocht), 200 g Tomatenpolpa, 5 schwarze Oliven (gehackt), 1 TL Olivenöl, Knoblauch und Oregano."
    },
    {
      name: "Garnelen-Pfanne mit Edamame & Jasmin-Reis (Fisch)",
      macros: "~525 kcal / ~53 g Eiweiß",
      notes: "200 g Garnelen (geschält/entdarmt), 50 g Jasmin-Reis (ungekocht), 100 g Edamame, 100 g Zuckerschoten, 1 TL Sesamöl, 1 EL Sojasauce und etwas frischer Ingwer."
    },
    {
      name: "Herzhafter Linsen-Gemüse-Eintopf mit Räuchertofu (Vegetarisch)",
      macros: "~560 kcal / ~46 g Eiweiß",
      notes: "150 g Räuchertofu (in Würfeln kross angebraten), 70 g Berglinsen (ungekocht), 1 Karotte, 1 Stange Sellerie, 1 TL Rapsöl, 350 ml Gemüsebrühe, verfeinert mit Thymian und einem Schuss Apfelessig."
    },
    {
      name: "Griechische Halloumi-Kichererbsen-Pfanne (Vegetarisch)",
      macros: "~550 kcal / ~42 g Eiweiß",
      notes: "100 g Halloumi light (ca. 10–12 % Fett, gewürfelt), 150 g Kichererbsen (aus der Dose), 150 g Kirschtomaten & Zucchini, 1 TL Olivenöl, 1 Scheibe Sauerteig-Vollkornbrot (ca. 50 g) zum Dippen."
    }
  ],
  snack: [
    {
      name: "Klassischer Bananen-Honig-Magerquark (Süß)",
      macros: "~330 kcal / ~33 g Eiweiß",
      notes: "250 g Magerquark, 1 Banane (ca. 100 g), 50 ml fettarme Milch (1,5 %) zum Glattrühren, 1 TL Honig (ca. 10 g)."
    },
    {
      name: "Beeren-Protein-Shake (Süß)",
      macros: "~245 kcal / ~32 g Eiweiß",
      notes: "30 g Whey-Proteinpulver (Vanille oder Beere), 100 g gemischte TK-Beeren, 250 ml fettarme Milch (1,5 %) oder Mandeldrink ungesüßt, kurz gemixt."
    },
    {
      name: "Einfacher Klassischer Protein-Shake (Süß)",
      macros: "~140 kcal (mit Wasser) / ~250 kcal (mit Milch) / ~27–35 g Eiweiß",
      notes: "35 g Whey-Proteinpulver in 300 ml Wasser oder 250 ml fettarmer Milch (1,5 %) im Shaker geschüttelt."
    },
    {
      name: "Apfel-Zimt-Quark mit Mandelbutter (Süß)",
      macros: "~320 kcal / ~27 g Eiweiß",
      notes: "200 g Magerquark, 1 mittelgroßer Apfel (gewürfelt), 15 g Mandelmus, etwas Zimt und ein Schuss Mineralwasser zum Cremigrühren."
    },
    {
      name: "Körniger Frischkäse mit Honig & Walnüssen (Süß)",
      macros: "~290 kcal / ~26 g Eiweiß",
      notes: "200 g körniger Frischkäse (Halbfett, ca. 4 %), 15 g gehackte Walnüsse, 1 TL Honig (ca. 10 g)."
    },
    {
      name: "Erdnussbutter-Bananen-Reiswaffeln (Süß)",
      macros: "~225 kcal / ~6 g Eiweiß",
      notes: "3 Vollkorn-Reiswaffeln, dünn bestrichen mit 15 g Erdnussbutter, belegt mit 1/2 Banane in Scheiben und einer Prise Zimt."
    },
    {
      name: "Gefrorener Beeren-Skyr-Fluff (Süß)",
      macros: "~185 kcal / ~22 g Eiweiß",
      notes: "200 g Skyr natur, cremig verrührt mit 100 g leicht angetauten TK-Himbeeren oder Heidelbeeren und 1 TL Honig (ca. 10 g)."
    },
    {
      name: "Knuspriges Hüttenkäse-Knäckebrot (Herzhaft)",
      macros: "~210 kcal / ~20 g Eiweiß",
      notes: "2 Scheiben Vollkorn-Knäckebrot, bestrichen mit 150 g körnigem Frischkäse (Halbfett, ca. 4 %), belegt mit 1/2 Tomate in Scheiben, Salz, Pfeffer und Schnittlauch."
    },
    {
      name: "Gedämpfte Edamame mit Meersalz (Herzhaft)",
      macros: "~140 kcal / ~14 g Eiweiß",
      notes: "150 g Edamame in der Schote (kurz mit kochendem Wasser übergossen/aufgetaut), serviert mit grobem Meersalz und Chiliflocken."
    }
  ],
  // NEU: TK & Fertiggerichte
  convenience: [
    {
      name: "Frosta High-Protein Hähnchen & Blumenkohlreis",
      macros: "~420 kcal / ~40 g Eiweiß",
      notes: "Direkt aus dem Beutel in die Pfanne. Perfekte Balance aus Ballaststoffen und schnellem Protein ohne Zubereitungsaufwand."
    },
    {
      name: "Iglo Schlemmerfilet (z. B. Bordelaise Classic / Broccoli)",
      macros: "~450–500 kcal / ~35–40 g Eiweiß",
      notes: "Ganze Packung (ca. 380g) im Ofen zubereiten. Magerer Fisch als solide Eiweißquelle bei moderatem Fettgehalt."
    },
    {
      name: "Prep My Meal: Asia-Nudeln in Erdnuss-Sauce",
      macros: "ca. 570 kcal / 43 g Eiweiß",
      notes: "Fertiggericht mit top Makronährstoffen. Ideal fürs Büro oder wenn keine Zeit zum Vorkochen ist."
    },
    {
      name: "Prep My Meal: Spicy Beef Salami Pizza",
      macros: "ca. 800 kcal / 60 g Eiweiß (nur 20g Fett)",
      notes: "Pizza-Alternative mit enorm viel Protein und moderaten Fetten. Perfekt als deftiges Abendessen nach dem Training."
    },
    {
      name: "TK-Garnelen Pfanne (Quick Cook)",
      macros: "~320 kcal / ~45 g Eiweiß",
      notes: "250g TK-Garnelen kurz anbraten mit etwas Knoblauch, Sojasauce und TK-Gemüse eurer Wahl."
    },
    {
      name: "Chicken Nuggets im Cornflakes-Mantel (Backofen/Airfryer)",
      macros: "~450 kcal / ~38 g Eiweiß",
      notes: "TK-Cornflakes Nuggets im Ofen oder der Heißluftfritteuse backen (spart Fett). Dazu zuckerreduzierter Ketchup."
    }
  ],
  // NEU: Fast Food Hacks
  fastfood: [
    {
      name: "McDonald's: McWrap Spicy Chicken",
      macros: "ca. 500 kcal / 25 g Eiweiß",
      notes: "Gute Unterwegs-Option bei McDonald's mit solidem Eiweißgehalt. Am besten mit Wasser oder Zero-Getränk kombinieren."
    },
    {
      name: "McDonald's: 20er Chicken McNuggets",
      macros: "ca. 900 kcal / 55 g Eiweiß",
      notes: "Sehr proteinreich, aber fettiger. Gute 'Notfall'-Mahlzeit nach harten Workouts (Empfehlung: nicht mehrmals wöchentlich)."
    },
    {
      name: "McDonald's: Chickenburger",
      macros: "ca. 280 kcal / 10 g Eiweiß",
      notes: "Geringe Kaloriendichte, gut als kleiner Snack für unterwegs, wenn sonst nichts verfügbar ist."
    },
    {
      name: "Subway: 15cm Chicken Teriyaki Sub",
      macros: "ca. 350 kcal / 25 g Eiweiß",
      notes: "Berechnet mit Schmelzkäse, Sweet Onion Sauce und reichlich frischem Gemüse (Salat, Tomaten, Gurken, Paprika)."
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('mealModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContainer = document.getElementById('mealListContainer');
  const closeModalBtn = document.getElementById('closeModal');

  const categoryTitles = {
    breakfast: "Frühstücks-Ideen (Herzhaft & Süß)",
    lunch: "Mittagessen-Ideen (Hähnchen, Fleisch, Fisch & Veggie)",
    dinner: "Abendessen-Ideen (Hähnchen, Fleisch, Fisch & Veggie)",
    snack: "Snacks & Shakes (Süß & Herzhaft)",
    convenience: "TK & Fertiggerichte (Schnell & High-Protein)",
    fastfood: "Fast-Food-Hacks & Unterwegs"
  };

  function renderMeals(category) {
    modalTitle.textContent = categoryTitles[category] || "Mahlzeiten";
    modalContainer.innerHTML = "";

    const fullList = mealDatabase[category] || [];

    fullList.forEach((meal) => {
      const item = document.createElement('div');
      item.className = 'recipe-item';
      item.innerHTML = `
        <div class="recipe-title">${meal.name}</div>
        <div class="recipe-macros">${meal.macros}</div>
        <div class="recipe-notes">${meal.notes}</div>
      `;
      modalContainer.appendChild(item);
    });
  }

  // Modal öffnen bei Klick auf eine Kategorie
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-meal');
      renderMeals(cat);
      modal.classList.remove('hidden');
    });
  });

  // Modal schließen
  closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});
