const axios = require('axios')

module.exports = {
    getUser(username) {
        return axios
            .get(`https://api.rajdeepmandal.com/users/${username}`)
            .then(res => res.data)
            .catch(error => {
                if(error.status == 404) {
                    return {status : 404, message : 'Page Not Found'}
                }
                console.log('err,', error)
            })
    }
}
