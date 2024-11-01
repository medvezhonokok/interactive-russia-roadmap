const roads = [
    {
        name: "М-11 «Нева»",
        length: 669,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [59.9343, 30.3351]  // Санкт-Петербург
        ],
        info: "Дорога М-11 «Нева» соединяет Москву и Санкт-Петербург. Построена в 2014 году. Интересный факт: на этой трассе находится самый длинный мост в России - мост через реку Нева."
    },
    {
        name: "М-4 «Дон»",
        length: 1543,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [47.2225, 39.7188]  // Ростов-на-Дону
        ],
        info: "М-4 «Дон» — это одна из ключевых магистралей, связывающая Москву и Ростов-на-Дону. Построена в 2003 году. Интересный факт: трасса проходит через множество регионов, известных своими винодельнями."
    },
    {
        name: "М-1 «Беларусь»",
        length: 625,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [54.5185, 30.2035]  // Минск
        ],
        info: "М-1 «Беларусь» связывает Москву с Минском и считается важной для международных перевозок. Построена в 2000 году. Интересный факт: на трассе находятся множество исторических памятников."
    },
    {
        name: "М-3 «Украина»",
        length: 450,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [52.8042, 41.8482]  // Орел
        ],
        info: "Дорога М-3 «Украина» соединяет Москву и Орел. Построена в 1999 году. Интересный факт: трасса проходит через живописные места, популярные среди туристов."
    },
    {
        name: "М-7 «Волга»",
        length: 1363,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [56.8343, 53.2254]  // Казань
        ],
        info: "М-7 «Волга» соединяет Москву и Казань, проходя через множество крупных городов. Построена в 2004 году. Интересный факт: трасса известна своими пейзажами вдоль реки Волги."
    },
    {
        name: "М-10 «Россия»",
        length: 1485,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [61.2521, 73.4082]  // Санкт-Петербург
        ],
        info: "М-10 «Россия» — одна из старейших трасс, соединяющая Москву и Санкт-Петербург. Построена в 1960 году. Интересный факт: по дороге проходят различные фестивали и культурные мероприятия."
    },
    {
        name: "А-100 «Москва - Кострома»",
        length: 400,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [57.7639, 40.9269]  // Кострома
        ],
        info: "А-100 соединяет Москву и Кострому, проходя через живописные районы. Построена в 2001 году. Интересный факт: на трассе много исторических достопримечательностей."
    },
    {
        name: "Р-21 «Кола»",
        length: 1930,
        coordinates: [
            [61.5240, 105.3188], // Москва
            [68.9585, 33.0850]   // Мурманск
        ],
        info: "Р-21 «Кола» — это одна из самых длинных дорог России, соединяющая центральную часть страны с Мурманском. Построена в 1995 году. Интересный факт: трасса проходит через северные регионы с уникальной природой."
    },
    {
        name: "А-114 «Ревда - Нижний Тагил»",
        length: 150,
        coordinates: [
            [56.8369, 60.6050], // Екатеринбург
            [57.8734, 60.2953]  // Нижний Тагил
        ],
        info: "А-114 соединяет Ревду и Нижний Тагил. Построена в 2005 году. Интересный факт: дорога проходит через промышленные зоны и парковые участки."
    },
    {
        name: "А-130 «Москва - Можайск»",
        length: 110,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [55.4280, 36.0175]  // Можайск
        ],
        info: "А-130 соединяет Москву и Можайск. Построена в 2000 году. Интересный факт: трасса известна своими живописными ландшафтами."
    },
    {
        name: "М-5 «Урал»",
        length: 2000,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [54.7381, 55.9577]  // Челябинск
        ],
        info: "М-5 «Урал» — одна из главных магистралей, связывающая Европейскую часть России с Уралом. Построена в 2005 году. Интересный факт: на трассе много исторических памятников."
    },
    {
        name: "А-350 «Пермь - Чайковский»",
        length: 120,
        coordinates: [
            [58.0105, 56.2500], // Пермь
            [57.3306, 54.1140]  // Чайковский
        ],
        info: "А-350 соединяет Пермь и Чайковский. Построена в 2002 году. Интересный факт: дорога известна своими природными красотами."
    },
    {
        name: "Р-242 «Нижний Новгород - Киров»",
        length: 200,
        coordinates: [
            [56.2965, 43.9361], // Нижний Новгород
            [58.5966, 49.6372]  // Киров
        ],
        info: "Р-242 соединяет Нижний Новгород и Киров. Построена в 2010 году. Интересный факт: трасса проходит через живописные леса."
    },
    {
        name: "А-119 «Москва - Коломна»",
        length: 90,
        coordinates: [
            [55.7558, 37.6176], // Москва
            [55.4450, 38.7763]  // Коломна
        ],
        info: "А-119 соединяет Москву и Коломну. Построена в 2007 году. Интересный факт: на трассе находится множество исторических памятников."
    },
    {
        name: "Р-260 «Урал»",
        length: 580,
        coordinates: [
            [54.7381, 55.9577], // Челябинск
            [55.0103, 56.3056]  // Магнитогорск
        ],
        info: "Р-260 соединяет Челябинск и Магнитогорск. Построена в 2008 году. Интересный факт: трасса проходит через горные районы."
    },
];
