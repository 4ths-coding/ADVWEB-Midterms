
// Object to store sublist items for each main navigation item
const sublistContent = {
    home: [
        { text: 'Sublist Home 1', link: '#' },
        { text: 'Sublist Home 2', link: '#' },
        { text: 'Sublist Home 3', link: '#' }
    ],
    about: [
        { text: 'Sublist About 1', link: '#' },
        { text: 'Sublist About 2', link: '#' },
        { text: 'Sublist About 3', link: '#' }
    ],
    campus: [
        { text: 'MAKATI CAMPUS', link: '#' },
        { text: 'CEBU CAMPUS', link: '#' }
    ],
    family: [
        { text: 'MANAGEMENT COMMITTEE', link: '#' },
        { text: 'ACADEMIC HEADS', link: '#' },
        { text: 'DEPARTMENTS', link: '#' }
    ],
    facilities: [
        { text: 'MEZZANINE', link: '#' },
        { text: 'CAFETERIA', link: '#' },
        { text: 'LIBRARY', link: '#' },
        { text: 'SEWING ROOM', link: '#' },
        { text: 'FASHION DESIGN ROOM', link: '#' },
        { text: 'GREEN ROOM', link: '#' },
        { text: 'SOUND ROOM', link: '#' },
        { text: 'MULTIMEDIA ARTS LABORATORY', link: '#' },
        { text: 'MORE', link: '#' },
    ],
    organizations: [
        { text: 'Sublist Organizations 1', link: '#' },
        { text: 'Sublist Organizations 2', link: '#' },
        { text: 'Sublist Organizations 3', link: '#' }
    ],
    events: [
        { text: 'Student Orientation and Registration (SOAR)', link: '#' },
        { text: 'iACADEMY Foundation Week', link: '#' },
        { text: 'Therapets', link: '#' },
        { text: 'PBL Expo', link: '#' },
        { text: 'Battle League', link: '#' },
        { text: 'Creative Camp', link: '#' },
        { text: 'Recognition Day', link: '#' },
        { text: 'MORE', link: '#' },
    ],
    others: [
        { text: 'Sublist Others 1', link: '#' },
        { text: 'Sublist Others 2', link: '#' },
        { text: 'Sublist Others 3', link: '#' }
    ]
};

// Function to update the sublist based on the hovered main navigation item
function updateSublist(key) {
    // Get the sublist element by its ID
    const sublist = document.getElementById('navigationSublist');
    // Get the sublist items for the given key from the sublistContent object
    const sublistItems = sublistContent[key] || [];

    // Clear the current sublist content
    sublist.innerHTML = '';

    // Loop through each sublist item and create the corresponding HTML elements
    sublistItems.forEach(subitem => {
        // Create a new flex item (div element)
        const item = document.createElement('div');
        item.className = 'navigation__subitem';
        // Create a new anchor (a) element
        const a = document.createElement('a');
        a.href = subitem.link;
        a.className = 'navigation__sublink';
        a.textContent = subitem.text;
        // Append the anchor element to the list item element
        item.appendChild(a);
        // Append the list item element to the sublist element
        sublist.appendChild(item);
    });

    // Apply animation class to sublist
    sublist.classList.remove('animate'); // Remove any existing animation class
    void sublist.offsetWidth; // Trigger a reflow to restart the animation
    sublist.classList.add('animate');

    // Make sure the sublist is displayed
    sublist.style.display = 'block';
}

// Make the function globally available
window.updateSublist = updateSublist;



// Add color to the nav button and search button when scrolled down to intro gallery
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector(".search__button");
    const navButton = document.querySelector(".navigation__button");

    const introGallery = document.getElementById('galleryIntro');
    const introGalleryPosition = introGallery.offsetTop;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= introGalleryPosition) {
            searchButton.classList.add("colored");
            navButton.classList.add("colored");
        } else {
            searchButton.classList.remove("colored");
            navButton.classList.remove("colored");
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view on load
    window.scrollTo(0, 0);

});

