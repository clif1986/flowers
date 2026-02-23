const catalogProducts = [
    {
        id: "1",
        category: "Напольні",
        name: "Вітрило на 9 чаш",
        price: 950,
        old_price: 1500,
        badge: "9 чаш",
        dimensions: "90 х 70 х 18",
        bowls: "13 / 18",
        image: "foto/Вытрило9.webp"
    },
    {
        id: "2",
        category: "Напольні",
        name: "Бутон на 10 чаш",
        price: 1045,
        old_price: 1595,
        badge: "10 чаш",
        dimensions: "92 х 18 х 71",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "3",
        category: "Напольні",
        name: "Деревце на 9 чаш 13/13",
        price: 920,
        old_price: 1470,
        badge: "9 чаш",
        dimensions: "52 х 22 х 92",
        bowls: "13 / 13",
        image: ""
    },
    {
        id: "4",
        category: "Напольні",
        name: "Кільце на 12 чаш",
        price: 1045,
        old_price: 1595,
        badge: "12 чаш",
        dimensions: "105 х 18 х 70",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "5",
        category: "Напольні",
        name: "Шанель на 5 чаш",
        price: 799,
        old_price: 1349,
        badge: "5 чаш",
        dimensions: "50 х 13 х 35",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "6",
        category: "Напольні",
        name: "Карета на 6 чаш",
        price: 815,
        old_price: 1365,
        badge: "6 чаш",
        dimensions: "94 х 18 х 40",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "7",
        category: "Напольні",
        name: "Фіалка на 15 чаш",
        price: 1099,
        old_price: 1649,
        badge: "15 чаш",
        dimensions: "93 х 30 х 61",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "8",
        category: "Напольні",
        name: "Деревце на 12 малих чаш",
        price: 1399,
        old_price: 1949,
        badge: "12 чаш",
        dimensions: "42 х 25 х 100",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "9",
        category: "Напольні",
        name: "Вітрило на 10 малих чаш",
        price: 950,
        old_price: 1500,
        badge: "10 чаш",
        dimensions: "70 х 18 х 83",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "10",
        category: "Напольні",
        name: "Карета на 8 малих чаш",
        price: 850,
        old_price: 1400,
        badge: "8 чаш",
        dimensions: "70 х 13 х 44",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "11",
        category: "Напольні",
        name: "Серце на 7 чаш",
        price: 899,
        old_price: 1449,
        badge: "7 чаш",
        dimensions: "87 х 18 х 56",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "12",
        category: "Напольні",
        name: "Серце на 8 великих чаш",
        price: 1071,
        old_price: 1621,
        badge: "8 чаш",
        dimensions: "119 х 21 х 79",
        bowls: "16 / 21",
        image: ""
    },
    {
        id: "13",
        category: "Напольні",
        name: "Фіалка на 12 малих чаш",
        price: 999,
        old_price: 1549,
        badge: "12 чаш",
        dimensions: "62 х 26 х 50",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "14",
        category: "Напольні",
        name: "Веселка на 7 чаш",
        price: 860,
        old_price: 1410,
        badge: "7 чаш",
        dimensions: "95 х 18 х 35",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "15",
        category: "Напольні",
        name: "Деревце на 7 чаш",
        price: 899,
        old_price: 1449,
        badge: "7 чаш",
        dimensions: "52 х 22 х 92",
        bowls: "13 / 13",
        image: ""
    },
    {
        id: "16",
        category: "Напольні",
        name: "Серце на 20 чаш",
        price: 2000,
        old_price: 2550,
        badge: "20 чаш",
        dimensions: "100 х 65 х 13",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "17",
        category: "Напольні",
        name: "Серце на 11 чаш",
        price: 1095,
        old_price: 1645,
        badge: "11 чаш",
        dimensions: "100 х 18 х 63",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "18",
        category: "Напольні",
        name: "Дерево на 9 чаш 13/15",
        price: 1300,
        old_price: 1850,
        badge: "9 чаш",
        dimensions: "42 х 25 х 100",
        bowls: "13 / 15",
        image: ""
    },
    {
        id: "19",
        category: "Напольні",
        name: "Інь і Янь на 6 чаш",
        price: 850,
        old_price: 1400,
        badge: "6 чаш",
        dimensions: "62 х 18 х 52",
        bowls: "13 / 18",
        image: ""
    },
    {
        id: "20",
        category: "Напольні",
        name: "Карета на 9 великих чаш",
        price: 1110,
        old_price: 1660,
        badge: "9 чаш",
        dimensions: "130 х 21 х 76",
        bowls: "16 / 21",
        image: ""
    },
    {
        id: "21",
        category: "Напольні",
        name: "Серце на 9 чаш",
        price: 999,
        old_price: 1549,
        badge: "9 чаш",
        dimensions: "87 х 13 х 60",
        bowls: "13 / 13",
        image: ""
    },
    {
        id: "22",
        category: "Напольні",
        name: "Серце на 40 чаш",
        price: 2999,
        old_price: 3549,
        badge: "40 чаш",
        dimensions: "110 х 30 х 80",
        bowls: "10 / 13",
        image: ""
    },
    {
        id: "23",
        category: "Напольні",
        name: "Амфора L на 1 чашу",
        price: 690,
        old_price: 1240,
        badge: "1 чаша",
        dimensions: "40 х 40 х 50",
        bowls: "21 / 24",
        image: ""
    },
    {
        id: "24",
        category: "Напольні",
        name: "Амфора XL на 1 чашу",
        price: 739,
        old_price: 1289,
        badge: "1 чаша",
        dimensions: "75 х 42 х 42",
        bowls: "21 / 24",
        image: ""
    },
    {
        id: "25",
        category: "Напольні",
        name: "Амфора M на 1 чашу",
        price: 680,
        old_price: 1230,
        badge: "1 чаша",
        dimensions: "40 х 40 х 40",
        bowls: "21 / 24",
        image: ""
    },
    {
        id: "26",
        category: "Настінні",
        name: "Серце на 3 чаші",
        price: 599,
        old_price: 1149,
        badge: "3 чаш",
        dimensions: "52 х 21 х 43",
        bowls: "16 / 21",
        image: ""
    },
    {
        id: "27",
        category: "Настінні",
        name: "Метелик на 1 чашу",
        price: 575,
        old_price: 1125,
        badge: "1 чаша",
        dimensions: "28 х 21 х 38",
        bowls: "18 / 21",
        image: ""
    },
    {
        id: "28",
        category: "Настінні",
        name: "Доллар на 2 чаші",
        price: 625,
        old_price: 1175,
        badge: "2 чаші",
        dimensions: "35 х 21 х 72",
        bowls: "16 / 21",
        image: ""
    },
    {
    name: "Індивідуальний проєкт",
    category: "Напольні", // або створіть нову категорію
    price: 0, 
    badge: "ВАШ ДИЗАЙН",
    image: "foto/custom.jpg", // фото креслення або металу в роботі
    dimensions: "Будь-які",
    bowls: "На вибір"
}
];