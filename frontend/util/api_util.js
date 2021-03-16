export const fetchSearch = (query) => {
    return $.ajax({
        url: `/api/properties/search?query=${query}`
    })
}