import express from 'express';
import User from '../Schemas/User.js'

var router = express.Router();

// Used to search for user in database
//      name: name of user
router.post(`/find`, async (req, res) => {
    try {
        const findUser = await User.findOne({ userId: req.body.id })

        if (findUser)
        {
            res.json({ found: true, data: findUser });
        } else {
            res.json({ found: false, data: "User does not exist" });
        }
    } catch (err) {
        if (err instanceof Error) {res.status(400).send(err.message);}
    }
} );

// Checks if user exists, if not creates new user and returns data. If user does exist, returns data.
router.post(`/login`, async (req, res) => {
    try {
        const findUser = await User.findOne({ id: req.body.id })

        if (findUser)
        {
            res.json({ found: true, data: findUser });
        } else {
            res.json({ found: false, data: "User does not exist" });
        }
    } catch (err) {
        if (err instanceof Error) {res.status(400).send(err.message);}
    }
} );

// Used to add a new user to the database
//      id: Unique id for user
router.post(`/create`, async (req, res) => {
    try {
        const findUser = await User.findOne({ userId: req.body.id })

        console.log(findUser);

        if (findUser)
        {
            res.json({success: false, message: "User Already Exists"});
        } else {
            const newUser = await User.create( {
                userId: req.body.id,
                name: req.body.name,
                email: req.body.email,
                professionalStatus: req.body.professionalStatus,
                experience: req.body.experience,
                skills: req.body.skills
            } );

            res.json({success: true, message: "User Created"});
        }

    } catch (err) {

        if (err instanceof Error) {

            var errorMessage = {
                error: "",
                message: "",
                value: ""
            }

            // Find Error
            if ((err.message).includes("duplicate key error collection"))
            {
                var errorValue = err.message.substring(err.message.indexOf("{") + 1, err.message.lastIndexOf(":")).trim();
                
                errorMessage.error = "dup";
                errorMessage.message = "Unique value already exists";
                errorMessage.value = errorValue;
            } else if ((err.message).includes("is required"))
            {
                var errorValue = err.message.split('`')[1] || '';

                errorMessage.error = "missing";
                errorMessage.message = "Missing required request body value";
                errorMessage.value = errorValue;
            }
            else {
                errorMessage.error = "unknown";
                errorMessage.message = err.message;
            }

            // Send Error with information
            res.status(400).send(errorMessage);
          }
    }
} );

// Used to update user information to the database
//      id: Unique id for user
router.post(`/update`, async (req, res) => {
    try {
        const findUser = await User.findOne({ userId: req.body.id })

        if (findUser)
        {
            const updatedUser = await User.updateOne({ userId: req.body.id }, {
                name: req.body.name,
                email: req.body.email,
                professionalStatus: req.body.professionalStatus,
                experience: req.body.experience,
                skills: req.body.skills
            })
            res.json({success: true, message: "User Updated"});
        } else {
            res.json({success: false, message: "User does not exist"});
        }

    } catch (err) {

        if (err instanceof Error)
        {
            res.status(400).send({message: err.message});
        }
    }
} );
 
//module.exports = router;
export default router;