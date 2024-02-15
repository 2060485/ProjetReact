import Grimace from './grimace.png'

function Nav() {
    return (
        <div>
            <nav class="navbar bg-dark border-bottom navbar-expand-lg" data-bs-theme="dark">
                <div class="container-fluid">
                    <img src={Grimace} alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
                    <a class="navbar-brand" href="#">Grimace</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profil">Features</a>
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/signIn">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Nav;