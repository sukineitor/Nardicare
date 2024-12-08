const remedies = [
    { id: 1, name: "Ginger Tea", type: "herbal", description: "Helps relieve nausea and improves digestion.", ingredients: ["Fresh ginger", "Hot water", "Honey (optional)"], preparation: "1. Peel and thinly slice 2-3 cm of fresh ginger.\n2. Place the ginger in a cup and pour boiling water over it.\n3. Let it steep for 5-10 minutes.\n4. Strain the tea and add honey to taste if desired.", rating: 0, image: "https://images.unsplash.com/photo-1573573621645-8e4283c4d965?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, name: "Salt Water Gargle", type: "food", description: "Soothes sore throat and reduces inflammation.", ingredients: ["Warm water", "Salt"], preparation: "1. Mix 1/4 teaspoon of salt in 1 cup of warm water.\n2. Gargle with the solution for 30 seconds.\n3. Spit out the water. Do not swallow.\n4. Repeat several times a day as needed.", rating: 0, image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, name: "Chamomile Eye Compress", type: "herbal", description: "Relieves eye irritation and reduces swelling.", ingredients: ["Chamomile tea bags", "Hot water"], preparation: "1. Prepare two chamomile tea bags in hot water.\n2. Allow the tea bags to cool until they're warm.\n3. Place one tea bag over each closed eye.\n4. Relax for 10-15 minutes.\n5. Repeat as needed.", rating: 0, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 4, name: "Honey for Cough", type: "food", description: "Calms cough and soothes the throat.", ingredients: ["Pure honey"], preparation: "1. Take a tablespoon of pure honey.\n2. Let the honey slowly slide down your throat.\n3. Repeat several times a day as needed.\n4. For children under 1 year, consult a pediatrician before use.", rating: 0, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 5, name: "Oatmeal Bath", type: "food", description: "Relieves dry, itchy skin.", ingredients: ["Ground oatmeal", "Warm water"], preparation: "1. Fill the bathtub with warm water.\n2. Add 1 cup of ground oatmeal to the water.\n3. Stir to distribute the oatmeal.\n4. Soak your body in the bath for 15-20 minutes.\n5. Gently rinse and pat your skin dry with a soft towel.", rating: 0, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 6, name: "Lemon and Honey Drink", type: "food", description: "Boosts immune system and soothes sore throat.", ingredients: ["Lemon", "Honey", "Warm water"], preparation: "1. Squeeze half a lemon into a cup of warm water.\n2. Add 1-2 tablespoons of honey.\n3. Stir well and drink while warm.", rating: 0, image: "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 7, name: "Peppermint Tea", type: "herbal", description: "Relieves digestive discomfort and headaches.", ingredients: ["Peppermint leaves or tea bag", "Hot water"], preparation: "1. Place peppermint leaves or tea bag in a cup.\n2. Pour hot water over it.\n3. Steep for 5-10 minutes.\n4. Strain (if using leaves) and drink.", rating: 0, image: "https://images.unsplash.com/photo-1565288711-0b9c0485a89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 8, name: "Aloe Vera Gel", type: "herbal", description: "Soothes sunburns and minor skin irritations.", ingredients: ["Fresh aloe vera leaf"], preparation: "1. Cut open a fresh aloe vera leaf.\n2. Scoop out the gel.\n3. Apply directly to the affected area.\n4. Repeat 2-3 times daily.", rating: 0, image: "https://images.unsplash.com/photo-1577172249844-716c5a89c94a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 9, name: "Turmeric Milk", type: "food", description: "Anti-inflammatory and immune-boosting drink.", ingredients: ["Milk", "Turmeric powder", "Black pepper", "Honey (optional)"], preparation: "1. Heat 1 cup of milk in a saucepan.\n2. Add 1/2 teaspoon turmeric powder and a pinch of black pepper.\n3. Simmer for 5 minutes, stirring occasionally.\n4. Remove from heat and add honey to taste if desired.\n5. Drink while warm.", rating: 0, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 10, name: "Eucalyptus Steam Inhalation", type: "herbal", description: "Clears congestion and soothes respiratory issues.", ingredients: ["Eucalyptus essential oil", "Hot water", "Towel"], preparation: "1. Add 3-5 drops of eucalyptus oil to a bowl of hot water.\n2. Drape a towel over your head and the bowl.\n3. Inhale the steam for 5-10 minutes.\n4. Repeat 2-3 times daily.", rating: 0, image: "https://images.unsplash.com/photo-1519780465496-bbc77d9c1576?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 11, name: "Apple Cider Vinegar Tonic", type: "food", description: "Supports digestion and may help with weight management.", ingredients: ["Apple cider vinegar", "Water", "Honey (optional)"], preparation: "1. Mix 1-2 tablespoons of apple cider vinegar in a glass of water.\n2. Add honey to taste if desired.\n3. Drink before meals.\n4. Do not exceed 2 tablespoons per day.", rating: 0, image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 12, name: "Garlic Immune Booster", type: "food", description: "Strengthens the immune system and has antimicrobial properties.", ingredients: ["Fresh garlic cloves", "Honey"], preparation: "1. Crush 2-3 garlic cloves and let them sit for 10 minutes.\n2. Mix with a tablespoon of honey.\n3. Consume daily for immune support.", rating: 0, image: "https://images.unsplash.com/photo-1615477550927-6ec8445fcf2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 13, name: "Epsom Salt Bath", type: "other", description: "Relieves muscle aches and reduces stress.", ingredients: ["Epsom salt", "Warm bath water", "Essential oils (optional)"], preparation: "1. Fill your bathtub with warm water.\n2. Add 1-2 cups of Epsom salt.\n3. Optional: Add a few drops of your favorite essential oil.\n4. Soak for 15-20 minutes.", rating: 0, image: "https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 14, name: "Lavender Sleep Aid", type: "herbal", description: "Promotes relaxation and improves sleep quality.", ingredients: ["Lavender essential oil", "Pillow"], preparation: "1. Add a few drops of lavender essential oil to your pillow.\n2. Alternatively, use a lavender-filled sachet under your pillow.\n3. Breathe deeply and relax as you fall asleep.", rating: 0, image: "https://images.unsplash.com/photo-1518467946646-1a3e6a9e8d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 15, name: "Ginger and Lemon Shot", type: "food", description: "Boosts metabolism and supports immune function.", ingredients: ["Fresh ginger", "Lemon", "Cayenne pepper (optional)", "Water"], preparation: "1. Juice a 1-inch piece of ginger and half a lemon.\n2. Mix with a small amount of water.\n3. Add a pinch of cayenne pepper if desired.\n4. Drink as a shot in the morning.", rating: 0, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 16, name: "Coconut Oil Pulling", type: "other", description: "Improves oral health and whitens teeth.", ingredients: ["Organic coconut oil"], preparation: "1. Take a tablespoon of coconut oil in your mouth.\n2. Swish it around for 15-20 minutes.\n3. Spit out the oil (do not swallow).\n4. Rinse your mouth with warm water and brush your teeth.", rating: 0, image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 17, name: "Cucumber Eye De-puffer", type: "food", description: "Reduces eye puffiness and soothes tired eyes.", ingredients: ["Fresh cucumber"], preparation: "1. Cut two thick slices of cold cucumber.\n2. Lie down and place a slice over each closed eye.\n3. Relax for 10-15 minutes.\n4. Repeat daily or as needed.", rating: 0, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 18, name: "Cayenne Pepper for Pain Relief", type: "food", description: "Alleviates muscle and joint pain.", ingredients: ["Cayenne pepper powder", "Warm water", "Cotton swab"], preparation: "1. Mix 1/2 teaspoon of cayenne pepper powder with 1 cup of warm water.\n2. Dip a cotton swab into the mixture.\n3. Apply to the affected area.\n4. Use caution and avoid contact with eyes or open wounds.", rating: 0, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 19, name: "Banana Peel for Warts", type: "food", description: "Natural remedy for removing warts.", ingredients: ["Ripe banana peel", "Adhesive bandage"], preparation: "1. Cut a small piece of ripe banana peel.\n2. Place the inner side of the peel on the wart.\n3. Secure with an adhesive bandage.\n4. Leave overnight and repeat daily until the wart disappears.", rating: 0, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 20, name: "Onion Juice for Hair Growth", type: "food", description: "Promotes hair growth and reduces hair loss.", ingredients: ["Onion", "Cotton ball"], preparation: "1. Grate an onion and squeeze out its juice.\n2. Apply the juice to your scalp using a cotton ball.\n3. Leave it on for 15 minutes.\n4. Rinse thoroughly and shampoo as usual.\n5. Repeat 2-3 times a week.", rating: 0, image: "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
];

let currentFilter = 'all';

function renderRemedies() {
    const remedyList = document.getElementById('remedyList');
    remedyList.innerHTML = '';

    const filteredRemedies = remedies.filter(remedy => {
        if (currentFilter === 'all') return true;
        return remedy.type === currentFilter;
    });

    filteredRemedies.forEach(remedy => {
        const card = document.createElement('div');
        card.className = 'remedy-card';
        card.innerHTML = `
            <div class="new-tag ${remedy.new ? '' : 'hidden'}">New</div>
            <img src="${remedy.image}" alt="${remedy.name}">
            <div class="remedy-card-content">
                <h2>${remedy.name}</h2>
                <p>${remedy.description}</p>
                <div class="rating">
                    ${generateStars(remedy.rating)}
                </div>
            </div>
        `;
        card.addEventListener('click', () => showDetails(remedy));
        remedyList.appendChild(card);
    });
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'active' : ''}" data-value="${i}">★</span>`;
    }
    return stars;
}



function showDetails(remedy) {
    const detailsPanel = document.getElementById('detailsPanel');
    const remedyDetails = document.getElementById('remedyDetails');
    const overlay = document.getElementById('overlay');

    remedyDetails.innerHTML = `
        <img src="${remedy.image}" alt="${remedy.name}">
        <h2>${remedy.name}</h2>
        <p>${remedy.description}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${remedy.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Preparation:</h3>
        <pre>${remedy.preparation}</pre>
        <div class="rating">
            ${generateStars(remedy.rating)}
        </div>
    `;

    detailsPanel.classList.add('visible');
    overlay.classList.add('visible');

    const stars = remedyDetails.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => updateRating(remedy, parseInt(star.dataset.value)));
    });
}

function closeDetails() {
    const detailsPanel = document.getElementById('detailsPanel');
    const overlay = document.getElementById('overlay');
    detailsPanel.classList.remove('visible');
    overlay.classList.remove('visible');
}

function handleOutsideClick(event) {
    const detailsPanel = document.getElementById('detailsPanel');
    if (!detailsPanel.contains(event.target) && !event.target.closest('.remedy-card')) {
        closeDetails();
    }
}

function updateRating(remedy, newRating) {
    remedy.rating = newRating;
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.textContent = 'Rating updated!';
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2000);
    renderRemedies();
    showDetails(remedy);
}

document.getElementById('showAll').addEventListener('click', () => {
    currentFilter = 'all';
    renderRemedies();
});

document.getElementById('showHerbal').addEventListener('click', () => {
    currentFilter = 'herbal';
    renderRemedies();
});

document.getElementById('showFood').addEventListener('click', () => {
    currentFilter = 'food';
    renderRemedies();
});

document.getElementById('showOther').addEventListener('click', () => {
    currentFilter = 'other';
    renderRemedies();
});

document.getElementById('closeDetails').addEventListener('click', closeDetails);
document.addEventListener('click', handleOutsideClick);

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRemedies = remedies.filter(remedy => 
        remedy.name.toLowerCase().includes(searchTerm) || 
        remedy.description.toLowerCase().includes(searchTerm)
    );
    renderFilteredRemedies(filteredRemedies);
});

function renderFilteredRemedies(filteredRemedies) {
    const remedyList = document.getElementById('remedyList');
    remedyList.innerHTML = '';

    filteredRemedies.forEach(remedy => {
        const card = document.createElement('div');
        card.className = 'remedy-card';
        card.innerHTML = `
            <img src="${remedy.image}" alt="${remedy.name}">
            <div class="remedy-card-content">
                <h2>${remedy.name}</h2>
                <p>${remedy.description}</p>
                <div class="rating">
                    ${generateStars(remedy.rating)}
                </div>
            </div>
        `;
        card.addEventListener('click', () => showDetails(remedy));
        remedyList.appendChild(card);
    });
}

function loadAds() {
    const adContainers = [
        { id: 'ad-banner-1', key: '9a8ed33c49abcd7c4e869ac4d6ffe2c1' },
        { id: 'ad-banner-2', key: '9a8ed33c49abcd7c4e869ac4d6ffe2c1' },
        { id: 'ad-banner-3', key: '9a8ed33c49abcd7c4e869ac4d6ffe2c1' },
        { id: 'ad-banner-4', key: '9a8ed33c49abcd7c4e869ac4d6ffe2c1' },
        { id: 'ad-sidebar-1', key: '1251b24960053eebacb4277fecbae3f3' },
        { id: 'ad-sidebar-2', key: '1251b24960053eebacb4277fecbae3f3' },
        { id: 'ad-details-1', key: 'cc33a20ffe16c2c9d520014dbc179133' },
        { id: 'ad-details-2', key: 'cc33a20ffe16c2c9d520014dbc179133' }
    ];

    adContainers.forEach(container => {
        const adContainer = document.getElementById(container.id);
        if (adContainer) {
            const adScript = document.createElement('script');
            adScript.src = `//www.highperformanceformat.com/${container.key}/invoke.js`;
            adContainer.appendChild(adScript);
        }
    });
}

// Función de animación en la carga
window.addEventListener('load', () => {
    document.querySelector('header').classList.add('animate-header');
    loadAds();
    renderRemedies();
});