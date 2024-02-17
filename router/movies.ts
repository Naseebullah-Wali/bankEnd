import express from "express"
import { movieControllers } from "../controllers/movieControllers";
const movieRouter:express.Router = express.Router();


//Register
movieRouter.post('/movies', movieControllers.createMovie);

//Login
movieRouter.patch('/movies/:id',movieControllers.patchMovie)

//Show all users
movieRouter.get('/movies',  movieControllers.getAllMovies)

//FindById
movieRouter.get('/movies/:id',movieControllers.getMovieById)

//UpdateById
movieRouter.put('/movies/:id',movieControllers.updateMovie)

//DeleteById
movieRouter.delete('/movies/:id',movieControllers.deleteMovie)



export default movieRouter;