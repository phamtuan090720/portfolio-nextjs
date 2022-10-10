export const openNewTab = (url: string) => {
    window.open(url);
};

export const hashClass = (listClass: string[]) => {
    return listClass.filter((item) => !!item).join(" ");
};
