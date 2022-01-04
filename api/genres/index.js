import express from 'express';
//import {genres} from './genresData';
import Genre from './genresModel';



const router = express.Router(); 
// Get all users
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});


export default router;