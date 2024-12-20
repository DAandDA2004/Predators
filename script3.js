document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById('category');
    const skillsFilter = document.getElementById('skills');
    const userCards = document.querySelectorAll('.user-card');

    function filterCards() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const selectedSkill = skillsFilter.value.toLowerCase();

        userCards.forEach(card => {
            const category = card.dataset.category.toLowerCase();
            const skills = card.dataset.skills.toLowerCase();

            const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
            const skillMatch = selectedSkill === 'all' || skills.includes(selectedSkill);

            card.style.display = categoryMatch && skillMatch ? 'flex' : 'none';
        });
    }

    categoryFilter.addEventListener('change', filterCards);
    skillsFilter.addEventListener('change', filterCards);
});
