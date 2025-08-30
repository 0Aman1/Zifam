// Product data with Tanzanian market pricing in Tsh
const products = [
    {
        id: 1,
        name: "PROBIO",
        price: 14000,
        image: "Images/probio.jpg",
        category: "Probiotic Supplement",
        code: "ZIF-001",
        dosage: "1 capsule daily with meals",
        description: "Advanced probiotic formula with 10 billion CFU per capsule. Supports digestive health, immune system, and overall gut wellness. Contains multiple strains of beneficial bacteria for optimal results."
    },
    {
        id: 2,
        name: "INFANT-D",
        price: 18000,
        image: "Images/infant-d.jpg",
        category: "Pediatric Vitamin D",
        code: "ZIF-002",
        dosage: "1 drop daily or as directed by physician",
        description: "Vitamin D3 supplement specially formulated for infants. Supports healthy bone development, immune function, and overall growth. Easy-to-administer liquid form with pleasant taste."
    },
    {
        id: 3,
        name: "URISOL",
        price: 18500,
        image: "Images/urisol.jpg",
        category: "Urinary Health",
        code: "ZIF-003",
        dosage: "1-2 tablets twice daily",
        description: "Comprehensive urinary tract support formula. Contains cranberry extract, D-mannose, and herbal extracts to maintain urinary health and prevent recurrent infections."
    },
    {
        id: 4,
        name: "NATOCARE",
        price: 16500,
        image: "Images/natocare.jpg",
        category: "Natural Health Supplement",
        code: "ZIF-004",
        dosage: "1-2 capsules daily",
        description: "Premium natural supplement blend with essential vitamins, minerals, and antioxidants. Supports overall health, energy levels, and immune system function."
    },
    {
        id: 5,
        name: "NATOCARE PLUS",
        price: 19000,
        image: "Images/natocare-plus.jpg",
        category: "Enhanced Natural Supplement",
        code: "ZIF-005",
        dosage: "1 capsule daily with breakfast",
        description: "Advanced formula with higher potency vitamins, minerals, and specialty nutrients. Includes omega-3, CoQ10, and adaptogenic herbs for comprehensive health support."
    },
    {
        id: 6,
        name: "OZICAL",
        price: 15500,
        image: "Images/ozical.jpg",
        category: "Calcium Supplement",
        code: "ZIF-006",
        dosage: "1-2 tablets daily",
        description: "High-absorption calcium and vitamin D3 combination. Supports bone density, muscle function, and cardiovascular health. Formulated for optimal bioavailability."
    },
    {
        id: 7,
        name: "MENOFEM",
        price: 17700,
        image: "Images/menofem.jpg",
        category: "Women's Health",
        code: "ZIF-007",
        dosage: "1-2 capsules daily",
        description: "Specialized formula for women's health needs. Contains phytoestrogens, vitamins, and minerals to support hormonal balance, bone health, and overall wellness during menopause."
    },
    {
        id: 8,
        name: "AUZIFLORA",
        price: 22000,
        image: "Images/auziflora.jpg",
        category: "Digestive Health",
        code: "ZIF-008",
        dosage: "1-2 capsules daily",
        description: "Premium digestive enzyme and probiotic combination. Supports healthy digestion, nutrient absorption, and gut microbiome balance. Ideal for digestive discomfort and bloating."
    },
    {
        id: 9,
        name: "MEGA 3",
        price: 18000,
        image: "Images/mega 3.jpg",
        category: "Omega-3 Supplement",
        code: "ZIF-009",
        dosage: "1-2 softgels daily with meals",
        description: "High-potency omega-3 fatty acids from pure fish oil. Supports heart health, brain function, joint mobility, and anti-inflammatory response. Molecularly distilled for purity."
    },
    {
        id: 10,
        name: "SPECTRA-E",
        price: 20000,
        image: "Images/spectre e.jpg",
        category: "Vitamin E Complex",
        code: "ZIF-010",
        dosage: "1 softgel daily",
        description: "Complete vitamin E complex with mixed tocopherols and tocotrienols. Provides powerful antioxidant protection, supports skin health, and cardiovascular wellness."
    },
    {
        id: 11,
        name: "1000D",
        price: 10500,
        image: "Images/1000d.jpg",
        category: "Vitamin D3",
        code: "ZIF-011",
        dosage: "1 tablet daily",
        description: "High-potency vitamin D3 (1000 IU) for optimal bone health, immune support, and mood regulation. Essential for individuals with limited sun exposure."
    },
    {
        id: 12,
        name: "IMUNOR",
        price: 42000,
        image: "Images/imunor.jpg",
        category: "Immune Support",
        code: "ZIF-012",
        dosage: "1-2 capsules twice daily",
        description: "Advanced immune system support formula with elderberry, zinc, vitamin C, and herbal extracts. Strengthens natural defenses and supports recovery from illness."
    },
    {
        id: 13,
        name: "VITRUM",
        price: 14500,
        image: "Images/vitrum.jpg",
        category: "Multivitamin",
        code: "ZIF-013",
        dosage: "1 tablet daily with breakfast",
        description: "Comprehensive daily multivitamin with essential vitamins and minerals. Supports overall health, energy production, and nutritional gaps in modern diets."
    },
    {
        id: 14,
        name: "CEE ORANGE",
        price: 32000,
        image: "Images/cee-orange.jpg",
        category: "Vitamin C Complex",
        code: "ZIF-014",
        dosage: "1-2 tablets daily",
        description: "High-potency vitamin C with bioflavonoids and natural orange extract. Supports immune function, collagen synthesis, and antioxidant protection. Great-tasting chewable tablets."
    },
    {
        id: 15,
        name: "ZIMAG",
        price: 12000,
        image: "Images/zimag.jpg",
        category: "Magnesium Supplement",
        code: "ZIF-015",
        dosage: "1-2 tablets daily",
        description: "Bioavailable magnesium complex for muscle relaxation, nerve function, and sleep support. Essential for over 300 enzymatic reactions in the body."
    },
    {
        id: 16,
        name: "CINCRO",
        price: 20000,
        image: "Images/cincro.jpg",
        category: "Joint Health",
        code: "ZIF-016",
        dosage: "1-2 tablets twice daily",
        description: "Comprehensive joint support formula with glucosamine, chondroitin, MSM, and anti-inflammatory herbs. Supports cartilage health and joint mobility."
    },
    {
        id: 17,
        name: "EPOSOFT",
        price: 6500,
        image: "Images/eposoft.jpg",
        category: "Skin Care",
        code: "ZIF-017",
        dosage: "Apply as needed",
        description: "Premium moisturizing cream with ceramides, hyaluronic acid, and natural oils. Deeply hydrates and protects skin barrier. Suitable for all skin types including sensitive skin."
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
        'PROBIO': 'Images/probio.jpg',
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
        'CEE ORANGE': 'Images/cee-orange.jpg',
        'ZIMAG': 'Images/zimag.jpg',
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
    document.getElementById('modalProductCode').textContent = product.code;
    document.getElementById('modalProductCategory').textContent = product.category;
    document.getElementById('modalProductDosage').textContent = product.dosage;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    // Update WhatsApp and call links with product info using dynamic contact
    const whatsappLink = document.querySelector('#productModal .btn-secondary');
    const callLink = document.querySelector('#productModal .btn-primary');
    
    const phoneNumber = window.CONTACT_CONFIG?.phone || '+919876543210';
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const salesHead = window.CONTACT_CONFIG?.salesHead || 'Sales Team';
    
    const message = `Hello ${salesHead}, I'm interested in ${product.name} (${product.code}) priced at ${formatPrice(product.price)}. Could you provide more details?`;
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

// Add to cart functionality (for future use)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // This would typically integrate with a cart system
    console.log('Added to cart:', product.name);
    
    // Show success message
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${product.name} added to inquiry!`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations dynamically
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
`;
document.head.appendChild(style);

// Performance optimization - preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'Images/logo.jpg',
        'Images/probio.jpg',
        'Images/natocare.jpg',
        'Images/mega 3.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize optimizations
document.addEventListener('DOMContentLoaded', () => {
    preloadCriticalImages();
});