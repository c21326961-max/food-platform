// ========================================
// FOOD PLATFORM - MAIN SCRIPT
// ========================================


// ========================================
// LOAD RESTAURANTS
// ========================================

async function loadRestaurants() {

    const restaurantsContainer =
        document.querySelector(".restaurants");

    if (!restaurantsContainer) {
        return;
    }


    const { data, error } = await supabaseClient
        .from("food_restaurants")
        .select("*")
        .order("rating", {
            ascending: false
        });


    if (error) {

        console.error(
            "Supabase Error:",
            error
        );

        restaurantsContainer.innerHTML = `
            <p style="padding:20px;">
                Failed to load restaurants.
            </p>
        `;

        return;
    }


    if (!data || data.length === 0) {

        restaurantsContainer.innerHTML = `
            <p style="padding:20px;">
                No restaurants available yet.
            </p>
        `;

        return;
    }


    restaurantsContainer.innerHTML = "";


    data.forEach(function(restaurant) {

        const card =
            document.createElement("a");


        // SEND RESTAURANT ID
        card.href =
            "restaurant.html?id=" +
            restaurant.id;


        card.className =
            "restaurant-link";


        card.style.textDecoration =
            "none";

        card.style.color =
            "inherit";


        card.style.display =
            "block";


        card.innerHTML = `

            <div class="restaurant">

                <div class="restaurant-image">

                    🍽️

                </div>


                <div class="restaurant-info">

                    <div class="restaurant-name">

                        ${restaurant.name}

                    </div>


                    <div class="rating">

                        ⭐ ${restaurant.rating || "New"}

                    </div>


                    <div class="distance">

                        📍 ${restaurant.address || "Nearby"}

                    </div>


                    <div class="distance">

                        🕐
                        ${restaurant.opening_time || ""}
                        -
                        ${restaurant.closing_time || ""}

                    </div>


                    <div class="food-price">

                        🚚
                        ${
                            restaurant.delivery_available
                            ? "Delivery Available"
                            : "Pickup Only"
                        }

                    </div>

                </div>

            </div>

        `;


        restaurantsContainer
            .appendChild(card);

    });

}


// ========================================
// SEARCH
// ========================================

const searchInput =
    document.querySelector(
        ".search-box input"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const restaurants =
                document.querySelectorAll(
                    ".restaurant"
                );


            restaurants.forEach(
                function(restaurant) {

                    const restaurantText =
                        restaurant.innerText
                            .toLowerCase();


                    if (
                        restaurantText.includes(
                            searchText
                        )
                    ) {

                        restaurant.style.display =
                            "block";

                    } else {

                        restaurant.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


// ========================================
// START
// ========================================

loadRestaurants();