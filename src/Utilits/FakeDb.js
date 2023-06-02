const addFakeDb  = (item) => {
    const getStoreItem = getFakeDb();
     const newData = [...getStoreItem, item];
    localStorage.setItem("bookedItem" , JSON.stringify(newData) )
}
const getFakeDb = () => {
    let bookItems = [];
    const getBookItem = localStorage.getItem("bookedItem");
    if(getBookItem){
        bookItems = JSON.parse(getBookItem)
    }
    // if(getBookItem){
    //     const storeTicketParse =  JSON.parse(bookItems);
    //     console.log(storeTicketParse);
    // }
    // console.log(bookItems);

return bookItems;
}


const dataRemove =(id) => {
    const getStoreItem = getFakeDb();
    const remainingData = getStoreItem.filter(bookedData => bookedData.id != id);
    localStorage.setItem("bookedItem" , JSON.stringify(remainingData) )
}



export {addFakeDb,getFakeDb,dataRemove}