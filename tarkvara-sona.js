let currentIndex = -1;

function randomSona(){
    //massiivi loomine eest sõnad
    const sonad=[
      'teostus',
      'algoritm',
      'kavand',
      'kasutajaliides',
      'mudel',
      'andmebaasi skeem',
      'standart',
      'tsükkel',
      'andmetöötus',
      'andmestruktur',
      'arendusskeskkond',
      'projektihaldus töörist',
      'kavandaminem',
      'iteratsioon',
      'parandus',
      'parandamine'
    ];

    //random sõna
    const juhuslikSona=Math.floor(Math.random()*sonad.length);

    //võtame random sõna massivist
    const sona=sonad[juhuslikSona];

    //lisame html-lehele
    document.getElementById("random-sona").innerHTML=sona;

    //juhuslikult valitud eestikeelse sõna indeksi salvestamine
    currentIndex = juhuslikSona;
}

function kontrollimine(){
    const a="Õige";
    const b="Vale";

    //massiivi loomine vene sõnad
    const sonad2=[
        'реализация',
        'алгоритм',
        'проект',
        'пользовательский инткрфейс',
        'модель',
        'схема базы данных',
        'стандарт',
        'цикл',
        'обработка данных',
        'структура данных',
        'среда разработки',
        'команда управления проектом',
        'планирование',
        'итерация',
        'коррекция',
        'корректирование'
    ];

    //kasutaja kirjutatud sõna
    const sona=document.getElementById("kontroll").value;

    //valideerimine
    if (currentIndex >= 0 && sona === sonad2[currentIndex]) {
        document.getElementById("vastus").innerHTML = a;
    } else {
        document.getElementById("vastus").innerHTML = b;
    }
}


