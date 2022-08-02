const qr_scanner = require('qrcode')
const {uuid} = require('uuidv4')


const generateToken = async(req, res)=>{
    try {
        const user_id = req.body.user_id
        if (!user_id)  return res.status(400).send({messsge: `invalid user email or id, please try again`})
        if(user_id) {
        const Key = `${user_id}_qr_login_code`
        const UUID = uuid()
        const login_token = `${UUID}.${user_id}`
        await redis.setex(Key, 30 , login_token)
        const generate_qr_code = await qr_scanner.toDataURL(login_token)
        return res.status(200).send({success: true, loginToken: generate_qr_code})
       }

       } catch (error) {
        console.log('An error occurred with getting user login token', error)
          
       }
        
}
const authorizeToken = async(req, res)=>{
    try {
        const login_token = req.body.login_token
        const loginToken_id = login_token.split(".")[1]
        const  stored_token = await redis.get(`${loginToken_id}_qr_login_code`)
        if(stored_token == null) return res.status(401).send({message: 'Invalid or Expired Token'})
        const RandomJoke = await Joke.getRandomJoke()
        if (login_token == stored_token) {
        return res.status(201).send({success: true, message: RandomJoke.value })
        }else{
        return res.status(401).send({message: 'Incorrect user address'})
        }

       } catch (error) {
           console.log('An error occurred with authorizing token api', error)
       }
}

module.exports = {generateToken, authorizeToken}