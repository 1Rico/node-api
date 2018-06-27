module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
        let newPost = req.body
        let id = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({id:id})
    },
    updatePost(req, res) {
        req.store.posts[req.params.id] = Object.assign(req.store.posts[req.params.id])
        res.status(201).send(req.store.posts[req.params.id])
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.id, 1)
        res.status(204).send()
    }
}