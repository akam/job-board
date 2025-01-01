import { PropsWithChildren } from "react";

interface cardProps {
    bg?: string
}

function Card (props: PropsWithChildren<cardProps>){
    const backgroundColor = props.bg ? props.bg : 'bg-gray-100';
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            {props.children}
        </div>)
  };
  
export default Card;