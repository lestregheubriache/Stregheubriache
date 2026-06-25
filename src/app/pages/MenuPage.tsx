/**
 * DEV NOTE — BILINGUAL MENU MAINTENANCE
 * Every menu item has both `it` (Italian) and `en` (English) fields.
 * When you add, rename, or remove a dish/drink, update BOTH fields.
 * The language toggle is driven by the `lang` state (top of component).
 * Sections a–f are defined in MENU_SECTIONS — edit data there, not in JSX.
 */

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import whiskyPdf from '../../imports/whisky_.pdf';

/* ─── Types ─────────────────────────────────────────────────── */
type Lang = 'it' | 'en';

interface Item {
  it: string;
  en: string;
  price?: string;
  note?: { it?: string; en?: string };
}

interface SubSection {
  title: { it: string; en: string };
  items: Item[];
  pdfLink?: string;
}

interface MenuSection {
  id: string;
  title: { it: string; en: string };
  subtitle?: { it: string; en: string };
  subSections: SubSection[];
  note?: { it: string; en: string };
}

/* ─── Menu Data ─────────────────────────────────────────────── */
const MENU_SECTIONS: MenuSection[] = [
  /* ── a) Aperitivo ─────────────────────────────────────────── */
  {
    id: 'aperitivo',
    title: { it: 'Aperitivo', en: 'Aperitivo' },
    subtitle: { it: 'Dalle 18:00 alle 20:30', en: 'From 18:00 to 20:30' },
    subSections: [
      {
        title: { it: 'Formule Aperitivo per 2', en: 'Aperitivo Formulas for 2' },
        items: [
          { it: 'TRISGRANOCCHIO — Verdure, pane bruscato e bufala · 2 calici di vino o 2 drink', en: 'TRISGRANOCCHIO — Vegetables, toasted bread & bufala · 2 glasses of wine or 2 drinks', price: '18,00 €' },
          { it: 'TAGLIERE X 2 — Prosciutto e Salumi Locali, Pecorini di Diversa Stagionatura, Porchetta e focaccia (opzione vegetariana disponibile) · 2 calici o 2 drink', en: 'SHARING BOARD X 2 — Local Ham & Cured Meats, Pecorino cheese, Porchetta & focaccia (vegetarian option available) · 2 glasses or 2 drinks', price: '28,00 €' },
          { it: 'LE PINSOTTELLE — Pinsottella Romana a scelta dal menù · 2 calici o 2 drink', en: 'LE PINSOTTELLE — Roman pinsottella of your choice · 2 glasses or 2 drinks' },
          { it: 'SFIZI DAL FORNO — Polpette di Pulled Pork, Foglie di Borragine, Polpette della Nonna, Patate, Bruschette al lardo speziato · 2 calici o 2 drink', en: 'BAKED BITES — Pulled Pork balls, Borage leaves, Grandma\'s meatballs, Potatoes, Spiced lard bruschetta · 2 glasses or 2 drinks', price: '30,00 €' },
          { it: 'CRUDI E BOLLICINE — Tartare del giorno, Carpaccio di Manzo agli Agrumi, Carpaccio di Bresaola timo e fili di peperoncino · Bottiglia di Prosecco (upgrade disponibile)', en: 'RAW & BUBBLES — Daily tartare, Citrus Beef Carpaccio, Bresaola Carpaccio with thyme & chilli · Bottle of Prosecco (upgrade available)', price: '40,00 €' },
          { it: 'PER I VINI E I DRINK, CONSULTA LA NOSTRA WINE/DRINK LIST', en: 'FOR WINES AND DRINKS, SEE OUR WINE/DRINK LIST' },
          { it: 'OPPURE SCEGLI DAL MENÙ CIÒ CHE PREFERISCI', en: 'OR CHOOSE FREELY FROM THE MENU' },
        ]
      }
    ],
  },

  /* ── b) Food ──────────────────────────────────────────────── */
  {
    id: 'cibo',
    title: { it: 'Food', en: 'Food' },
    subtitle: { it: 'Il nostro Menù', en: 'Our Menu' },
    subSections: [
      {
        title: { it: 'Entrée', en: 'Starters' },
        items: [
          { it: 'Tartare di Scottona — olio e sale o cipolla caramellata e crema di pecorino', en: 'Scottona Tartare — oil & salt or caramelised onion & pecorino cream', price: '11,00 €' },
          { it: 'Carpaccio di Black Angus — leggermente affumicato e aromatizzato agli agrumi', en: 'Black Angus Carpaccio — lightly smoked with citrus', price: '11,00 €' },
          { it: 'Crostino di Pane Multicereali — Hummus, Cicoria, Bufala e Bacon', en: 'Multigrain Toast — Hummus, Cicoria, Bufala cheese & Bacon', price: '9,00 €' },
          { it: 'Polpettine della Nonna — all\'Amatriciana', en: 'Grandma\'s Meatballs — Amatriciana style', price: '8,00 €' },
          { it: 'Polpettine della Nonna — Cacio e Pepe', en: 'Grandma\'s Meatballs — Cacio e Pepe (cheese & pepper)', price: '8,00 €' },
          { it: 'Polpettine della Nonna — alla Cacciatora', en: 'Grandma\'s Meatballs — alla Cacciatora (olives & rosemary)', price: '8,50 €' },
        ]
      },
      {
        title: { it: 'Sfizi', en: 'Snacks' },
        items: [
          { it: 'Arrosticini Abruzzesi (pz.10)', en: 'Abruzzese Arrosticini — sheep meat skewers (10 pcs)', price: '12,00 €' },
          { it: 'Polpette di Pulled Pork — panatura di corn flakes e salsa mango habanero', en: 'Pulled Pork Balls — cornflakes coating & mango habanero sauce', price: '9,00 €' },
          { it: 'Foglie di Borragine — crosta di farina di grano con spicy mayo', en: 'Borage Leaves — wheat flour crust with spicy mayo', price: '8,00 €' },
        ]
      },
      {
        title: { it: 'Taglieri', en: 'Sharing Boards' },
        items: [
          { it: 'Tagliere Nostrum — Prosciutto e Salumi Locali, Pecorini di diversa Stagionatura, Porchetta', en: 'Tagliere Nostrum — Ham, Local Cured Meats, Pecorino cheese of different ages, Porchetta', price: '18,00 €' },
          { it: 'Tagliere delle Streghe — Speck d\'Anatra, Salame di Cervo, Mortadella di Cinghiale Grigliata, Bruschette Lardo Speziato', en: 'Tagliere delle Streghe — Duck Speck, Deer Salami, Grilled Wild Boar Mortadella, Spiced Lard Bruschetta', price: '19,00 €' },
          { it: 'Serviti con focaccia', en: 'Served with focaccia' },
          { it: 'Pane fatto in casa e servizio', en: 'Home-made bread & service', price: '1,50 €' },
        ]
      },
      {
        title: { it: 'Primi Piatti · Tutta la pasta è fatta in casa.', en: 'First Courses · All pasta is home-made.' },
        items: [
          { it: 'Maccheronici alla Mediterranea — Ragù di Melanzane, Ricotta Salata, Olio alle erbe, Crunchy di Cipolla', en: 'Maccheroni alla Mediterranea — Eggplant ragù, Salted Ricotta, Herb oil, Crispy onion', price: '14,00 €' },
          { it: 'Spaghettoni al Pesto di Zucchine e Mandorle con briciole di Olive e polvere di Peperone Crusco', en: 'Spaghettoni with Zucchini & Almond pesto, Olive crumble, Crusco Pepper powder', price: '14,00 €' },
          { it: 'Fettuccine al ragù di Scottona', en: 'Fettuccine with Scottona beef ragù', price: '14,00 €' },
          { it: 'Tonnarello Cacio e Pepe', en: 'Tonnarello Cacio e Pepe (pecorino & pepper)', price: '13,00 €' },
          { it: 'Maccheroncini alla Carbonara / Amatriciana / Gricia', en: 'Maccheroni Carbonara / Amatriciana / Gricia', price: '14,00 €' },
          { it: 'Pane fatto in casa e servizio', en: 'Home-made bread & service', price: '1,50 €' },
        ]
      },
      {
        title: { it: 'Carni — condite con olio EVO', en: 'Meats — dressed with EVO olive oil' },
        items: [
          { it: 'Tagliata di Controfiletto di Scottona (min. 350gr) — Rosmarino e sale di Maldon', en: 'Scottona Sirloin Cut (min. 350g) — Rosemary & Maldon salt', price: '24,00 €' },
          { it: 'Tagliata di Controfiletto di Scottona — con Lardo speziato', en: 'Scottona Sirloin Cut — with spiced lard', price: '26,00 €' },
          { it: 'Tagliata di Controfiletto di Scottona — con salsa di Gorgonzola e Pepe verde', en: 'Scottona Sirloin Cut — Gorgonzola & green pepper sauce', price: '27,00 €' },
          { it: 'Brasato di Guancia di Vitella brasata al Cesanese — patate e verdure al burro', en: 'Braised Veal Cheek in Cesanese wine — buttered potatoes & vegetables', price: '20,00 €' },
          { it: 'Stinchetto al forno con patate', en: 'Oven-baked Pork Knuckle with potatoes', price: '19,00 €' },
          { it: 'Straccetti di Manzo — rucola, pachino e grana', en: 'Beef Straccetti — rocket, cherry tomatoes & parmesan', price: '18,00 €' },
          { it: 'Tagliata di Pollo alla griglia — rucola, pachino e grana', en: 'Grilled Chicken Cut — rocket, cherry tomatoes & parmesan', price: '18,00 €' },
          { it: 'Tagliata di Pollo alla griglia — erbette di campo', en: 'Grilled Chicken Cut — wild field herbs', price: '16,00 €' },
          { it: 'Pane fatto in casa e servizio', en: 'Home-made bread & service', price: '1,50 €' },
        ]
      },
      {
        title: { it: 'Contorni', en: 'Side Dishes' },
        items: [
          { it: 'Patate', en: 'Potatoes', price: '5,00 €' },
          { it: 'Cicoria Ripassata', en: 'Sautéed Cicoria', price: '6,00 €' },
          { it: 'Verdure Grigliate', en: 'Grilled Vegetables', price: '7,00 €' },
        ]
      },
      {
        title: { it: 'Patate a spicchi cotte al forno aromatizzate.', en: 'Aromatic Oven-Baked Potato Wedges.' },
        items: [
          { it: 'Classic', en: 'Classic', price: '5,00 €' },
          { it: 'Bacon & Cheddar', en: 'Bacon & Cheddar', price: '7,50 €' },
          { it: 'Cacio & Pepe', en: 'Pecorino cheese & Pepper', price: '6,50 €' },
        ]
      },
      {
        title: { it: 'Hamburger', en: 'Burgers' },
        items: [
          { it: 'BaconCheeseBurger / CheeseBurger — Hamburger, Formaggio, Bacon, Pomodoro, Insalata', en: 'BaconCheeseBurger / CheeseBurger — Patty, Cheese, Bacon, Tomato, Lettuce', price: '9,00 € / con patate 12,00 €' },
          { it: 'Contadino — Hamburger, Pecorino Romano DOP, Melanzana, Bacon, Pomodoro, Insalata', en: 'Contadino — Patty, DOP Pecorino Romano, Eggplant, Bacon, Tomato, Lettuce', price: '12,50 € / con patate 15,50 €' },
          { it: 'Doc — Doppio Hamburger & Doppio Formaggio, Bacon, Pomodoro', en: 'Doc — Double Patty & Double Cheese, Bacon, Tomato', price: '14,00 € / con patate 17,00 €' },
          { it: 'MegaBurger — Hamburger, Cheddar, Bacon, Uovo, Cipolla caramellata', en: 'MegaBurger — Patty, Cheddar, Bacon, Egg, Caramelised Onion', price: '12,00 € / con patate 15,00 €' },
        ]
      },
      {
        title: { it: 'Pinsottelle — pinsa romana, 72 ore di lievitazione, piccola nel formato, grande nel gusto', en: 'Pinsottelle — Roman pinsa, 72h leavening, small in size, big in flavour' },
        items: [
          { it: 'Prosciutto e Bufala', en: 'Ham & Bufala Mozzarella', price: '10,00 €' },
          { it: 'Bufalina — Pomodoro, Mozzarella di Bufala', en: 'Bufalina — Tomato & Bufala Mozzarella', price: '10,00 €' },
          { it: 'Bufala e Alici — Mozzarella di Bufala, Alici, Pachino, Rughetta, Grana', en: 'Bufala & Anchovies — Bufala Mozzarella, Anchovies, Cherry tomatoes, Rocket, Parmesan', price: '10,00 €' },
          { it: 'Orient Express — Carpaccio di Manzo, Insalata Iceberg, Salsa Mango e Curry', en: 'Orient Express — Beef Carpaccio, Iceberg Lettuce, Mango & Curry sauce', price: '10,00 €' },
          { it: 'Strega (un po\' piccante) — Pomodoro, Mozzarella, Melanzane, Pecorino semistagionato, Grana', en: 'Strega (slightly spicy) — Tomato, Mozzarella, Eggplant, Semi-aged Pecorino, Parmesan', price: '10,00 €' },
          { it: 'Vegetariana — Mozzarella, Zucchine, Melanzane, Datterini', en: 'Vegetarian — Mozzarella, Courgettes, Eggplant, Datterini tomatoes', price: '10,00 €' },
          { it: 'Golosa — Gorgonzola, Pere, Noci, Miele', en: 'Golosa — Gorgonzola, Pears, Walnuts, Honey', price: '10,00 €' },
          { it: 'La Ribelle — Porchetta, Cicoria ripassata, Salsa Mango Habanero', en: 'La Ribelle — Porchetta, Sautéed Cicoria, Mango Habanero sauce', price: '10,00 €' },
          { it: 'Mortazza — Mozzarella di Bufala, Mortadella di Cinghiale, Crema di Pistacchio', en: 'Mortazza — Bufala Mozzarella, Wild Boar Mortadella, Pistachio cream', price: '10,00 €' },
          { it: '666 (un po\' piccante) — Pomodoro, Mozzarella, N\'duja', en: '666 (slightly spicy) — Tomato, Mozzarella, N\'duja salami', price: '10,00 €' },
          { it: 'Focaccia', en: 'Focaccia flatbread', price: '5,00 €' },
        ]
      },
      {
        title: { it: 'Insalate', en: 'Salads' },
        items: [
          { it: 'Vivace — Bufala, Alici, Pomodorini, Melanzane, Datterini', en: 'Vivace — Bufala, Anchovies, Cherry tomatoes, Eggplant, Datterini', price: '8,00 €' },
          { it: 'Pollo — Pollo alla Griglia, Olive, Datterini, Grana', en: 'Pollo — Grilled Chicken, Olives, Datterini, Parmesan', price: '8,00 €' },
          { it: 'Verde — Valeriana, Rughetta e Gentile con Datterini', en: 'Verde — Mixed leaves & Datterini tomatoes', price: '5,00 €' },
          { it: 'La Leggera — Insalatina, Finocchi, Arance, Olive', en: 'La Leggera — Mixed leaves, Fennel, Orange, Olives', price: '6,00 €' },
        ]
      },
      {
        title: { it: 'Un Pizzico di Dolcezza', en: 'A Touch of Sweetness' },
        items: [
          { it: 'Sbriciolata — crema chantilly, Nutella o Frutti di bosco', en: 'Sbriciolata crumble — chantilly cream, Nutella or Wild berries', price: '6,00 €' },
          { it: 'Tiramisù Classico o alla Nutella', en: 'Tiramisù — Classic or Nutella', price: '6,00 €' },
          { it: 'Tortino al cioccolato — cuore caldo e gelato alla vaniglia', en: 'Warm chocolate cake — warm heart & vanilla ice cream', price: '7,00 €' },
          { it: 'Ciambelline al vino bianco con Cannellino', en: 'White wine ring biscuits with Cannellino wine', price: '7,00 €' },
          { it: 'Pinsa alla Nutella', en: 'Pinsa with Nutella', price: '10,00 €' },
          { it: 'Pane fatto in casa e servizio', en: 'Home-made bread & service', price: '1,50 €' },
        ]
      },
    ],
    note: {
      it: 'Tutti i nostri dolci sono fatti in casa. I prodotti con * potrebbero essere stati abbattuti. Serviamo prodotti gluten free ma non possiamo escludere contaminazione da glutine. Lista allergeni disponibile nella sezione "Menù Allergeni".',
      en: 'All our desserts are homemade. Products marked * may have been blast-chilled. We serve gluten-free products but cannot exclude cross-contamination. See the "Allergen Menu" section for full details.'
    }
  },

  /* ── c) Wine List ─────────────────────────────────────────── */
  {
    id: 'vini',
    title: { it: 'Lista Vini', en: 'Wine List' },
    subtitle: { it: 'I Castelli Romani e oltre', en: 'Castelli Romani & beyond' },
    subSections: [
      {
        title: { it: 'Vini Bianchi', en: 'White Wines' },
        items: [
          { it: 'Filiae Frascati Superiore DOCG — Borgo del Cedro · Profumi fruttati di agrumi e fiori di acacia', en: 'Filiae Frascati Superiore DOCG — Borgo del Cedro · Fruity aromas of citrus and acacia flowers', price: '20,00 €' },
          { it: 'Il Mamilio Frascati Superiore DOCG — Colle Arnaldo · Bouquet di fiori bianchi ed erbe aromatiche', en: 'Il Mamilio Frascati Superiore DOCG — Colle Arnaldo · White flower & aromatic herb bouquet', price: '25,00 €' },
          { it: 'Vigneto Santa Teresa Frascati Superiore DOCG — Fontana Candida · Profumi fini e delicati di fiori, mela, salvia ed erbe aromatiche con un caratteristico fondo di mandorla dolce', en: 'Vigneto Santa Teresa Frascati Superiore DOCG — Fontana Candida · Delicate floral aromas, apple, sage and aromatic herbs with a characteristic sweet almond finish', price: '20,00 €' },
          { it: 'Apà Frascati Superiore DOCG — Torre dei Falchi · Al naso profumi autentici: terra, erba e violette. In bocca è pieno e avvolgente, con note di ciliegia e prugna', en: 'Apà Frascati Superiore DOCG — Torre dei Falchi · Authentic aromas of earth, herbs and violets. Full and enveloping on the palate with cherry and plum notes', price: '23,00 €' },
          { it: 'Vigneto La Torretta di Valle Marciana Frascati Superiore Riserva DOCG BIO — Gabriele Magno · Sfumature floreali che donano freschezza, note di pesca, susina, albicocca ed erbe aromatiche. Balsamicità finale', en: 'Vigneto La Torretta di Valle Marciana Frascati Superiore Riserva DOCG BIO — Gabriele Magno · Fresh floral nuances with peach, plum, apricot and aromatic herbs. Balsamic finish', price: '37,00 €' },
          { it: 'Donnaluce Bianco IGT — Poggio Le Volpi · Note di albicocca, pesca e litchi', en: 'Donnaluce Bianco IGT — Poggio Le Volpi · Apricot, peach and lychee notes', price: '30,00 €' },
          { it: 'Frascati Superiore DOCG BIO — Gabriele Magno · Frutta esotica e pesca bianca', en: 'Frascati Superiore DOCG BIO — Gabriele Magno · Exotic fruit & white peach', price: '24,00 €' },
          { it: 'Ribolla Gialla — Ca\' Tullio · Fresco e floreale con agrumi', en: 'Ribolla Gialla — Ca\' Tullio · Fresh & floral with citrus', price: '21,00 €' },
          { it: 'Horta Bombino — Terre del Veio · Menta, salvia, lime e fiori bianchi', en: 'Horta Bombino — Terre del Veio · Mint, sage, lime & white flowers', price: '19,00 €' },
          { it: 'Nexum Chardonnay Lazio IGT — Terre del Veio · Aromi di erbe dolci (timo, rosmarino, salvia e camomilla) e minerali', en: 'Nexum Chardonnay Lazio IGT — Terre del Veio · Aromas of sweet herbs (thyme, rosemary, sage and chamomile) and minerals', price: '20,00 €' },
          { it: 'Cremera Bianco Malvasia Puntinata Roma DOC — Terre del Veio · Al naso si rileva un\'immediata freschezza con profumi deliziosi e coordinati', en: 'Cremera Bianco Malvasia Puntinata Roma DOC — Terre del Veio · Immediate freshness on the nose with delightful and well-balanced aromas', price: '22,00 €' },
          { it: 'Velthur Viognier — Terre del Veio · Pesca, banana e frutti esotici', en: 'Velthur Viognier — Terre del Veio · Peach, banana & exotic fruit', price: '21,00 €' },
        ]
      },
      {
        title: { it: 'Vini Rossi', en: 'Red Wines' },
        items: [
          { it: 'Baccarossa Rosso IGT — Poggio Le Volpi · Frutti di bosco, spezie dolci e tabacco', en: 'Baccarossa Rosso IGT — Poggio Le Volpi · Wild berries, sweet spices & tobacco', price: '32,00 €' },
          { it: 'Cesanese Lazio IGP BIO — Gabriele Magno · Note balsamiche, cacao e spezie dolci', en: 'Cesanese Lazio IGP BIO — Gabriele Magno · Balsamic, cocoa & sweet spice notes', price: '28,00 €' },
          { it: 'Cabernet Sauvignon Velthur Lazio IGP — Terre del Veio · Note frutti di bosco con un lieve sentore fumée. Al palato fresco, ma con un tannino evidente', en: 'Cabernet Sauvignon Velthur Lazio IGP — Terre del Veio · Wild berry notes with a light smoky hint. Fresh on the palate with evident tannins', price: '26,00 €' },
          { it: 'Cremera Roma DOC Rosso — Terre del Veio · Frutta rossa matura dal finale speziato, cacao e tabacco dolce', en: 'Cremera Roma DOC Rosso — Terre del Veio · Ripe red fruit with a spiced finish, cocoa and sweet tobacco', price: '22,00 €' },
          { it: 'Polluce Nero Buono — Cincinnato · Sapore delicato, armonico con elegante complessità', en: 'Polluce Nero Buono — Cincinnato · Delicate, harmonious flavour with elegant complexity', price: '21,00 €' },
          { it: 'Nexum Syrah Lazio IGT — Terre del Veio · Profumo intenso e fruttato con sentori di spezie', en: 'Nexum Syrah Lazio IGT — Terre del Veio · Intense and fruity aroma with hints of spice', price: '20,00 €' },
          { it: 'Cesanese Tata — Note floreali di viola, frutta rossa e spezie', en: 'Cesanese Tata — Violet florals, red fruit & spice notes', price: '20,00 €' },
          { it: 'Capitel San Rocco Valpolicella Ripasso DOC — Tedeschi · Profumo vinoso, sapore pieno e armonico', en: 'Capitel San Rocco Valpolicella Ripasso DOC — Tedeschi · Vinous aroma, full and harmonious taste', price: '28,00 €' },
        ]
      },
      {
        title: { it: 'Bollicine', en: 'Sparkling' },
        items: [
          { it: 'Veuve Clicquot — Champagne', en: 'Veuve Clicquot — Champagne', price: '120,00 €' },
          { it: 'Bellavista — Franciacorta Gran Cuvée Alma Brut', en: 'Bellavista — Franciacorta Gran Cuvée Alma Brut', price: '70,00 €' },
          { it: 'Berlucchi — Franciacorta Cuvée Imperiale Brut', en: 'Berlucchi — Franciacorta Cuvée Imperiale Brut', price: '45,00 €' },
          { it: 'Contadi Castaldi — Franciacorta Satèn', en: 'Contadi Castaldi — Franciacorta Satèn', price: '39,00 €' },
          { it: 'Contadi Castaldi — Franciacorta Brut', en: 'Contadi Castaldi — Franciacorta Brut', price: '29,00 €' },
          { it: 'Zonin — Prosecco Brut DOCG', en: 'Zonin — Prosecco Brut DOCG', price: '20,00 €' },
        ]
      },
      {
        title: { it: 'Vini alla Mescita', en: 'Wine by the Glass' },
        items: [
          { it: 'Frascati DOC', en: 'Frascati DOC', price: '5,00 €' },
          { it: 'Ribolla Gialla dei Colli Orientali', en: 'Ribolla Gialla dei Colli Orientali', price: '6,00 €' },
          { it: 'Malvasia del Lazio', en: 'Malvasia del Lazio', price: '5,00 €' },
          { it: 'Cesanese + Merlot + Montepulciano', en: 'Cesanese + Merlot + Montepulciano', price: '5,00 €' },
          { it: 'Jadér Cuvée Vino Spumante Brut', en: 'Jadér Cuvée Brut Sparkling Wine', price: '5,00 €' },
          { it: 'Cannellino di Frascati', en: 'Cannellino di Frascati', price: '6,00 €' },
        ]
      },
    ],
    note: {
      it: 'Curiosità · Perché si chiama "Frascati"? Da "frasca": il ramoscello che gli osti appendevano fuori dalla porta per segnalare la disponibilità del vino. Da qui "fraschette", poi "Frascati" — prima per il vino, poi per la città che le ospitava.',
      en: 'Did you know? "Frascati" comes from "frasca" — the branch that innkeepers hung outside their door to signal that wine was available. Hence "fraschette", then "Frascati" — first for the wine, then for the city itself.'
    }
  },

  /* ── d) Drink & Beer ──────────────────────────────────────── */
  {
    id: 'drinks',
    title: { it: 'Drink & Birre', en: 'Drinks & Beer' },
    subtitle: { it: 'Cocktail, birre artigianali e distillati', en: 'Cocktails, craft beers & spirits' },
    subSections: [
      {
        title: { it: 'Spritz & Co', en: 'Spritz & Co' },
        items: [
          { it: 'Aperol Spritz — Aperol, Prosecco, Soda', en: 'Aperol Spritz — Aperol, Prosecco, Soda', price: '7,00 €' },
          { it: 'Campari Spritz — Campari, Prosecco, Soda', en: 'Campari Spritz — Campari, Prosecco, Soda', price: '7,00 €' },
          { it: 'City Spritz — Frascati Superiore, Sambuco, Soda', en: 'City Spritz — Frascati Superiore, Elderflower, Soda', price: '7,00 €' },
          { it: 'Hugo Spritz — Prosecco, Sambuco, Soda', en: 'Hugo Spritz — Prosecco, Elderflower, Soda', price: '7,00 €' },
          { it: 'Martini Spritz — Prosecco, Vermouth', en: 'Martini Spritz — Prosecco, Vermouth', price: '7,00 €' },
          { it: 'Venturo Spritz — Prosecco, Venturo, Soda', en: 'Venturo Spritz — Prosecco, Venturo, Soda', price: '7,00 €' },
          { it: 'Midori Spritz — Prosecco, Midori, Soda', en: 'Midori Spritz — Prosecco, Midori, Soda', price: '7,00 €' },
          { it: 'Limoncello Spritz — Prosecco, Limoncello, Soda', en: 'Limoncello Spritz — Prosecco, Limoncello, Soda', price: '7,00 €' },
        ]
      },
      {
        title: { it: 'Signature Cocktail', en: 'Signature Cocktails' },
        items: [
          { it: 'Americanotto — Carpano Rosso, Campari, Chinotto', en: 'Americanotto — Red Vermouth, Campari, Chinotto', price: '8,00 €' },
          { it: 'Laura Non C\'è — Vodka, Zucchero, Limone, Bitter al cioccolato, Ginger Beer', en: 'Laura Non C\'è — Vodka, Sugar, Lemon, Chocolate Bitter, Ginger Beer', price: '8,00 €' },
          { it: 'Tini Goes To Le Streghe — Vodka, Sambuco, Soda, Peychaud\'s', en: 'Tini Goes To Le Streghe — Vodka, Elderflower, Soda, Peychaud\'s', price: '8,00 €' },
          { it: 'Bi Mule — Di Saronno, Vodka, Triple Sec, Lime, Ginger Beer', en: 'Bi Mule — Di Saronno, Vodka, Triple Sec, Lime, Ginger Beer', price: '8,00 €' },
          { it: 'PassionLavender — Vodka alla Lavanda, Passion Fruit, Limone, Zucchero', en: 'PassionLavender — Lavender Vodka, Passion Fruit, Lemon, Sugar', price: '8,00 €' },
          { it: 'Ginger Collins — Vodka alla Lavanda, Zucchero, Limone, Ginger Beer', en: 'Ginger Collins — Lavender Vodka, Sugar, Lemon, Ginger Beer', price: '8,00 €' },
        ]
      },
      {
        title: { it: 'Classic Drinks', en: 'Classic Drinks' },
        items: [
          { it: 'Aviation — Gin, Maraschino, Succo di limone, Crème de Violette', en: 'Aviation — Gin, Maraschino, Lemon juice, Crème de Violette', price: '8,00 €' },
          { it: 'Boulevardier — Bourbon, Vermouth Rosso, Campari', en: 'Boulevardier — Bourbon, Red Vermouth, Campari', price: '8,00 €' },
          { it: 'Daiquiri — Rum, Lime, Zucchero', en: 'Daiquiri — Rum, Lime, Sugar', price: '8,00 €' },
          { it: 'Manhattan — Rye Whiskey, Vermouth Rosso, Angostura', en: 'Manhattan — Rye Whiskey, Red Vermouth, Angostura', price: '8,00 €' },
          { it: 'Martini Cocktail — Gin, Vermouth Dry', en: 'Martini Cocktail — Gin, Dry Vermouth', price: '8,00 €' },
          { it: 'Mojito — Rum, Lime, Zucchero, Menta, Soda', en: 'Mojito — Rum, Lime, Sugar, Mint, Soda', price: '8,00 €' },
          { it: 'Negroni — Gin, Vermouth Rosso, Campari', en: 'Negroni — Gin, Red Vermouth, Campari', price: '8,00 €' },
          { it: 'Old Fashioned — Bourbon, Zucchero, Angostura', en: 'Old Fashioned — Bourbon, Sugar, Angostura', price: '8,00 €' },
          { it: 'Margarita — Tequila, Triple Sec, Lime', en: 'Margarita — Tequila, Triple Sec, Lime', price: '8,00 €' },
          { it: 'Espresso Martini — Vodka, Zucchero, Caffè Espresso', en: 'Espresso Martini — Vodka, Sugar, Espresso', price: '8,00 €' },
          { it: 'Moscow Mule — Vodka, Limone, Ginger Beer', en: 'Moscow Mule — Vodka, Lime, Ginger Beer', price: '8,00 €' },
          { it: 'Gin Tonic — Gin & Acqua Tonica', en: 'Gin Tonic — Gin & Tonic Water', price: '8,00 €' },
          { it: 'Negroni Sbagliato — Vermouth Rosso, Campari, Prosecco', en: 'Negroni Sbagliato — Red Vermouth, Campari, Prosecco', price: '8,00 €' },
        ]
      },
      {
        title: { it: 'Mocktail / Zero Alcol', en: 'Mocktails / Zero Alcohol' },
        items: [
          { it: 'ZerØ Gin Tonic — Acqua Brillante & Gin Tanqueray 0.0°', en: 'ZerØ Gin Tonic — Tonic Water & Tanqueray Gin 0.0°', price: '7,00 €' },
          { it: 'ZerØ Gin Lemon — Schweppes Lemon & Gin Tanqueray 0.0°', en: 'ZerØ Gin Lemon — Schweppes Lemon & Tanqueray Gin 0.0°', price: '7,00 €' },
          { it: 'ZerØ Collins — Mela e Zenzero, Gin Tanqueray 0.0°, Zucchero & Limone', en: 'ZerØ Collins — Apple & Ginger, Tanqueray Gin 0.0°, Sugar & Lemon', price: '7,00 €' },
          { it: 'ZerØ Spritz — Crème de Violette, Succo di mirtillo, Soda', en: 'ZerØ Spritz — Crème de Violette, Blueberry juice, Soda', price: '7,00 €' },
          { it: 'Dark Night — Bitter al cioccolato, Coca Cola, Soda al Pompelmo', en: 'Dark Night — Chocolate Bitter, Coke, Grapefruit Soda', price: '7,00 €' },
          { it: 'Fata Del Bosco — Fragola, Schweppes Lemon, Mora', en: 'Fata Del Bosco — Strawberry, Schweppes Lemon, Blackberry', price: '7,00 €' },
          { it: 'Witch Berry — Cranberry, Ananas, Mora', en: 'Witch Berry — Cranberry, Pineapple, Blackberry', price: '7,00 €' },
          { it: 'Ginger Mint — Ginger beer, Lime, Menta', en: 'Ginger Mint — Ginger beer, Lime, Mint', price: '7,00 €' },
          { it: 'Florida — Pesca, Schweppes Lemon, Granatina', en: 'Florida — Peach, Schweppes Lemon, Grenadine', price: '7,00 €' },
          { it: 'San Francisco — Ananas, Arancia, Granatina', en: 'San Francisco — Pineapple, Orange, Grenadine', price: '7,00 €' },
          { it: 'Fata Morgana — Pesca, Mango, Schweppes Lemon', en: 'Fata Morgana — Peach, Mango, Schweppes Lemon', price: '7,00 €' },
          { it: 'Shirley Temple — Ginger beer, Limone, Granatina', en: 'Shirley Temple — Ginger beer, Lemon, Grenadine', price: '7,00 €' },
        ]
      },
      {
        title: { it: 'Birre alla Spina', en: 'Draught Beer' },
        items: [
          { it: 'Carlsberg Lager 5%', en: 'Carlsberg Lager 5%', price: '1lt €12 · 0,4lt €6 · 0,25lt €3' },
          { it: 'Elephant Doppio Malto 7,2%', en: 'Elephant Double Malt 7.2%', price: '1lt €12 · 0,4lt €6 · 0,25lt €3,50' },
          { it: 'Brooklyn East I.P.A. 6,9%', en: 'Brooklyn East I.P.A. 6.9%', price: '1lt €14 · 0,4lt €7 · 0,20lt €4' },
          { it: 'Tucher Hefe Weizen 5,2%', en: 'Tucher Hefe Weizen 5.2%', price: '1lt €11 · 0,5lt €6 · 0,3lt €4' },
        ]
      },
      {
        title: { it: 'Birre in Bottiglia', en: 'Bottled Beer' },
        items: [
          { it: 'La Dama Red Bear — Rossa Artigianale, 50cl', en: 'La Dama Red Bear — Craft Red Ale, 50cl', price: '8,00 €' },
          { it: 'La Dama La Ciao Frank — Quadrupel Artigianale, 33cl', en: 'La Dama La Ciao Frank — Craft Quadrupel, 33cl', price: '7,50 €' },
          { it: 'La Dama La Bruna — Scura Artigianale, 33cl', en: 'La Dama La Bruna — Craft Dark, 33cl', price: '7,50 €' },
          { it: 'Guinness 33cl', en: 'Guinness 33cl', price: '6,00 €' },
          { it: 'Carlsberg 33cl', en: 'Carlsberg 33cl', price: '4,00 €' },
          { it: 'Brooklyn Session IPA', en: 'Brooklyn Session IPA', price: '5,00 €' },
          { it: 'Corona 33cl', en: 'Corona 33cl', price: '5,00 €' },
          { it: 'Tennent\'s 33cl', en: 'Tennent\'s 33cl', price: '5,00 €' },
          { it: 'Grinbergen Double Doppio Malto d\'Abbazia 33cl', en: 'Grinbergen Double Abbey Double Malt 33cl', price: '6,00 €' },
        ]
      },
      {
        title: { it: 'Liquori & Amari', en: 'Liqueurs & Bitters' },
        items: [
          { it: 'Di Saronno / Ratafia / Baileys / Martini Bianco / Sambuca / Jagermeister / Limoncello / Amaro del Capo / Amaro Montenegro / Fernet Branca', en: 'Di Saronno / Ratafia / Baileys / Martini Bianco / Sambuca / Jagermeister / Limoncello / Amaro del Capo / Amaro Montenegro / Fernet Branca', price: '5,00 €' },
          { it: 'Amaro Unicum / Amaro Formidabile / Amaro Jefferson', en: 'Amaro Unicum / Amaro Formidabile / Amaro Jefferson', price: '6,00 €' },
        ]
      },
      {
        title: { it: 'Grappe', en: 'Grappa' },
        items: [
          { it: 'Castagner Riserva (Barrique)', en: 'Castagner Riserva (Barrique)', price: '6,00 €' },
          { it: 'Sarpa Oro di Poli Barricata (Barrique)', en: 'Sarpa Oro di Poli Barricata (Barrique)', price: '6,00 €' },
          { it: 'Sarpa di Poli Bianca', en: 'Sarpa di Poli (White)', price: '5,00 €' },
          { it: 'Acquavite di Birra Kotori', en: 'Kotori Beer Aquavit', price: '6,00 €' },
        ]
      },
      {
        title: { it: 'Whisky & Whiskey', en: 'Whisky & Whiskey' },
        pdfLink: whiskyPdf,
        items: [
          { it: 'Lagavulin 16', en: 'Lagavulin 16', price: '12,00 €' },
          { it: 'Nobushi Japanese Whisky', en: 'Nobushi Japanese Whisky', price: '8,00 €' },
          { it: 'Bulleit Bourbon', en: 'Bulleit Bourbon', price: '8,00 €' },
          { it: 'Talisker 10', en: 'Talisker 10', price: '8,00 €' },
          { it: 'Johnny Walker Black', en: 'Johnny Walker Black', price: '7,00 €' },
          { it: 'Jack Daniel\'s N°7 / Jack Daniel\'s Honey', en: 'Jack Daniel\'s N°7 / Jack Daniel\'s Honey', price: '7,00 €' },
          { it: 'Laphroaig 10', en: 'Laphroaig 10', price: '8,00 €' },
          { it: 'Jim Beam / Jim Beam Rye', en: 'Jim Beam / Jim Beam Rye', price: '7,00 €' },
          { it: 'Ardbeg 5', en: 'Ardbeg 5', price: '7,00 €' },
        ]
      },
      {
        title: { it: 'Rum, Rhum & Ron', en: 'Rum, Rhum & Ron' },
        items: [
          { it: 'Zacapa 23', en: 'Zacapa 23', price: '12,00 €' },
          { it: 'Bally Ambré Martinique', en: 'Bally Ambré Martinique', price: '7,00 €' },
          { it: 'El Dorado 12', en: 'El Dorado 12', price: '8,00 €' },
          { it: 'Kraken', en: 'Kraken', price: '7,00 €' },
          { it: 'Diplomatico Mantuano', en: 'Diplomatico Mantuano', price: '8,00 €' },
          { it: 'Sailor Jerry', en: 'Sailor Jerry', price: '7,00 €' },
          { it: 'Pampero Anniversario', en: 'Pampero Anniversario', price: '6,00 €' },
        ]
      },
      {
        title: { it: 'Gin & Vodka', en: 'Gin & Vodka' },
        items: [
          { it: 'Hendrick\'s', en: 'Hendrick\'s', price: '8,00 € / drink 10,00 €' },
          { it: 'Sabatini Gin', en: 'Sabatini Gin', price: '8,00 € / drink 10,00 €' },
          { it: 'London Dry N°3', en: 'London Dry N°3', price: '8,00 € / drink 10,00 €' },
          { it: 'Hania Dry Gin alla birra', en: 'Hania Beer Gin', price: '10,00 € / drink 12,00 €' },
          { it: 'Pier67', en: 'Pier67', price: '10,00 € / drink 12,00 €' },
          { it: 'Malfy Limone', en: 'Malfy Limone', price: '8,00 € / drink 10,00 €' },
          { it: 'Portofino', en: 'Portofino', price: '10,00 € / drink 12,00 €' },
          { it: 'Gin Mare', en: 'Gin Mare', price: '8,00 € / drink 10,00 €' },
          { it: 'Beefeater 24', en: 'Beefeater 24', price: '8,00 € / drink 10,00 €' },
          { it: 'Tanqueray N°10', en: 'Tanqueray N°10', price: '8,00 € / drink 10,00 €' },
          { it: 'Engine — Italian organic gin', en: 'Engine — Italian organic gin', price: '10,00 € / drink 12,00 €' },
          { it: 'Tanqueray', en: 'Tanqueray', price: '8,00 € / drink 10,00 €' },
          { it: 'Beluga Vodka', en: 'Beluga Vodka', price: '8,00 € / drink 10,00 €' },
          { it: 'Ketel One Vodka', en: 'Ketel One Vodka', price: '8,00 € / drink 10,00 €' },
        ]
      },
      {
        title: { it: 'Soft Drink', en: 'Soft Drinks' },
        items: [
          { it: 'Tullia Acqua Naturale 50cl', en: 'Tullia Still Water 50cl', price: '1,50 €' },
          { it: 'Tullia Acqua Naturale 1lt', en: 'Tullia Still Water 1lt', price: '2,50 €' },
          { it: 'Nepi Acqua Effervescente 50cl', en: 'Nepi Sparkling Water 50cl', price: '1,50 €' },
          { it: 'Nepi Acqua Effervescente 1lt', en: 'Nepi Sparkling Water 1lt', price: '2,50 €' },
          { it: 'Coca Cola / Coca Cola Zero 33cl Vetro', en: 'Coca Cola / Coca Cola Zero 33cl Glass', price: '3,50 €' },
          { it: 'Chinotto Neri 33cl', en: 'Chinotto Neri 33cl', price: '3,50 €' },
          { it: 'Schweppes Tonica / Schweppes Pompelmo 18cl', en: 'Schweppes Tonic / Schweppes Grapefruit 18cl', price: '3,50 €' },
          { it: 'Cedrata Tassoni 18cl', en: 'Cedrata Tassoni 18cl', price: '3,50 €' },
          { it: 'Red Bull 25cl', en: 'Red Bull 25cl', price: '4,00 €' },
        ]
      },
      {
        title: { it: 'Caffetteria', en: 'Coffee' },
        items: [
          { it: 'Caffè', en: 'Espresso', price: '2,00 €' },
          { it: 'Decaffeinato', en: 'Decaf Espresso', price: '2,00 €' },
          { it: 'Caffè Corretto', en: 'Espresso Corretto', price: '3,00 €' },
          { it: 'Caffè Shakerato con Baileys', en: 'Shaken Espresso with Baileys', price: '7,00 €' },
          { it: 'Caffè Ciccone — Caffè affogato nella sambuca', en: 'Ciccone Coffee — Espresso drowned in Sambuca', price: '6,00 €' },
        ]
      },
    ]
  },

  /* ── e) Menu Allergeni ───────────────────────────────────── */
  {
    id: 'allergeni',
    title: { it: 'Menù Allergeni', en: 'Allergen Menu' },
    subtitle: { it: 'Per la tua sicurezza', en: 'For your safety' },
    subSections: [
      {
        title: { it: 'I 14 Allergeni', en: 'The 14 Allergens' },
        items: [
          { it: '1. Cereali contenenti glutine', en: '1. Grain containing gluten' },
          { it: '2. Crostacei e prodotti derivati', en: '2. Crustacean and crustacean-based products' },
          { it: '3. Uova e prodotti a base di uova', en: '3. Eggs and egg products' },
          { it: '4. Pesce e prodotti a base di pesce', en: '4. Fish and fish products' },
          { it: '5. Arachidi e prodotti derivati', en: '5. Peanut and peanut-based products' },
          { it: '6. Soia e prodotti derivati', en: '6. Soy and soy products' },
          { it: '7. Latte e prodotti derivati (lattosio)', en: '7. Milk and milk products (lactose)' },
          { it: '8. Frutta a guscio', en: '8. Tree nuts' },
          { it: '9. Sedano e prodotti derivati', en: '9. Celery and celery-based products' },
          { it: '10. Senape e prodotti derivati', en: '10. Mustard and mustard-based products' },
          { it: '11. Semi di sesamo e prodotti derivati', en: '11. Sesame seeds and sesame products' },
          { it: '12. Anidride solforosa e solfiti', en: '12. Sulphur dioxide and sulphites' },
          { it: '13. Lupini e prodotti derivati', en: '13. Lupins and lupin-based products' },
          { it: '14. Molluschi e prodotti derivati', en: '14. Molluscs and mollusc-based products' },
        ]
      },
      {
        title: { it: 'Avvertenze principali', en: 'Key Allergen Warnings' },
        items: [
          { it: 'Tris snack (1,6,11)', en: 'Tris snack (1,6,11)' },
          { it: 'Polpette di Pulled Pork (1,3,4,6,7,8,10)', en: 'Pulled Pork Balls (1,3,4,6,7,8,10)' },
          { it: 'Foglie di Borragine (1,4,6,7,8)', en: 'Borage Leaves (1,4,6,7,8)' },
          { it: 'Tartare di Scottona con crema di pecorino (7)', en: 'Scottona Tartare with pecorino cream (7)' },
          { it: 'Crostino Multicereali Hummus Bufala Bacon (1,7)', en: 'Multigrain Toast Hummus Bufala Bacon (1,7)' },
          { it: 'Tagliere Nostrum (7,8)', en: 'Tagliere Nostrum (7,8)' },
          { it: 'Tagliata con salsa Gorgonzola (7)', en: 'Tagliata with Gorgonzola sauce (7)' },
          { it: 'Brasato (1,2,3,4,6,7,8,9,10,14)', en: 'Braised Cheek (1,2,3,4,6,7,8,9,10,14)' },
          { it: 'Tiramisù (1,3,5,6,7,8,11)', en: 'Tiramisù (1,3,5,6,7,8,11)' },
          { it: 'Tortino al cioccolato (1,3,7)', en: 'Chocolate cake (1,3,7)' },
          { it: 'Sbriciolata (1,3,6,7,8)', en: 'Sbriciolata crumble (1,3,6,7,8)' },
        ]
      },
    ],
    note: {
      it: 'Per informazioni complete sugli allergeni consultate il personale di servizio. Serviamo prodotti gluten free ma non possiamo escludere contaminazione da glutine in cucina.',
      en: 'For complete allergen information please ask our staff. We serve gluten-free products but cannot exclude cross-contamination in our kitchen.'
    }
  }
];

/* ─── Accordion Item ─────────────────────────────────────── */
function SubSectionAccordion({ sub, lang }: { sub: SubSection; lang: Lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--rule)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-[16px] py-[18px] text-left group"
      >
        <span className="font-[var(--serif)] text-[clamp(15px,2vw,20px)] text-[var(--cream)]">
          {sub.title[lang]}
        </span>
        <span
          className="flex-shrink-0 w-[28px] h-[28px] rounded-full border border-[var(--rule-strong)] flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-[24px] space-y-[10px]">
            {sub.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start gap-[24px] py-[8px] border-b border-dashed border-[var(--rule)] last:border-0"
              >
                <span className="text-[var(--cream-mute)] text-[14px] leading-[1.5]">
                  {item[lang]}
                </span>
                {item.price && (
                  <span className="flex-shrink-0 font-[var(--mono)] text-[13px] tracking-[0.05em] text-[var(--ember)]">
                    {item.price}
                  </span>
                )}
              </div>
            ))}
            {sub.pdfLink && (
              <div className="pt-[16px]">
                <a
                  href={sub.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] border border-[var(--rule-strong)] px-[18px] py-[10px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.22em] uppercase text-[var(--cream)] transition-all duration-[250ms] hover:bg-[var(--cream)] hover:text-[var(--ink)] hover:border-[var(--cream)]"
                >
                  Scopri di più →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Accordion ──────────────────────────────────── */
function SectionAccordion({ section, lang }: { section: MenuSection; lang: Lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[var(--rule-strong)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-[24px] py-[clamp(20px,3vh,32px)] text-left"
      >
        <div>
          <h2 className="font-[var(--serif)] text-[clamp(32px,4.5vw,64px)] leading-[1.0]">
            {section.title[lang]}
          </h2>
          {section.subtitle && (
            <p className="font-[var(--mono)] text-[11px] tracking-[0.28em] uppercase text-[var(--cream-mute)] mt-[6px]">
              {section.subtitle[lang]}
            </p>
          )}
        </div>
        <span
          className="flex-shrink-0 w-[44px] h-[44px] rounded-full border border-[var(--rule-strong)] flex items-center justify-center transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)]"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-[clamp(32px,5vh,64px)]">
            <div className="space-y-[2px]">
              {section.subSections.map((sub, i) => (
                <SubSectionAccordion key={i} sub={sub} lang={lang} />
              ))}
            </div>
            {section.note && (
              <p className="mt-[24px] font-[var(--mono)] text-[11px] tracking-[0.14em] text-[var(--cream-mute)] leading-[1.6]">
                {section.note[lang]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function MenuPage() {
  const [lang, setLang] = useState<Lang>('it');

  return (
    <div>
      <Navigation solid />

      {/* Page Hero */}
      <section className="px-[var(--gutter)] pt-[160px] pb-[80px] border-b border-[var(--rule)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,165,116,.25), transparent 60%),
                         radial-gradient(ellipse 40% 40% at 80% 10%, rgba(85,107,47,.1), transparent 50%)`
          }}
        />
        <div className="max-w-[var(--maxw)] mx-auto flex items-end justify-between flex-wrap gap-[24px]">
          <div>
            <h1 className="text-[clamp(56px,10vw,140px)] leading-[0.95]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>
              {lang === 'it' ? <>Il nostro<br />Menù.</> : <>Our<br />Menu.</>}
            </h1>
            <p className="mt-[24px] text-[var(--cream-mute)] text-[16px] max-w-[52ch]">
              {lang === 'it'
                ? <>Clicca su ogni sezione per aprirla.<br />Tradizione romana (e non solo) e materia prima dei Castelli, con un tocco di creatività sono la nostra firma.</>
                : 'Click each section to expand it. Roman tradition and Castelli Romani produce, with a dash of creativity that is our signature.'
              }
            </p>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-[8px] border border-[var(--rule-strong)] rounded-full p-[4px]">
            <button
              onClick={() => setLang('it')}
              className="px-[16px] py-[8px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.24em] uppercase transition-all duration-[250ms]"
              style={{
                background: lang === 'it' ? 'var(--cream)' : 'transparent',
                color: lang === 'it' ? 'var(--ink)' : 'var(--cream-mute)'
              }}
            >
              IT
            </button>
            <button
              onClick={() => setLang('en')}
              className="px-[16px] py-[8px] rounded-full font-[var(--mono)] text-[11px] tracking-[0.24em] uppercase transition-all duration-[250ms]"
              style={{
                background: lang === 'en' ? 'var(--cream)' : 'transparent',
                color: lang === 'en' ? 'var(--ink)' : 'var(--cream-mute)'
              }}
            >
              EN
            </button>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <main className="px-[var(--gutter)] pb-[80px]">
        <div className="max-w-[var(--maxw)] mx-auto">
          {MENU_SECTIONS.map((section) => (
            <SectionAccordion key={section.id} section={section} lang={lang} />
          ))}
          <div className="border-t border-[var(--rule-strong)]" />
        </div>
      </main>

      {/* CTA */}
      <section
        className="px-[var(--gutter)] py-[clamp(80px,15vh,180px)] text-center border-t border-[var(--rule)]"
        style={{
          background: `radial-gradient(ellipse 50% 80% at 50% 100%, rgba(139,111,71,.2), transparent 70%), var(--ink)`
        }}
      >
        <span className="font-[var(--mono)] text-[11px] tracking-[0.32em] uppercase text-[var(--cream-mute)]">
          {lang === 'it' ? 'Hai scelto?' : 'Ready to book?'}
        </span>
        <h2 className="font-[var(--serif)] mt-[24px] text-[clamp(48px,9vw,130px)] leading-[1.02] tracking-[-0.01em]">
          {lang === 'it' ? <>Riserva il tavolo,<br /><span>ti aspettiamo.</span></> : <>Reserve your table,<br /><span>we'll be waiting.</span></>}
        </h2>
        <div className="flex gap-[16px] justify-center flex-wrap mt-[36px]">
          <a
            href="https://wa.me/39069421645?text=Salve%20vorrei%20prenotare%20un%20tavolo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] px-[28px] py-[16px] rounded-full font-[var(--mono)] text-[12px] tracking-[0.22em] uppercase transition-all duration-[300ms] hover:opacity-90"
            style={{ background: '#25D366', color: '#fff', border: '1px solid #25D366' }}
          >
            {lang === 'it' ? 'Prenota su WhatsApp →' : 'Book via WhatsApp →'}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
