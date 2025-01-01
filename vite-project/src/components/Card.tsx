interface CardProps {
    title: string;
    description: string;
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
            <button
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
                {props.buttonText}
            </button>
        </div>)
  };
  
export default Card;