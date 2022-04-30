import Add from '../assets/icons/add.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Notes</h1>
            <img className="icon" src={ Add } alt="Add Button" />
        </div>
    );
}
 
export default Sidebar;