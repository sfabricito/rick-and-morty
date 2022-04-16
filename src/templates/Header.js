const Header = () => {
    const view = `
    <div class="main_head">
        <div class="main_head-info">
                <h2>Characters of Rick and Morty</h2>
                <p>Rick and Morty is an American adult <br> animated science fiction.</p>
                <p>Built by:</p>
                <div class="button">
                    <a href="https://twitter.com/sfabricito" target="_blank" rel="noopener noreferrers" class="logo_twitter"><span></span></a>
                    <a href="https://github.com/sfabricito" target="_blank" rel="noopener noreferrers" class="logo_github"><span></span></a>
                </div>
            </div>
        <div class="main_head-pic"></div>
    </div>
    `
    return view;
};

export default Header;