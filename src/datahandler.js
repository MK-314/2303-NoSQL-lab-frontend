class FetchApi {
    static checkAuth(authObject, onSuccess, onError) {
        fetch(`http://192.168.63.77:8080/auth/login?username=${authObject.username}&password=${authObject.password}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                }
            })
            .then(responce => responce.json())
            .then(data => onSuccess(data.message))
            .catch(error => onError(error))
    }
}
export { FetchApi }