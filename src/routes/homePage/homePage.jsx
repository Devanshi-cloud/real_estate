import SearchBar from '../../components/navbar/searchBar/SearchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                Find it. Tour it. Own it.
                </h1>
                <p>
                    We are a team of passionate real estate professionals who are dedicated to helping you find your dream home
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property</h2>
                    </div>
                </div>
                </div>
                </div>
        <div className="imgContainer">
            <img src="/artist.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage