import React from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard'

const MoviesSection = () => {
    useEffect(() => {
        console.log('123')
        fetch('http://localhost:5001/movies').then((res) => console.log(res))
        // .then((data) => console.log(data))
    }, [])

    return (
        <div className='flex'>
            test
            <MovieCard title='' date='' />
        </div>
    )
}

export default MoviesSection
