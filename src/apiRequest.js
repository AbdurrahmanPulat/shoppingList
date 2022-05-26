const apiRequest = async (url = '', optionsObj = null, errmsg = null) => {
    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('please reload the app')
    } catch (err) {
        errmsg = err.message
    } finally {
        return errmsg;
    }
}

export default apiRequest;