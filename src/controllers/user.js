// import model here
const {user}=require('../../models')

exports.addUsers = async (req, res) => {
    // code here
    const data=req.body

    await user.create(data)

    res.send({
        status:"sukses",
        massage:"input data sukses"
    })
}
