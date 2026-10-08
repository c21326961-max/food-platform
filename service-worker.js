const CACHE_NAME = "food-platform-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./supabase.js",
    "./cart.html",
    "./checkout.html",
    "./restaurant.html",
    "./my-orders.html",
    "./order-confirmation.html",
    "./order-tracking.html",
    "./customer-account.html",
    "./customer-login.html",
    "./manifest.json"
];


self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(APP_FILES);

            })

    );

    self.skipWaiting();

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(names => {

                return Promise.all(

                    names
                        .filter(name =>
                            name !== CACHE_NAME
                        )
                        .map(name =>
                            caches.delete(name)
                        )

                );

            })

    );

    self.clients.claim();

});


self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)
            .catch(() => {

                return caches.match(
                    event.request
                );

            })

    );

});