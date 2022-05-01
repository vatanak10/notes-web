import Add from '../assets/icons/add.png';

const Sidebar = () => {
    return (
        <div className="sidebar">            
            <h1 className="text-3xl font-bold">
            Notes
            </h1>
            <img className="icon" src={ Add } alt="Add Button" />
        </div>
    );
}
 
export default Sidebar;