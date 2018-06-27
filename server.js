const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const routes = require('./routes')

let store = {
    posts: [
        {
            name: 'dummy post',
            url: 'www.url.com',
            text:'description',
            comments: [
                {text: 'this is a comment'},
                {text: 'this is another comment'}
            ]
        }
    ]
};

let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());
app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:id', routes.posts.updatePost)
app.delete('/posts/:id', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000)