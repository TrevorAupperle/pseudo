import express from 'express';

var router = express.Router();

// Used to search for user in database
//      name: name of user
router.get(`/login`, async (req, res) => {
    res.json({ success: true });
} );
 
//module.exports = router;
export default router;