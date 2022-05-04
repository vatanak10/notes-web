const Card = ({bgColor}) => {
    return (
    <div className={`${bgColor} w-80 h-80 rounded-3xl p-6 mr-6 mb-6 grid grid-cols content-between`}>
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