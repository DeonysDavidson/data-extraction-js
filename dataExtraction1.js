let array1 = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]

let array2 = [];
const dataExtract = (input) => {
    input.forEach(element => {
        if(element['childrens'].length===0){
            array2.push(element);
        }
        else{
            let input2 = element['childrens'];
            element['childrens'] = [];
            array2.push(element);
           dataExtract(input2);
        }
    });
}

dataExtract(array1);
console.log(array2);