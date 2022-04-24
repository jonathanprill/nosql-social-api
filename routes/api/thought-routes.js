const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/:userId')
    .post(addThought);

router 
    .route('/')
    .get(getAllThoughts);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/reactions/:thoughtId')
    .post(addReaction);

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;