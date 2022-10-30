import getRandomElements from "./getRandomElements";
import Table from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 10;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);
console.log(ARRAY_OF_UNIQUE_VALUES);
const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(ARRAY_OF_UNIQUE_VALUES);
console.log(result + "\n\n");


//********************************************************************* 
const tableArr: string[][] =
    [['№', 'Группа', 'Имя', 'Фамилия', 'Оценка'],
    ['1', 'И903Б', 'Никита', 'Лукин','5'],
    ['2', 'И903Б', 'Иван', 'Алкон','5'],
    ['3', 'И903Б', 'Леонид', 'Монахов','5'],
    ['4', 'И903Б', 'Евгений', 'Гаврилюк','2']];
const row: string[] = ['4', 'И904Б', 'Маргарита', 'Маннанова','5'];
const table = new Table(tableArr);
table.print();
table.deleteRow(5, row); // заменить пятую строку на row
table.print();
table.deleteRow(4, true); // удалить четвертую строку
table.print();
<<<<<<< HEAD
const tableArr2: string[] = ['№', 'Группа', 'Имя', 'Фамилия', 'Оценка',
'1', 'И903Б', 'Никита', 'Лукин','5',
'2', 'И903Б', 'Иван', 'Алкон','5',
'3', 'И903Б', 'Леонид', 'Монахов','5',
'4', 'И903Б', 'Евгений', 'Гаврилюк','2'];
const table2 = new Table(tableArr2)
table2.print();
=======
>>>>>>> ee2b3ad47520a55a8b90e571fa227a95ec6659e2
