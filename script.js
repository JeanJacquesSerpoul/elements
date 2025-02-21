// Liste complète des éléments (118) avec configuration électronique simplifiée
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogène', category: 'non-metal', row: 1, col: 1, electronConfig: '1s¹' },
    { number: 2, symbol: 'He', name: 'Hélium', category: 'noble-gas', row: 1, col: 18, electronConfig: '1s²' },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', row: 2, col: 1, electronConfig: '1s² 2s¹' },
    { number: 4, symbol: 'Be', name: 'Béryllium', category: 'alkaline-earth-metal', row: 2, col: 2, electronConfig: '1s² 2s²' },
    { number: 5, symbol: 'B', name: 'Bore', category: 'metalloid', row: 2, col: 13, electronConfig: '1s² 2s² 2p¹' },
    { number: 6, symbol: 'C', name: 'Carbone', category: 'non-metal', row: 2, col: 14, electronConfig: '1s² 2s² 2p²' },
    { number: 7, symbol: 'N', name: 'Azote', category: 'non-metal', row: 2, col: 15, electronConfig: '1s² 2s² 2p³' },
    { number: 8, symbol: 'O', name: 'Oxygène', category: 'non-metal', row: 2, col: 16, electronConfig: '1s² 2s² 2p⁴' },
    { number: 9, symbol: 'F', name: 'Fluor', category: 'halogen', row: 2, col: 17, electronConfig: '1s² 2s² 2p⁵' },
    { number: 10, symbol: 'Ne', name: 'Néon', category: 'noble-gas', row: 2, col: 18, electronConfig: '1s² 2s² 2p⁶' },
    { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', row: 3, col: 1, electronConfig: '1s² 2s² 2p⁶ 3s¹' },
    { number: 12, symbol: 'Mg', name: 'Magnésium', category: 'alkaline-earth-metal', row: 3, col: 2, electronConfig: '1s² 2s² 2p⁶ 3s²' },
    { number: 13, symbol: 'Al', name: 'Aluminium', category: 'post-transition-metal', row: 3, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p¹' },
    { number: 14, symbol: 'Si', name: 'Silicium', category: 'metalloid', row: 3, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p²' },
    { number: 15, symbol: 'P', name: 'Phosphore', category: 'non-metal', row: 3, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p³' },
    { number: 16, symbol: 'S', name: 'Soufre', category: 'non-metal', row: 3, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁴' },
    { number: 17, symbol: 'Cl', name: 'Chlore', category: 'halogen', row: 3, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁵' },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', row: 3, col: 18, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶' },
    { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', row: 4, col: 1, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹' },
    { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', row: 4, col: 2, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²' },
    { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', row: 4, col: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²' },
    { number: 22, symbol: 'Ti', name: 'Titane', category: 'transition-metal', row: 4, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²' },
    { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', row: 4, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²' },
    { number: 24, symbol: 'Cr', name: 'Chrome', category: 'transition-metal', row: 4, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹' },
    { number: 25, symbol: 'Mn', name: 'Manganèse', category: 'transition-metal', row: 4, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²' },
    { number: 26, symbol: 'Fe', name: 'Fer', category: 'transition-metal', row: 4, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²' },
    { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', row: 4, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²' },
    { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', row: 4, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²' },
    { number: 29, symbol: 'Cu', name: 'Cuivre', category: 'transition-metal', row: 4, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹' },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', row: 4, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²' },
    { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', row: 4, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹' },
    { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', row: 4, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²' },
    { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', row: 4, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³' },
    { number: 34, symbol: 'Se', name: 'Sélénium', category: 'non-metal', row: 4, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴' },
    { number: 35, symbol: 'Br', name: 'Brome', category: 'halogen', row: 4, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵' },
    { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', row: 4, col: 18, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶' },
    { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', row: 5, col: 1, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹' },
    { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', row: 5, col: 2, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²' },
    { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', row: 5, col: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²' },
    { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', row: 5, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²' },
    { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', row: 5, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹' },
    { number: 42, symbol: 'Mo', name: 'Molybdène', category: 'transition-metal', row: 5, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹' },
    { number: 43, symbol: 'Tc', name: 'Technétium', category: 'transition-metal', row: 5, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²' },
    { number: 44, symbol: 'Ru', name: 'Ruthénium', category: 'transition-metal', row: 5, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹' },
    { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', row: 5, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹' },
    { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', row: 5, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰' },
    { number: 47, symbol: 'Ag', name: 'Argent', category: 'transition-metal', row: 5, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', row: 5, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²' },
    { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', row: 5, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹' },
    { number: 50, symbol: 'Sn', name: 'Étain', category: 'post-transition-metal', row: 5, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²' },
    { number: 51, symbol: 'Sb', name: 'Antimoine', category: 'metalloid', row: 5, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³' },
    { number: 52, symbol: 'Te', name: 'Tellure', category: 'metalloid', row: 5, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴' },
    { number: 53, symbol: 'I', name: 'Iode', category: 'halogen', row: 5, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵' },
    { number: 54, symbol: 'Xe', name: 'Xénon', category: 'noble-gas', row: 5, col: 18, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶' },
    { number: 55, symbol: 'Cs', name: 'Césium', category: 'alkali-metal', row: 6, col: 1, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹' },
    { number: 56, symbol: 'Ba', name: 'Baryum', category: 'alkaline-earth-metal', row: 6, col: 2, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²' },
    { number: 57, symbol: 'La', name: 'Lanthane', category: 'lanthanide', row: 8, col: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²' },
    { number: 58, symbol: 'Ce', name: 'Cérium', category: 'lanthanide', row: 8, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹ 5d¹ 6s²' },
    { number: 59, symbol: 'Pr', name: 'Praséodyme', category: 'lanthanide', row: 8, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f³ 6s²' },
    { number: 60, symbol: 'Nd', name: 'Néodyme', category: 'lanthanide', row: 8, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁴ 6s²' },
    { number: 61, symbol: 'Pm', name: 'Prométhium', category: 'lanthanide', row: 8, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁵ 6s²' },
    { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', row: 8, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁶ 6s²' },
    { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', row: 8, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 6s²' },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', row: 8, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁷ 5d¹ 6s²' },
    { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', row: 8, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f⁹ 6s²' },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', row: 8, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁰ 6s²' },
    { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', row: 8, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹¹ 6s²' },
    { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', row: 8, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹² 6s²' },
    { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', row: 8, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹³ 6s²' },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', row: 8, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 6s²' },
    { number: 71, symbol: 'Lu', name: 'Lutécium', category: 'lanthanide', row: 8, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹ 6s²' },
    { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', row: 6, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d² 6s²' },
    { number: 73, symbol: 'Ta', name: 'Tantale', category: 'transition-metal', row: 6, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d³ 6s²' },
    { number: 74, symbol: 'W', name: 'Tungstène', category: 'transition-metal', row: 6, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁴ 6s²' },
    { number: 75, symbol: 'Re', name: 'Rhénium', category: 'transition-metal', row: 6, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁵ 6s²' },
    { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', row: 6, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁶ 6s²' },
    { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', row: 6, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁷ 6s²' },
    { number: 78, symbol: 'Pt', name: 'Platine', category: 'transition-metal', row: 6, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d⁹ 6s¹' },
    { number: 79, symbol: 'Au', name: 'Or', category: 'transition-metal', row: 6, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹' },
    { number: 80, symbol: 'Hg', name: 'Mercure', category: 'transition-metal', row: 6, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s²' },
    { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', row: 6, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p¹' },
    { number: 82, symbol: 'Pb', name: 'Plomb', category: 'post-transition-metal', row: 6, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p²' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', row: 6, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p³' },
    { number: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition-metal', row: 6, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁴' },
    { number: 85, symbol: 'At', name: 'Astate', category: 'halogen', row: 6, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁵' },
    { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', row: 6, col: 18, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶' },
    { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', row: 7, col: 1, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 7s¹' },
    { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth-metal', row: 7, col: 2, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 7s²' },
    { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', row: 9, col: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 6d¹ 7s²' },
    { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', row: 9, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 6d² 7s²' },
    { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', row: 9, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f² 6d¹ 7s²' },
    { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', row: 9, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f³ 6d¹ 7s²' },
    { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', row: 9, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁴ 6d¹ 7s²' },
    { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', row: 9, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁶ 7s²' },
    { number: 95, symbol: 'Am', name: 'Américium', category: 'actinide', row: 9, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁷ 7s²' },
    { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', row: 9, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁷ 6d¹ 7s²' },
    { number: 97, symbol: 'Bk', name: 'Berkélium', category: 'actinide', row: 9, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f⁹ 7s²' },
    { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', row: 9, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁰ 7s²' },
    { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', row: 9, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹¹ 7s²' },
    { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', row: 9, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹² 7s²' },
    { number: 101, symbol: 'Md', name: 'Mendélévium', category: 'actinide', row: 9, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹³ 7s²' },
    { number: 102, symbol: 'No', name: 'Nobélium', category: 'actinide', row: 9, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s²' },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', row: 9, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 7s² 7p¹' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', row: 7, col: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d² 7s²' },
    { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', row: 7, col: 5, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d³ 7s²' },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', row: 7, col: 6, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁴ 7s²' },
    { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', row: 7, col: 7, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁵ 7s²' },
    { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', row: 7, col: 8, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁶ 7s²' },
    { number: 109, symbol: 'Mt', name: 'Meitnérium', category: 'transition-metal', row: 7, col: 9, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁷ 7s²' },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', row: 7, col: 10, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁸ 7s²' },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', row: 7, col: 11, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d⁹ 7s²' },
    { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', row: 7, col: 12, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s²' },
    { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition-metal', row: 7, col: 13, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p¹' },
    { number: 114, symbol: 'Fl', name: 'Flérovium', category: 'post-transition-metal', row: 7, col: 14, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p²' },
    { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition-metal', row: 7, col: 15, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p³' },
    { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition-metal', row: 7, col: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁴' },
    { number: 117, symbol: 'Ts', name: 'Tennesse', category: 'halogen', row: 7, col: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁵' },
    { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', row: 7, col: 18, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f¹⁴ 6d¹⁰ 7s² 7p⁶' }
];

// Sélection du conteneur
const periodicTable = document.querySelector('.periodic-table');

// Création des cases vides pour compléter la grille
for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 18; col++) {
        const isElement = elements.find(el => el.row === row && el.col === col);
        if (!isElement) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            emptyDiv.style.gridRow = row;
            emptyDiv.style.gridColumn = col;
            periodicTable.appendChild(emptyDiv);
        }
    }
}

// Génération des éléments
elements.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('element', element.category);
    div.dataset.number = element.number;
    div.dataset.name = element.name;
    div.dataset.symbol = element.symbol;
    div.dataset.electronConfig = element.electronConfig;
    div.style.gridRow = element.row;
    div.style.gridColumn = element.col;
    div.innerHTML = `
                <div class="number">${element.number}</div>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;
    periodicTable.appendChild(div);
});

// Gestion de la fenêtre modale
const modal = document.getElementById('elementModal');
const modalSymbol = document.getElementById('modalSymbol');
const modalName = document.getElementById('modalName');
const modalElectronConfig = document.getElementById('modalElectronConfig');
const closeModal = document.getElementById('closeModal');

// Afficher la fenêtre modale à côté du clic/toucher
document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', (e) => {
        // Remplir les informations
        modalSymbol.textContent = element.dataset.symbol;
        modalName.textContent = element.dataset.name;
        modalElectronConfig.textContent = `Configuration électronique: ${element.dataset.electronConfig}`;

        // Positionner la fenêtre
        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Coordonnées du clic
        let x = e.pageX;
        let y = e.pageY;

        // Ajuster pour rester dans la fenêtre
        if (x + modalWidth + 10 > viewportWidth) {
            x = x - modalWidth - 10; // Placer à gauche si ça dépasse à droite
        } else {
            x = x + 10; // Placer à droite du clic
        }

        if (y + modalHeight + 10 > viewportHeight) {
            y = y - modalHeight - 10; // Placer au-dessus si ça dépasse en bas
        }

        // Appliquer la position
        modal.style.left = `${x}px`;
        modal.style.top = `${y}px`;
        modal.style.display = 'block';
    });
});

// Fermer la fenêtre modale
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermer la fenêtre en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !e.target.closest('.element')) {
        modal.style.display = 'none';
    }
});