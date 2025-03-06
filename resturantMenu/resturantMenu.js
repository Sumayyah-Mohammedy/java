const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Sundae', 'Cheese Cake'];

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
