// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menuArray) {
  // create menu and add class 'menu' to it
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // create menu items into an unordered list
  const menuItems = document.createElement('ul');

  // create, pupulate and append a list item for each item in the menuArray
  menuArray.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuItems.appendChild(menuItem);
  })
  
  // append menu items list to the menu
  menu.appendChild(menuItems);
  
  // Toggle menu based on menu button
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    menu.classList.toggle('menu--open')
    event.stopPropagation();
  })

  // add event listener to body of page to look for click. Close menu when it's open.
  const body = document.querySelector('body');
  body.addEventListener('click', event => {
    if (menu.classList.contains('menu--open')){
      menu.classList.toggle('menu--open');
    } 
  })
  
  // exclude the menu itself from closing when clicked on.
  menu.addEventListener('click', event => {
    event.stopPropagation();
  })
  
  return menu;
}

const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));