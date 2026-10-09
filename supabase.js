
(function () {
    "use strict";

    const SUPABASE_URL = "https://ienquzigbawhvthnirtj.supabase.co";

    const SUPABASE_KEY = "sb_publishable_tSbACTjOICJlthE03XmGCA_sIgigXup";

    function initializeSupabase() {
        if (!window.supabase || typeof window.supabase.createClient !== "function") {
            console.error("Supabase library haijapakia.");
            return;
        }

        if (window.db && window.db.auth) {
            return;
        }

        window.db = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

        console.log("Supabase client imeandaliwa.");
    }

    initializeSupabase();
})();
