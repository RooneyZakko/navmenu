const menuItems = [
    {"title": "home", "url": "/"},
    {"title": "producten", "url": "/producten/"},
    {"title": "Overons", "url": "/overons/"},
    {"title": "contact", "url": "/contact/"}
];

function createMenu(menuItems) {
    const menu = document.createElement('ul');
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.title;
        link.href = item.url;
        listItem.appendChild(link);
        menu.appendChild(listItem);
    });
    return menu;
}

const menu = createMenu(menuItems);
document.body.appendChild(menu); // Voeg het menu toe aan de body van de pagina
