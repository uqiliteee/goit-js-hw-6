const findItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${findItems.length}`);


// function findCategories(categories) {
//     for (const category of categories) {
//         'Category:' category.firstElementChild.textContent;
//         'Elements:' category.ElementChild.length;
//     };
// }
// console.log(findCategories)

findItems.forEach(item => {
    console.log(`Categories: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}
)