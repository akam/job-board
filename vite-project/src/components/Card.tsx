import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    description: string;
    path: string;
    buttonText: string;
    bg?: string;
}

function Card (props: CardProps){

    const backgroundColor = props.bg ? props.bg : 'bg-gray-100';

    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className='text-2xl font-bold'>
                {`For ${props.title}`}
            </h2>
            <p className='mt-2 mb-4'>
                {props.description}
            </p>
            <Link
                to={props.path}
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
                {props.buttonText}
            </Link>
        </div>)
  };
  
export default Card;