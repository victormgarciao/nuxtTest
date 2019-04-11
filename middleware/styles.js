export const setProperty = function (key, value) {
    return process.client ?
        document.documentElement.style.setProperty(key, value) :
        null;
};
