
const getLocal = () => {
    const getItem = localStorage.getItem('items')
    if (getItem) {
        return JSON.parse(getItem)
    }
    else {
        return []
    }
}
const setinLocal = (data) => {
    const getArr = getLocal()
    getArr.push(data)
    localStorage.setItem("items", JSON.stringify(getArr))
}

const localS = (data) => {
    setinLocal(data)
};

export { localS, getLocal };