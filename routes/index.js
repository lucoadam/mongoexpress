// Filename: routes/index.js

// Import user schema from models/userSchema.js
const userSchema = require('../models/userSchema');

// Import and initialize router for http requests
const router = require('express').Router();

/**
 * GET api for fetching all users
 * 
 * synchronous                  asynchronous
 * (step wise flow)             (delay/)
 *                              
 *                              the step in which function delays await keyword is used 
 *                              at front of function async
 *  as process to fetch data is delayed 
 * and goes through series of step
 * nodejs server service -> mongoose driver => mongod services => database => collections => document or data extract
 */
async function getAllUsers(req, res) {
    const users = await userSchema.find(); //
    res.json(users);
    res.end();
}
/**
 * GET api for fetching a user by id 
 */
async function getUserById(req, res) {
    /**
     * findOne(find query {
     * _id : providedId
     * })
     */
    const user = await userSchema.findOne({
        _id: req.params.id
    });
    res.json(user);
    res.end();
}


/**
 * POST api for creating a new user
 */
async function addUser(req, res) {
    /** 
     * const name = req.body.name
     * const age = req.body.age
     * const { name, age } = req.body
     * **/
    const { name, age, location } = req.body;
    const user = await userSchema.create({
        name,
        age,
        location
    });
    return res.json(user);
}


/**
 * PUT api for updating a user by id
 */
async function updateUser(req, res) {
    const { name, age, location } = req.body;
    /**
     * findOneAndUpdate (find query, update paramters, options)
     */
    const user = await userSchema.findOneAndUpdate({
        _id: req.params.id
    }, {
        name,
        age,
        location
    }, {
        new: true
    });
    return res.json(user);
}


/**
 * DELETE api for deleting a user by id
 */
async function deleteUser(req, res) {
    /**
     * findOneAndDelete( find query)
     * database _id : given id equal (data will deleted)
     */
    const user = await userSchema.findOneAndDelete({ _id: req.params.id });
    return res.json(user);
}
function getRootRoute(req, res){
    res.send('Backend for workshop')
}

/**
 * All the routes
 */
router.get('/', getRootRoute)
router.get('/users', getAllUsers);
router.post('/users', addUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Exports all the routes
module.exports = router;