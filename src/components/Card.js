import React, {useState} from 'react';
import CardModal from './CardModal';

const Card = ({bgColor}) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div onClick={() => setShow(true)} className={`${bgColor} w-80 h-80 rounded-3xl p-6 m-3 grid grid-cols content-between cursor-pointer transition ease-in-out hover:scale-105 duration-400`}>
                <div>
                    <div className="text-xl mb-2">This is Title</div>
                    <div className="">This is Description...</div>
                </div>
                <div className="text-black text-sm">
                    April 29, 2022
                </div>
            </div>
            <CardModal title="Modal Title" onClose={() => setShow(false)} show={show}></CardModal>
        </div>
    );
}

export default Card;