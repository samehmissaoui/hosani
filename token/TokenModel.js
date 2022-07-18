class Token {
    constructor(idToken, refreshToken, userIP, userAgent, userID, isValid){
        this.idToken = idToken
        this.refreshToken = refreshToken
        this.userIP = userIP
        this.userAgent = userAgent
        this.userID = userID
        this.isValid = isValid
    }
}


module.exports = Token