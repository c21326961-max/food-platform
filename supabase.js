
/* ==========================================
   FOOD PLATFORM
   Supabase Configuration
========================================== */

(() => {
    "use strict";

    const SUPABASE_URL =
        "https://ienquzigbawhvthnirtj.supabase.co";

    const SUPABASE_KEY =
        "sb_publishable_tSbACTjOICJlthE03XmGCA_sIgigXup";

    // Tumia client iliyopo ikiwa tayari imeundwa.
    if (
        window.db &&
        typeof window.db.from === "function" &&
        window.db.auth
    ) {
        console.info("Food Platform: Supabase client tayari ipo.");
        return;
    }

    // Hakikisha maktaba ya Supabase imepakiwa kwanza.
    if (
        !window.supabase ||
        typeof window.supabase.createClient !== "function"
    ) {
        console.error(
            "Food Platform: Supabase library haijapakia. " +
            "Kagua mpangilio wa script za HTML na muunganisho wa intaneti."
        );
        return;
    }

    try {
        // Unda client moja inayotumiwa na kurasa za mfumo.
        window.db = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY,
            {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true
                }
            }
        );

        console.info(
            "Food Platform: Supabase client imeunganishwa."
        );

    } catch (error) {
        console.error(
            "Food Platform: Imeshindikana kuunda Supabase client.",
            error
        );
    }
})();
