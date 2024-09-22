const form = document.getElementById('contactForm');
form.addEventListener('submit', event => {
    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    if (!name.value.match(/^[A-Za-z/s]/)) {
        alert('Please enter a valid name (letters only).');
        valid = false;
    }
    
    // Email validation
    const email = document.getElementById('email');
    if (!email.validity.valid) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});

function scrollDown(){
    var contactFrm = document.getElementById("targetDiv");
    contactFrm.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("targetDiv").scrollIntoView({ behavior: 'smooth' });
});

//Filter lists

const properties = [
    {
        id: 1,
        location: 'city',
        type: 'apartment',
        price: 150000,
        image: 'images/ap2.jpeg',
        description: 'Beautiful city apartment with modern amenities.'
    },
    {
        id: 2,
        location: 'suburbs',
        type: 'house',
        price: 300000,
        image: 'images/ap1.jpg',
        description: 'Spacious house in a quiet neighborhood.'
    },
    {
        id: 3,
        location: 'city',
        type: 'house',
        price: 250000,
        image: 'images/house2.jpg',
        description: 'Charming city house close to public transport.'
    },
    {
        id: 4,
        location: 'suburbs',
        type: 'apartment',
        price: 200000,
        image: 'images/house1.jpg',
        description: 'Cozy apartment with a garden view.'
    }
];

function displayProperties(filteredProperties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    filteredProperties.forEach(property => {
        const item = document.createElement('div');
        item.classList.add('property-item');
        item.innerHTML = `
            <img src="${property.image}" alt="${property.description}">
            <h3>${property.type} in ${property.location}</h3>
            <p>${property.description}</p>
            <p>Price: $${property.price}</p>
        `;
        propertyList.appendChild(item);
    });
}

function filterProperties() {
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    const maxPrice = document.getElementById('price').value;

    const filtered = properties.filter(property => {
        const matchesLocation = location === 'all' || property.location === location;
        const matchesType = type === 'all' || property.type === type;
        const matchesPrice = !maxPrice || property.price <= maxPrice;

        return matchesLocation && matchesType && matchesPrice;
    });

    displayProperties(filtered);
}

// Initial display
displayProperties(properties);

// Event listener for filtering
document.getElementById('filter-button').addEventListener('click', filterProperties);

