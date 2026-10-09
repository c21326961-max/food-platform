
(function () {
    const url = "https://ienquzigbawhvthnirtj.supabase.co";
    const key = "sb_publishable_tSbACTjOICJlthE03XmGCA_sIgigXup";

    function initializeSupabase() {
        if (!window.supabase || typeof window.supabase.createClient !== "function") {
            console.error("Supabase library haijapakia.");
            return;
        }

        if (!window.db) {
            window.db = window.supabase.createClient(url, key);
        }

        console.log("Supabase client iko tayari:", !!window.db);
    }

    initializeSupabase();
})();
