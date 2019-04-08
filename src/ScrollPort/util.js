// eslint-disable-next-line max-params
export function getItemsToShow(portHeight, itemHeight, itemsPerPage, totalItems, scrollTop) {
    // console.log(portHeight, itemHeight, itemsPerPage, totalItems, scrollTop)
    let itemFrom = null;
    let itemTo = null;
    if (portHeight === 0) return {itemFrom, itemTo};
    const pageHeight = itemHeight * itemsPerPage;
    itemFrom = Math.floor(scrollTop / pageHeight) * itemsPerPage;
    itemTo = Math.ceil((scrollTop + portHeight) / pageHeight) * itemsPerPage - 1;
    if (itemTo >= totalItems) itemTo = totalItems - 1;
    return {itemFrom, itemTo};
}
