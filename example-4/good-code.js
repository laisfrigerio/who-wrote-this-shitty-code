function getPlates (response) {
    const plates = response?.data?.menu?.lunch?.plates

    if (Array.isArray(plates) && plates?.length > 0) {
        return this.orderPlates(plates)
    }

    return []
}
