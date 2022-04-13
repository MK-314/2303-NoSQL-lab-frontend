class FetchApi {
    static checkAuth(authObject, onSuccess, onError) {
        fetch(`http://192.168.63.77:8080/auth/login?username=${authObject.username}&${authObject.password}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(authObject)
            })
            .then(responce => responce.json())
            .then(data => onSuccess(data.message))
            .catch(error => onError(error))
    }
}
export { FetchApi }