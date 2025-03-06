const breakfastMenu = ['Pancakes -$5', 'Eggs Benedict -$7', 'Oatmeal -$8', 'Frittata -$10'];
const mainCourseMenu = ['Steak -$25', 'Pasta -$20', 'Burger -$15', 'Salmon -$18'];
const dessertMenu = ['Cake -$20', 'Ice Cream -$7', 'Sundae -$12' , 'Cheese Cake -$15'];

const breakfastMenuItemshtml = breakfastMenu.map((item, index) =>`<p> Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemshtml;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincoursemenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for(i=0; i<dessertMenu.length;i++){
    dessertItem += `<p> Item ${i+1}: ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
