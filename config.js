// Contact Configuration - Easy to update
const CONTACT_CONFIG = {
    salesHead: "Arvind Pal",
    position: "Country Manager",
    phone: "+255 792 614 180",
    whatsapp: "+255 792 614 180",
    email: "arvind@zifampinnacle.com.au",
    company: "ZIFAM Tanzania",
    address: "Plot 123, Industrial Area",
    city: "Dar es Salaam",
    state: "Tanzania",
    pincode: "",
    country: "Tanzania",
    businessHours: "Monday - Saturday: 8:00 AM - 5:00 PM",
    website: "zifamtanzania.com"
};

// Function to update contact details across the website
function updateContactDetails() {
    // Update header contact info
    const headerContact = document.querySelector('.contact-info h3');
    if (headerContact) {
        headerContact.textContent = `Country Manager: ${CONTACT_CONFIG.salesHead}`;
    }
    
    const headerPosition = document.querySelector('.header-content .position');
    if (headerPosition) {
        headerPosition.textContent = CONTACT_CONFIG.position || 'Country Manager';
    }
    
    // Update phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${CONTACT_CONFIG.phone.replace(/\s/g, '')}`;
        if (link.querySelector('i.fa-phone')) {
            link.innerHTML = `<i class="fas fa-phone"></i> ${CONTACT_CONFIG.phone}`;
        }
    });
    
    // Update WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    whatsappLinks.forEach(link => {
        const cleanNumber = CONTACT_CONFIG.whatsapp.replace(/\D/g, '');
        link.href = `https://wa.me/${cleanNumber}`;
        if (link.querySelector('i.fa-whatsapp')) {
            link.innerHTML = `<i class="fab fa-whatsapp"></i> WhatsApp`;
        }
    });
    
    // Update footer contact info
    const footerContact = document.querySelector('.footer-section:nth-child(2)');
    if (footerContact) {
        footerContact.innerHTML = `
            <h4>Contact Us</h4>
            <p>${CONTACT_CONFIG.salesHead} - Country Manager</p>
            <p>Phone: ${CONTACT_CONFIG.phone}</p>
            <p>WhatsApp: Available 24/7</p>
            <p>Email: ${CONTACT_CONFIG.email}</p>
        `;
    }
    
    // Update modal contact buttons
    const modalPhoneBtn = document.querySelector('#productModal .btn-primary');
    if (modalPhoneBtn) {
        modalPhoneBtn.href = `tel:${CONTACT_CONFIG.phone.replace(/\s/g, '')}`;
    }
    
    const modalWhatsappBtn = document.querySelector('#productModal .btn-secondary');
    if (modalWhatsappBtn) {
        const cleanNumber = CONTACT_CONFIG.whatsapp.replace(/\D/g, '');
        modalWhatsappBtn.href = `https://wa.me/${cleanNumber}`;
    }
}

// Function to load contact details from contact.txt (optional feature)
async function loadContactFromFile() {
    try {
        const response = await fetch('contact.txt');
        const text = await response.text();
        
        // Parse contact.txt for current configuration
        const lines = text.split('\n');
        
        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('Sales Head:')) {
                CONTACT_CONFIG.salesHead = line.replace('Sales Head:', '').trim();
            }
            if (line.startsWith('Phone:')) {
                CONTACT_CONFIG.phone = line.replace('Phone:', '').trim();
            }
            if (line.startsWith('WhatsApp:')) {
                CONTACT_CONFIG.whatsapp = line.replace('WhatsApp:', '').trim();
            }
            if (line.startsWith('Email:')) {
                CONTACT_CONFIG.email = line.replace('Email:', '').trim();
            }
        });
        
        updateContactDetails();
    } catch (error) {
        console.log('Using default contact configuration');
        updateContactDetails();
    }
}

// Export for use in other files
window.CONTACT_CONFIG = CONTACT_CONFIG;
window.updateContactDetails = updateContactDetails;
window.loadContactFromFile = loadContactFromFile;