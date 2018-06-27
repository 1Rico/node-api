module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.id].comments)
    },
    addComment(req, res) {
        let newComment = req.body
        let comments = req.store.posts[req.params.id].comments
        id = comments.length
        comments.push(newComment)
        res.status(201).send({id:id})
    },
    updateComment(req, res) {
        req.store.posts[req.params.id].comments[req.params.commentId] = Object.assign(req.store.posts[req.params.id].comments[req.params.commentId])
        res.status(201).send(req.store.posts[req.params.id])
    },
    removeComment(req, res) {
        req.store.posts[req.params.id].comments.splice(req.params.id, 1)
        res.status(200).send()
    }
}