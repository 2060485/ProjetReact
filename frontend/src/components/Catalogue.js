import './catalogue.css'

function Catalogue() {
    const catalogue = [
        {
            id:'1',
            nom:'Casque',
            prix:99,
            image:'./images/casque.jpg'
        },
        {
            id:'2',
            nom:'Microphone',
            prix:150,
            image:'./images/micro.jpg'
        },
        {
            id:'3',
            nom:'Iphone13',
            prix:399,
            image:'./images/Iphone13.jpg'
        }
    ]
    return (
        <div className='Produits-main'>
            <div>
                <h2>Catalogue</h2>
            </div>
            <div>
                <div className='produits-flex'>
                    {catalogue.map((article) =>
                     <div className='produits-card'>
                        <img className='produits-image' src={article.image} alt={article.nom}/>
                        <div className='produits-nom'>{article.nom}</div>
                        <div className='produits-prix'>{article.prix} $</div>
                        <button className='produits-button'>Ajouter au panier</button>
                    </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Catalogue;