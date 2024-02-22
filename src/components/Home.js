import test from "./test.png";
import grimace from "./grimace.png";
import bard from "./Bard.jpg";
import './home.css'

function Home() {

    return (
        <div id="carouselExampleAutoplaying" class="carousel slide w-50" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={test} class="d-block w-100 img" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={grimace} class="d-block w-100 img" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={bard} class="d-block w-100 img" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;