import Container from './components/Container'
import MovieCard from './components/MovieCard'
import MoviesSection from './components/MoviesSection'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='App'>
            <Container
                children={
                    <>
                        <Navbar />
                        <MoviesSection />
                    </>
                }
            />
        </div>
    )
}

export default App
