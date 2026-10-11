
/* ==========================================
   FOOD PLATFORM - GLOBAL LANGUAGE SYSTEM
   English + Kiswahili
========================================== */

const translations = {
    en: {
        home: "Home",
        about: "About Us",
        restaurants: "Restaurants",
        menu: "Menu",
        cart: "Cart",
        checkout: "Checkout",
        login: "Login",
        register: "Register",
        logout: "Logout",
        account: "My Account",
        myOrders: "My Orders",
        trackOrder: "Track Order",
        search: "Search restaurants...",
        addToCart: "Add to Cart",
        orderNow: "Order Now",
        placeOrder: "Place Order",
        confirmOrder: "Confirm Order",
        quantity: "Quantity",
        total: "Total",
        deliveryAddress: "Delivery Address",
        paymentMethod: "Payment Method",
        orderStatus: "Order Status",
        pending: "Pending",
        confirmed: "Confirmed",
        delivered: "Delivered",
        cancelled: "Cancelled",
        restaurantName: "Restaurant Name",
        vendorDashboard: "Vendor Dashboard",
        adminDashboard: "Admin Dashboard",
        profile: "Profile",
        save: "Save Changes",
        update: "Update",
        submit: "Submit",
        cancel: "Cancel",
        back: "Back",
        loading: "Loading...",
        noRestaurants: "No restaurants available yet.",
        failedRestaurants: "Failed to load restaurants.",
        deliveryAvailable: "Delivery Available",
        pickupOnly: "Pickup Only",
        nearby: "Nearby",
        language: "Language",
        welcome: "Welcome to Food Platform",
        email: "Email",
        password: "Password",
        fullName: "Full Name",
        phone: "Phone Number",
        address: "Address",
        food: "Food",
        price: "Price",
        add: "Add",
        remove: "Remove",
        continue: "Continue",
        confirm: "Confirm",
        submitOrder: "Submit Order",
        emptyCart: "Your cart is empty.",
        noOrders: "No orders found.",
        status: "Status",
        date: "Date",
        actions: "Actions",
        saveChanges: "Save Changes",
        chooseLanguage: "Choose language"
    },

    sw: {
        home: "Nyumbani",
        about: "Kuhusu Sisi",
        restaurants: "Migahawa",
        menu: "Menyu",
        cart: "Kikapu",
        checkout: "Malipo",
        login: "Ingia",
        register: "Jisajili",
        logout: "Toka",
        account: "Akaunti Yangu",
        myOrders: "Oda Zangu",
        trackOrder: "Fuatilia Oda",
        search: "Tafuta migahawa...",
        addToCart: "Ongeza Kikapuni",
        orderNow: "Agiza Sasa",
        placeOrder: "Weka Oda",
        confirmOrder: "Thibitisha Oda",
        quantity: "Idadi",
        total: "Jumla",
        deliveryAddress: "Anwani ya Kufikishiwa",
        paymentMethod: "Njia ya Malipo",
        orderStatus: "Hali ya Oda",
        pending: "Inasubiri",
        confirmed: "Imethibitishwa",
        delivered: "Imewasilishwa",
        cancelled: "Imeghairiwa",
        restaurantName: "Jina la Mgahawa",
        vendorDashboard: "Dashibodi ya Muuzaji",
        adminDashboard: "Dashibodi ya Msimamizi",
        profile: "Wasifu",
        save: "Hifadhi Mabadiliko",
        update: "Sasisha",
        submit: "Wasilisha",
        cancel: "Ghairi",
        back: "Rudi",
        loading: "Inapakia...",
        noRestaurants: "Bado hakuna migahawa.",
        failedRestaurants: "Imeshindwa kupakia migahawa.",
        deliveryAvailable: "Usafirishaji Unapatikana",
        pickupOnly: "Kujichukulia Mwenyewe",
        nearby: "Karibu",
        language: "Lugha",
        welcome: "Karibu Food Platform",
        email: "Barua Pepe",
        password: "Nenosiri",
        fullName: "Jina Kamili",
        phone: "Namba ya Simu",
        address: "Anwani",
        food: "Chakula",
        price: "Bei",
        add: "Ongeza",
        remove: "Ondoa",
        continue: "Endelea",
        confirm: "Thibitisha",
        submitOrder: "Wasilisha Oda",
        emptyCart: "Kikapu chako hakina bidhaa.",
        noOrders: "Hakuna oda zilizopatikana.",
        status: "Hali",
        date: "Tarehe",
        actions: "Vitendo",
        saveChanges: "Hifadhi Mabadiliko",
        chooseLanguage: "Chagua lugha"
    }
};

/* Get saved language */
function getCurrentLanguage() {
    try {
        return localStorage.getItem("foodPlatformLanguage") || "en";
    } catch (error) {
        return "en";
    }
}

/* Translate one key */
function translate(key) {
    const lang = getCurrentLanguage();

    return translations[lang]?.[key]
        ?? translations.en[key]
        ?? key;
}

/* Apply translations to the current page */
function applyTranslations() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (key) element.textContent = translate(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (key) element.setAttribute("placeholder", translate(key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        const key = element.getAttribute("data-i18n-title");
        if (key) element.setAttribute("title", translate(key));
    });

    document.querySelectorAll("[data-i18n-value]").forEach(element => {
        const key = element.getAttribute("data-i18n-value");
        if (key) element.value = translate(key);
    });

    document.querySelectorAll("[data-language-selector]").forEach(selector => {
        selector.value = lang;
    });
}

/* Create a language selector */
function createLanguageSelector() {
    if (document.querySelector("[data-language-selector]")) return;

    const selector = document.createElement("select");
    selector.setAttribute("data-language-selector", "");
    selector.setAttribute("aria-label", "Choose language");

    selector.innerHTML = `
        <option value="en">🇬🇧 English</option>
        <option value="sw">🇹🇿 Kiswahili</option>
    `;

    selector.style.cssText = `
        padding: 9px 12px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: #fff;
        color: #202124;
        font-size: 14px;
        cursor: pointer;
        max-width: 170px;
        margin: 8px;
    `;

    selector.value = getCurrentLanguage();

    selector.addEventListener("change", function () {
        setLanguage(this.value);
    });

    const container =
        document.querySelector(".nav-inner") ||
        document.querySelector("header") ||
        document.querySelector("nav");

    if (container) {
        container.appendChild(selector);
    } else {
        document.body.prepend(selector);
    }
}

/* Change language */
function setLanguage(lang) {
    if (!translations[lang]) return;

    try {
        localStorage.setItem("foodPlatformLanguage", lang);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }

    applyTranslations();

    document.dispatchEvent(
        new CustomEvent("foodPlatformLanguageChanged", {
            detail: { language: lang }
        })
    );
}

/* Allow dynamic content to be translated */
function observeNewContent() {
    if (!document.body || !window.MutationObserver) return;

    const observer = new MutationObserver(() => {
        applyTranslations();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
