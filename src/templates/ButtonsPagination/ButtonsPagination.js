import PageNumbers from "./PageNumbers";

function ButtonsPagination(info){
    const actualPage = PageNumbers(info);
    const view = `
    <div class="footer-buttons">
        <a class="footer-btn ${actualPage == 1 ? 'locked' : ''}" href="?page=${actualPage != 1 ? actualPage - 1 : 1}">
            <div class="footer-btn-container">
                <span><</span>
            </div>
        </a>
        <a class="footer-btn ${actualPage == 1 ? 'locked' : ''}" href="?page=1">
            <div class="footer-btn-container ${actualPage == 1 ? 'selected' : ''}">
                <span>1</span>
            </div>
        </a>
        <a class="footer-btn locked" href="?page=$">
            <div class="footer-btn-container ${actualPage != 1 && actualPage != info.pages ? 'selected' : ''}">
                <span>${actualPage != 1 && actualPage != info.pages ? actualPage : '. . .'}</span>
            </div>
        </a>
        <a class="footer-btn ${actualPage == info.pages ? 'locked' : ''}" href="?page=${info.pages}">
            <div class="footer-btn-container ${actualPage == info.pages ? 'selected' : ''}">
                <span>${info.pages}</span>
            </div>
        </a>
        <a class="footer-btn ${actualPage == info.pages ? 'locked' : ''}" href="?page=${actualPage != info.pages ? actualPage + 1 : info.pages}">
            <div class="footer-btn-container">
                <span>></span>
            </div>
        </a>
    </div>
    `
    return view;
}

export default ButtonsPagination;
