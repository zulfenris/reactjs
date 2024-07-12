"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import { Carousel } from "react-bootstrap";

const MovieSlide = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios .get('http://localhost:5000/api/movies')

                setMovieData(response.data);
            }    catch (error) {
                 console.error('Error fetching data: ', error);
            }     
        };    
        
        
     return (
        <Carousel>
            (movieData). data.map({movie: any, index: any) => (
             <Carousel.Item>
                <img
                className="d-block w-100"
                src={movie.foto}
                alt={movie.judul}
                />
                </Carousel.Caption>
                  <h3>{movie.judul}</h3>
                  <p>{movie.sutradara}</p>
                  </Carousel.Caption>
                </Carousel.Item> 
             ))) 
        </Carousel> 
        
            );