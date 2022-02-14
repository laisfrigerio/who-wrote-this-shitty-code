function getPlates (response) {
    if (response.data.menu) {
        if (response.data.menu.lunch && response.data.menu.lunch.plates && response.data.menu.lunch.plates.length > 0) {
            let plates =  response.data.menu.lunch.plates;
            return this.orderPlates(plates);;
        }
    }
    
    return []
}
