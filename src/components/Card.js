const Card = ({bgColor}) => {
    return (
    <div className={`${bgColor} w-80 h-80 rounded-3xl p-6 m-3 grid grid-cols content-between cursor-pointer transition ease-in-out hover:scale-105 duration-400`}>
        <div>
            <div className="text-xl mb-2">This is Title</div>
            <div className="">This is Description...</div>
        </div>
        <div className="text-black text-sm">
            April 29, 2022
        </div>
    </div>
    );
}

export default Card;