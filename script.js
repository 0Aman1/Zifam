// Product data with Tanzanian market pricing in Tsh - Enhanced with detailed medical information
const products = [
    {
        id: 1,
        name: "ZIFAM PROBIOTIC",
        price: 14000,
        image: "Images/probio.jpg",
        category: "Probiotic Supplement",
        dosage: "1 capsule daily with meals or as directed by healthcare practitioner",
        description: "Contains Saccharomyces cerevisiae (Boulardii) which helps to reduce the occurrence of symptoms of traveler's diarrhea. Maintains gastrointestinal system health and supports general health and well-being. This specialized probiotic strain is clinically proven to survive stomach acid and provides effective relief from digestive discomfort while promoting optimal gut flora balance."
    },
    {
        id: 2,
        name: "INFANT-D",
        price: 18000,
        image: "Images/infant-d.jpg",
        category: "Pediatric Vitamin D3",
        dosage: "400 IU Vitamin D3 per capsule - 1 capsule daily for infants up to 12 months",
        description: "The Sunshine Vitamin for Babies! Specially designed twist-open capsule technology delivers precise 400 IU Vitamin D3 dose without mess. Essential for babies born to mothers at risk (veiled, dark-skinned, or poor nutrition). Particularly important for breastfed infants as breast milk contains inadequate vitamin D. Hygienic, safe, and easy to carry with precise dosing technology."
    },
    {
        id: 3,
        name: "URISOL",
        price: 18500,
        image: "Images/urisol.jpg",
        category: "Urinary Health Support",
        dosage: "2-4 sachets daily dissolved in water or as directed by healthcare provider",
        description: "Contains Vaccinium macrocarpon (Cranberry) fruit extract that may relieve pain and burning sensation associated with Cystitis. Supports healthy urinary flow and nutritionally supports healthy urinary tract function. Each 2g sachet provides concentrated cranberry extract equivalent to 216g fresh fruit, helping maintain general well-being and urinary comfort."
    },
    {
        id: 4,
        name: "NATOCARE",
        price: 16500,
        image: "Images/natocare.jpg",
        category: "Pregnancy & Lactation Support",
        dosage: "1 soft capsule daily with water or as recommended by healthcare practitioner",
        description: "Contains Natural Fish Oil (800mg) providing DHA (200mg) and EPA (40mg), plus Folic Acid (500mcg) and Iodine (150mcg). Supports overall health and well-being with essential omega-3 fatty acids that reduce inflammation and support heart, brain, and eye health. Folic Acid aids in healthy red blood cell production and helps prevent neural tube defects during pregnancy. Tested for mercury and heavy metals."
    },
    {
        id: 5,
        name: "NATOCARE PLUS",
        price: 19000,
        image: "Images/natocare-plus.jpg",
        category: "Enhanced Pregnancy Support",
        dosage: "1 soft capsule twice daily with water or as advised by healthcare practitioner",
        description: "Specially designed for use during conception, pregnancy and lactation. Contains Natural Fish Oil (Tuna Oil) rich in DHA and Iodine supporting healthy foetal brain development. Also supports healthy eye development and cognitive function in breastfed infants. Contains Folic Acid to help prevent neural tube defects like spina bifida when taken daily for at least one month before conception and during first trimester. Tested for mercury and heavy metals with comprehensive vitamin and mineral profile."
    },
    {
        id: 6,
        name: "OZICAL",
        price: 15500,
        image: "Images/ozical.jpg",
        category: "Calcium & Bone Health",
        dosage: "1-2 chewable tablets daily or as directed by healthcare practitioner",
        description: "Contains Milk Calcium complex (Hydroxyapatite) extracted from Australian and New Zealand cow's milk through advanced extraction process. Provides calcium and phosphorus in optimal ratio similar to milk along with Vitamin D3 for total bioavailability. Each tablet provides 178mg elemental calcium and 95mg phosphorus. Delicious orange flavored with palatable taste and non-chalky after-taste. Safe for all three trimesters of pregnancy and lactation. Essential for bone mineralization and osteoporosis prevention."
    },
    {
        id: 7,
        name: "MENOFEM",
        price: 17700,
        image: "Images/menofem.jpg",
        category: "Menopause Support",
        dosage: "1-2 capsules daily or as recommended by healthcare practitioner",
        description: "Unique combination of Cimicifuga racemosa (Black cohosh), Trifolium pratense (Red clover) and essential minerals. Relieves symptoms of menopause and hot flushes. Contains calcium (150mg) beneficial for increased calcium requirements after menopause. Great reliever of menopausal symptoms including night sweats, hot flushes, and anxiety. Black cohosh provides estrogenic activity while red clover contains phytoestrogens acting like weak estrogen to help balance hormones naturally."
    },
    {
        id: 8,
        name: "AUZIFLORA",
        price: 17100,
        image: "Images/auziflora.jpg",
        category: "Probiotic & Digestive Health",
        dosage: "1 capsule daily after meal or as directed by healthcare practitioner",
        description: "Contains Bifidobacterium animalis subsp. lactis and Lacticaseibacillus rhamnosus as active ingredients providing immune defense for complete health and wellness. Helps maintain healthy immune system and supports intestinal health by promoting growth of good bacteria. Fights against pathogens that might cause diseases while maintaining gut health. Advanced probiotic formula designed for comprehensive digestive support and immune system strengthening."
    },
    {
        id: 9,
        name: "MEGA 3",
        price: 18000,
        image: "Images/mega 3.jpg",
        category: "Omega-3 Fish Oil",
        dosage: "1-2 softgel capsules daily with meals or as advised by healthcare practitioner",
        description: "Contains high quality Natural Fish Oil supporting healthy cardiovascular system function and maintaining general health & wellbeing. Also maintains eye health and supports brain function. Prevents dietary deficiency of Omega-3 essential fatty acids not produced by the body. No added sugar, starch, gluten, yeast, artificial colouring, flavoring or preservatives. Tested for mercury and other heavy metals ensuring purity and safety."
    },
    {
        id: 10,
        name: "SPECTRA-E",
        price: 20000,
        image: "Images/spectre e.jpg",
        category: "Vitamin E Complex",
        dosage: "1-2 capsules twice daily with water after meals or as advised by healthcare practitioner",
        description: "Comprehensive Vitamin E formula providing all 8 isomers (alpha, beta, gamma, delta tocopherols and tocotrienols). Contains mixed tocopherols concentrate (400mg) and palm tocotrienols complex (25mg). Reduces free radicals formed in the body and maintains healthy cardiovascular system function. Supports heart health and helps maintain vitamin E levels throughout the body for optimal antioxidant protection."
    },
    {
        id: 11,
        name: "1000D",
        price: 10500,
        image: "Images/1000d.jpg",
        category: "Vitamin D3 High Potency",
        dosage: "1 capsule daily swallowed whole with water - suitable for adults and children who can swallow",
        description: "Contains Cholecalciferol 25mcg equivalent to 1000 IU Vitamin D3. Essential for calcium homeostasis and optimal skeletal health. Helps prevent rickets in children and osteomalacia in adults. Particularly important for elderly populations with declining skin production of Vitamin D3. Treatment of Vitamin D3 insufficiency can decrease risk of hip and non-vertebral fractures while improving muscle strength and reducing falls in elderly."
    },
    {
        id: 12,
        name: "IMUNOR",
        price: 42000,
        image: "Images/imunor.jpg",
        category: "Immune System Support",
        dosage: "1-2 capsules daily or as directed by healthcare provider",
        description: "Dual combination of naturally occurring Bovine Colostrum (75mg) and Lactoferrin (100mg). Latest immune modulating product providing first immune defense to body. Lactoferrin possesses antibacterial, antiviral, antifungal, anti-inflammatory, antioxidant and immunomodulatory actions. Valuable adjuvant in chronic diseases to boost immunity, supports management alongside conventional therapy in various conditions, and helps replenish normal flora. Indicated for immune stimulation and bone growth support."
    },
    {
        id: 13,
        name: "VITRUM",
        price: 14500,
        image: "Images/vitrum.jpg",
        category: "Complete Multivitamin & Minerals",
        dosage: "1 tablet daily or as directed by healthcare specialist",
        description: "Comprehensive formulation of vitamins and minerals from A to Zinc, including iron, folic acid and antioxidants. Meets increased needs during prolonged illness, pregnancy, lactation and convalescence. Ideal for elderly on restricted diets, diabetics, hypertensive, cardiac patients, busy executives with unbalanced diets, and smokers/alcoholics who require higher amounts of vitamins and minerals. Contains essential nutrients including Beta-carotene, B-complex vitamins, Vitamin C, calcium, iron, and trace minerals for complete nutritional support."
    },
    {
        id: 14,
        name: "CEE ORANGE",
        price: 32000,
        image: "Images/cee-orange.jpg",
        category: "Vitamin C Chewable",
        dosage: "Chew 1-2 tablets daily - not recommended for children below 3 years unless directed by healthcare practitioner",
        description: "Tasty chewable form of Vitamin C containing 500mg from Ascorbic Acid (250mg) and Sodium Ascorbate (281mg equivalent to 250mg Ascorbic Acid). Important vitamin and antioxidant used by body to maintain health and general wellbeing. May assist in collagen synthesis supporting skin health and wound healing. Pleasant orange flavor makes daily vitamin C supplementation enjoyable while providing powerful antioxidant protection."
    },
    {
        id: 15,
        name: "ZIMAG",
        price: 12000,
        image: "Images/zimag.png",
        category: "Magnesium Supplement",
        dosage: "Adults: 2-3 tablets up to 3 times daily with water after meals. Children 4-8 years: 1-3 tablets daily. Children 9-13 years: 2 tablets up to 3 times daily",
        description: "Contains Magnesium aspartate dihydrate (500mg) equivalent to 37.4mg elemental magnesium - a highly bioavailable form. Supports energy levels and muscle function while supporting nervous system health and function. Helps prevent dietary magnesium deficiency. Essential cofactor regulating diverse biochemical reactions including protein synthesis, muscle and nerve transmission, blood glucose control and blood pressure regulation. Important for nerve impulse conduction, muscle contraction, and normal heart rhythm."
    },
    {
        id: 16,
        name: "CINCRO",
        price: 20000,
        image: "Images/cincro.jpg",
        category: "Glucose Metabolism Support",
        dosage: "As directed by healthcare practitioner",
        description: "Specially formulated with chromium, biotin and cinnamon extract which may aid in glucose metabolism. Enhanced with Vitamin C to improve chromium absorption. This unique combination supports healthy blood sugar levels and may assist in metabolic processes. Chromium is essential for proper insulin function while cinnamon extract provides traditional metabolic support. Biotin plays crucial role in carbohydrate, fat and protein metabolism."
    },
    {
        id: 17,
        name: "EPOSOFT",
        price: 16500,
        image: "Images/eposoft.jpg",
        category: "Women's Health - Evening Primrose Oil",
        dosage: "Prophylaxis: 1 softgel daily after meals. Therapeutic: 1-2 softgels twice daily. PMS: 1-2 softgels daily for 6 months then reduce to 1 daily",
        description: "Contains Evening Primrose Oil (1000mg) equivalent to gamma linolenic acid (100mg) plus Natural Vitamin E (5.03mg). Derived from seeds of Oenothera biennis - richest source of gamma linolenic acid essential fatty acid. Provides relief of pre-menstrual breast pain, menstrual pain, and may assist in dysmenorrhoea management. Beneficial properties result from increased PGE1 production with anti-inflammatory properties, contrasting pro-inflammatory PGE2."
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

// Format price with Tanzanian Shilling (Tsh)
function formatPrice(price) {
    return 'Tsh ' + new Intl.NumberFormat('en-TZ', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Get image path (fallback if image doesn't exist)
function getImagePath(productName) {
    const imageMap = {
        'ZIFAM PROBIOTIC': 'Images/probio.jpg',
        'INFANT-D': 'Images/infant-d.jpg',
        'URISOL': 'Images/urisol.jpg',
        'NATOCARE': 'Images/natocare.jpg',
        'NATOCARE PLUS': 'Images/natocare-plus.jpg',
        'OZICAL': 'Images/ozical.jpg',
        'MENOFEM': 'Images/menofem.jpg',
        'AUZIFLORA': 'Images/auziflora.jpg',
        'MEGA 3': 'Images/mega 3.jpg',
        'SPECTRA-E': 'Images/spectre e.jpg',
        'CEE ORANGE': 'Images/cee-orange.jpg',
        '1000D': 'Images/1000d.jpg',
        'IMUNOR': 'Images/imunor.jpg',
        'VITRUM': 'Images/vitrum.jpg',
        'ZIMAG': 'Images/zimag.png',
        'CINCRO': 'Images/cincro.jpg',
        'EPOSOFT': 'Images/eposoft.jpg'
    };
    
    return imageMap[productName] || 'Images/logo.jpg';
}

// Render products
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${getImagePath(product.name)}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.src='Images/logo.jpg'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="view-details-btn" onclick="openProductModal(${product.id})">
                    View Details
                </button>
            </div>
        `;
        
        // Add click event to entire card
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-details-btn')) {
                openProductModal(product.id);
            }
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Populate modal content
    document.getElementById('modalProductImage').src = getImagePath(product.name);
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductPrice').textContent = formatPrice(product.price);
    document.getElementById('modalProductCategory').textContent = product.category;
    document.getElementById('modalProductDosage').textContent = product.dosage;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    // Update WhatsApp and call links with product info using dynamic contact
    const whatsappLink = document.querySelector('#productModal .btn-secondary');
    const callLink = document.querySelector('#productModal .btn-primary');
    
    const phoneNumber = window.CONTACT_CONFIG?.phone || '+919876543210';
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const salesHead = window.CONTACT_CONFIG?.salesHead || 'Sales Team';
    
    const message = `Hello ${salesHead}, I'm interested in ${product.name} priced at ${formatPrice(product.price)}. Could you provide more details about dosage: ${product.dosage}?`;
    whatsappLink.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    callLink.href = `tel:${cleanNumber}`;
    
    // Show modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
closeModal.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('active')) {
        closeProductModal();
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setTimeout(addLoadingAnimation, 100);
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// Enhanced inquiry functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    console.log('Added to inquiry:', product.name);
    
    // Show enhanced success message with product details
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <strong>${product.name}</strong><br>
        <small>Added to inquiry list - ${formatPrice(product.price)}</small>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), #0056b3);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }
    
    .notification {
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        line-height: 1.4;
    }
`;
document.head.appendChild(style);

// Performance optimization - preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'Images/logo.jpg',
        'Images/probio.jpg',
        'Images/natocare.jpg',
        'Images/mega 3.jpg',
        'Images/auziflora.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Enhanced search functionality
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    return filteredProducts;
}

// Initialize optimizations
document.addEventListener('DOMContentLoaded', () => {
    preloadCriticalImages();
    
    // Add search functionality if search input exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 0) {
                const filtered = searchProducts(query);
                renderFilteredProducts(filtered);
            } else {
                renderProducts();
            }
        });
    }
});

function renderFilteredProducts(filteredProducts) {
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-results">No products found matching your search.</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${getImagePath(product.name)}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.src='Images/logo.jpg'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="view-details-btn" onclick="openProductModal(${product.id})">
                    View Details
                </button>
            </div>
        `;
        
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-details-btn')) {
                openProductModal(product.id);
            }
        });
        
        productsGrid.appendChild(productCard);
    });
}
