export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (odontologo) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === odontologo.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(odontologo)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist added successfully");
        return true;
    }
    else {
        alert("Dentist already on the list");
        removeFavInStorage(odontologo.id);
        return false;
    }
}

export const removeFavInStorage = (identifier) => {
    const storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === identifier);
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist removed successfully");
    }
    else {
        alert("An Error has ocurred");
    }
}