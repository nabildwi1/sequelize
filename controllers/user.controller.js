/** load model for `users` table */
const userModel = require(`../models/index`).user
const md5 = require(`md5`)
/** load Operation from Sequelize */
const Op = require(`sequelize`).Op
/** create function for read all data */
exports.getAllUser = async (request, response) => {
    /** call findAll() to get all data */
    let users = await userModel.findAll()
    return response.json({
        success: true,
        data: users,
        message: `All users have been loaded`
    })
}
exports.findUser = async (request, response) => {
    let users = await userModel.findAll()
    return response.json({
        success: true,
        data: users,
        message: 'All users have been loaded'
    }

    )
}
exports.findUser = async (request, response) => {
    let keyword = request.params.key
    let users = await userModel.findAll({
        where: {
            [Op.or]: [
                { userID: { [Op.substring]: keyword } },
                { firstname: { [op.substring]: keyword } },
                { lastname: { [op.substring]: keyword } },
                { email: { [op.substring]: keyword } },
                { role: { [op.substring]: keyword } },
            ]
        }
    })
    return response.json({
        success: true,
        data: users,
        message: 'All users have been loaded'
    })
}
exports.addUser = (request, response) => {
    /** prepare data from request */
    let newUser = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: md5(request.body.password),
        role: request.body.role
    }
    /** execute inserting data to user's table */
    userModel.create(newUser)
        .then(result => {
            /** if insert's process success */
            return response.json({
                success: true,
                data: result,
                message: `New user has been inserted`
            })
        })
        .catch(error => {
            /** if insert's process fail */
            return response.json({
                success: false,
                message: error.message
            })
        })
}
exports.updateUser = (request, response) => {
    /** prepare data that has been changed */
    let dataUser = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        role: request.body.role
    }
    if (request.body.password) {
        dataUser.password = md5(request.body.password)
    }
    /** define id user that will be update */
    let userID = request.params.id
    /** execute update data based on defined id user */
    userModel.update(dataUser, { where: { userID: userID } })
        .then(result => {
            /** if update's process success */
            return response.json({
                success: true,
                message: `Data user has been updated`
            })
        })
        .catch(error => {
            /** if update's process fail */
            return response.json({
                success: false,
                message: error.message
            })
        })
}
exports.deleteUser = (request, response) => {
    /** define id user that will be update */
    let userID = request.params.id
    /** execute delete data based on defined id user */
    userModel.destroy({ where: { userID: userID } })
        .then(result => {
            /** if update's process success */
            return response.json({
                success: true,
                message: `Data user has been deleted`
            })
        })
        .catch(error => {
            /** if update's process fail */
            return response.json({
                success: false,
                message: error.message
            })
        })
}