import express from 'express';
import Movie from '../models/movies';

export class movieControllers {

  // Create a new movie
  public static createMovie = async (req: express.Request, res: express.Response) => {
    try {
      const { title, year, director, length, rating } = req.body;
      const newMovie = await Movie.create(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Get all movies
  public static getAllMovies = async (req: express.Request, res: express.Response) => {
    try {
      const allMovies = await Movie.findAll();
      res.status(200).json(allMovies);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Get movie by ID
  public static getMovieById = async (req: express.Request, res: express.Response) => {
    try {
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Update movie
  public static updateMovie = async (req: express.Request, res: express.Response) => {
    try {
      const movieId = parseInt(req.params.id);
      const { title, year, director, length, rating } = req.body;
      const updatedMovie = await Movie.update({ title, year, director, length, rating }, { where: { id: movieId } });
      if (updatedMovie[0] === 0) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie updated successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Delete movie
  public static deleteMovie = async (req: express.Request, res: express.Response) => {
    try {
      const movieId = parseInt(req.params.id);
      const deletedMovieCount = await Movie.destroy({ where: { id: movieId } });
      if (deletedMovieCount === 0) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  // Placeholder function for PATCH request
  public static patchMovie = async (req: express.Request, res: express.Response) => {
    res.status(501).json({ message: "Not Implemented" });
  }
}
