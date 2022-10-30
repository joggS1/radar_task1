/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
    if(numOfItems <=0){
        return []
    }
    let result:string[] = []
    const tempArr:string[] = array.slice(0) // иначе будем рабоать со ссылкой на объект(ARRAY_OF_UNIQUE_VALUES изменится)
    if (numOfItems > array.length) {
        numOfItems = array.length
    }
    while(result.length < numOfItems){
        const index:number = Math.floor(Math.random() * (tempArr.length-1))
        result.push(tempArr[index])
        tempArr.splice(index, 1)
    }
    
    return result;
}

export default getRandomElements;