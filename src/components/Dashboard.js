import Card from './Card';

const Dashboard = () => {
    return (
        <div className="h-screen px-20 pt-10">
            <h1 className="text-5xl font-bold my-5">
                Notes
            </h1>
            <input type="text" placeholder='Search...' className="bg-[#F8F8F8] text-grey max-w-md rounded-xl p-2 pl-4 my-6"/>
            <div className='h-4/5 overflow-x-auto flex flex-col flex-wrap'>
                <Card bgColor="bg-card-1"/>
                <Card bgColor="bg-card-2"/>
                <Card bgColor="bg-card-3"/>
                <Card bgColor="bg-card-4"/>
                <Card bgColor="bg-card-1"/>
                <Card bgColor="bg-card-2"/>
                <Card bgColor="bg-card-3"/>
                <Card bgColor="bg-card-4"/>
            </div>
        </div>
    );
}
 
export default Dashboard;