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


function randomSona2(){

    //massiivi loomine vene sõnad
    const sonad3=[
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

    //random sõna
    const juhuslikSona2=Math.floor(Math.random()*sonad3.length);

    //võtame random sõna massivist
    const sona=sonad3[juhuslikSona2];

    //lisame html-lehele
    document.getElementById("random-sona2").innerHTML=sona;

    //juhuslikult valitud eestikeelse sõna indeksi salvestamine
    currentIndex = juhuslikSona2;
}

function kontrollimine2(){
    const a="Õige";
    const b="Vale";

    //massiivi loomine eest sõnad
    const sonad4=[
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


    //kasutaja kirjutatud sõna
    const sona=document.getElementById("kontroll2").value;

    //valideerimine
    if (currentIndex >= 0 && sona === sonad4[currentIndex]) {
        document.getElementById("vastus2").innerHTML = a;
    } else {
        document.getElementById("vastus2").innerHTML = b;
    }
}
