<script>
    document.querySelector('.search__form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission

        const searchTerm = document.querySelector('.search__input').value.toLowerCase();
        const items = document.querySelectorAll('.searchable-item');
        let found = false;

        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                found = true;

                // Toggle the search checkbox
                document.getElementById('search-toggle').checked = true;

                // Scroll to the item smoothly
                item.scrollIntoView({ behavior: 'smooth' });
            }
        });

        if (!found) {
            alert('No matching items found');
        }
    });
</script>
