export const getListPD = async () => {
    try {
        const response = await fetch("https://5f196e29e104860016baecec.mockapi.io/products");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}


export const getListUser = async () => {
    try {
        const response = await fetch("https://5f196e29e104860016baecec.mockapi.io/user");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}