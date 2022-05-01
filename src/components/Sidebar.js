import Add from '../assets/icons/add.png';
import Fav from '../assets/icons/favourite.png';

const Sidebar = () => {
    return (
        <div className="sidebar">            
            <h1 className="text-3xl font-bold my-5">
                Notes
            </h1>
            <img className="w-20" src={ Add } alt="Add Button" />
            <div className='w-14 p-3 mx-auto my-4 bg-[#ffd06a] rounded-full'>
                <img className='w-full' src={ Fav } alt="Favorite Button" />
            </div>
            <div className='rounded-full w-14 h-14 mx-auto my-4 bg-[#ff8f70]'></div>
            <div className='rounded-full w-14 h-14 mx-auto my-4 bg-[#00BDDF]'></div>
            <div className='rounded-full w-14 h-14 mx-auto my-4 bg-[#ffd06a]'></div>
            <div className='rounded-full w-14 h-14 mx-auto my-4 bg-[#C967FD]'></div>
        </div>
    );
}
 
export default Sidebar;