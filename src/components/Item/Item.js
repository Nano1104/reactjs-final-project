import { Link } from 'react-router-dom';

const loadImage = (imageName) => {      //funcion para importar cierta imagen y usar su url
    try {
        return require(`../../images/${imageName}`);
    } catch (err) {
        console.error(`Failed to load image: ${imageName}`, err);
        return null;
    }
}

export default function Item({props}){
    const { description, url, id } = props;
    const imageUrl = loadImage(url);

    return (
        <>
            <div className="item-container
                text-center flex flex-col justify-center
                rounded-lg shadow-lg mt-3">
                <img src={imageUrl} className='img-item p-4 bg-white rounded-tl-lg rounded-tr-lg' alt={imageUrl} />
                <div className=''>
                    <h4 className='text-lg'>{description}</h4>
                    <Link to={`/item/${id}`}>
                        <button className='bg-slate-600 py-2 px-4 m-2 rounded-lg'>Ver</button>
                    </Link>
                </div>
            </div>
        </>
    )
        
}
