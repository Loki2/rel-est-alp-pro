import SearchBar from "../../components/search/Search";
import "./home.scss";

const Home = () => {
  return (
    <div className="home__page">
      <div className="text__container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>


          <SearchBar />

          <div className="boxes__container">
            <div className="box__item">
              <h1>16+</h1>
              <h3>Year of experience</h3>
            </div>

            <div className="box__item">
              <h1>200+</h1>
              <h3>Award Gained</h3>
            </div>

            <div className="box__item">
              <h1>2200+</h1>
              <h3>Property Ready</h3>
            </div>

          </div>
        </div>
      </div>

      <div className="image__container">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  )
}


export default Home;