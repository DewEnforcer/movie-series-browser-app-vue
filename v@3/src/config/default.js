const def_data = {
    app_name: "Movie Browser App | Vue port",
    api_key: process.env.MOVIE_DB_API_KEY,
    API_BASE_URL: "https://api.themoviedb.org/3",
    app_lang: "en-US",
    genre_ids: {
        family: 10751,
        documentary: 99
    },
    navItems: [
        {id: 1, path: "/", name: "Home", label: "Home", icon: "fa-home"},
        {id: 2, path: "/search", name: "Search", label: "Search", className: "header-search-btn", icon: "fa-search"},
    ],
    toastConfig: {
        transition: "Vue-Toastification__bounce",
        maxToasts: 5,
        newestOnTop: true
    }
};

export default def_data;