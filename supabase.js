(function () {
    const url = "https://ienquzigbawhvthnirtj.supabase.co";
    const key = "sb_publishable_tSbACTjOICJlthE03XmGCA_sIgigXup";

    if (!window.supabase) {
        console.error("Supabase library haijapakia.");
        return;
    }

    window.db = window.supabase.createClient(url, key);
})();
