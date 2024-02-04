import express from 'express';
import User from '../Schemas/User.js'

var router = express.Router();

// Used to search for user in database
//      name: name of user
router.get(`/find`, async (req, res) => {
    try {
        const findUser = await User.findOne({ name: req.body.name })

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
//      name: name of user
//      email: email of user
//      experience: level of experience for the user
//      skills: array of skills of user
router.post(`/create`, async (req, res) => {
    try {
        const findUser = await User.findOne({ name: req.body.name })

        if (findUser)
        {
            res.json({success: false, message: "User Already Exists"});
        } else {
            const newUser = await User.create( {
                name: req.body.name,
                email: req.body.email,
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
 
//module.exports = router;
export default router;