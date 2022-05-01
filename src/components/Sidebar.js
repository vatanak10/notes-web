import Add from '../assets/icons/add.png';
import Fav from '../assets/icons/favourite.png';

const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col place-content-between">            
            <h1 className="text-3xl font-bold my-5">
                Notes
            </h1>
            <div className='h-5/6'>
                <img className="w-20 my-6" src={ Add } alt="Add Button" />
                <div className='w-14 p-3 mx-auto my-6 bg-[#ffd06a] rounded-full'>
                    <img className='w-full' src={ Fav } alt="Favorite Button" />
                </div>
                <div className='rounded-full w-14 h-14 mx-auto my-6 bg-card-1'></div>
                <div className='rounded-full w-14 h-14 mx-auto my-6 bg-card-2'></div>
                <div className='rounded-full w-14 h-14 mx-auto my-6 bg-card-3'></div>
                <div className='rounded-full w-14 h-14 mx-auto my-6 bg-card-4'></div>
            </div>            
        </div>
    );
}
 
export default Sidebar;