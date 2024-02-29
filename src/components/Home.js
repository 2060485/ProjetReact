import test from "./test.png";
import grimace from "./grimace.png";
import bard from "./Bard.jpg";
import './home.css'

function Home() {

    return (
        <>
        <div id="carouselExampleAutoplaying" class="carousel slide w-50 mt-5" data-bs-ride="carousel">
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
        <div class="text-center mt-3">
            <h1>Bienvenue sur Grimace Gastronomy!</h1>
            <p class="px-5">Grimace Gastronomy est une application innovante conçue pour simplifier le processus de recherche de recettes culinaires en fonction des préférences alimentaires de chaque utilisateur. Que vous soyez végétarien, végétalien ou simplement à la recherche de nouvelles idées pour votre alimentation quotidienne, Grimace Gastronomy est votre compagnon idéal pour explorer des recettes délicieuses et adaptées à vos besoins spécifiques.</p>
        </div>
        </>
    );
}

export default Home;