function PageNumbers(info){
    if (info.next == null) {
        console.log('first');
        const urlPrev = new URL("", info.prev);
        return +(urlPrev.search.slice(1).toLocaleLowerCase().split('=')[1]) + 1;
    }
    if (info.prev === null) {
        console.log('second');
        const urlNext = new URL("", info.next);
        return urlNext.search.slice(1).toLocaleLowerCase().split('=')[1] - 1;
    }

    if (info.prev !== null && info.next !== null){
        const urlPrev = new URL("", info.prev);
        return +(urlPrev.search.slice(1).toLocaleLowerCase().split('=')[1]) + 1;
    }
}

export default PageNumbers;