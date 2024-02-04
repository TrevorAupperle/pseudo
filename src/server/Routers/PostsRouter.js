import express from 'express';
import Post from '../Schemas/Post.js'

var router = express.Router();

// Used to search for Post in database
//      name: name of user
router.get(`/find`, async (req, res) => {

    //validate request body
    if (req.body.query)
    {
        const findPost = await Post.find({"title" : {$regex : req.body.query}});
        if (findPost)
        {
            res.json({success: true, message: "Post Found", data: findPost});
        } else {
            res.json({success: false, message: "Post Not Found", data: findPost});
        }
    } else {
        res.status(400).send({
            error: 'missing_info',
            message: 'Missing required request body value',
            value: 'query'
        });
    }
} );


// Used to create a new post and save it to the database
//      title: title of post
//      body: body of post
//      author: author of post
router.post(`/create`, async (req, res) => {

    //validate request body
    if (req.body.title && req.body.body && req.body.author) {
        const newPost = await Post.create( {
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        } );

        res.json({success: true, message: "Post Created"});
    } else {
        var missingValue;

        if (!req.body.title) 
        {
            missingValue = 'title';
        } else if (!req.body.body)
        {
            missingValue = 'body';
        } else
        {
            missingValue = 'author';
        }
        res.status(400).send({
            error: 'missing_info',
            message: 'Missing required request body value',
            value: missingValue
        });
    }
} );
 
export default router;