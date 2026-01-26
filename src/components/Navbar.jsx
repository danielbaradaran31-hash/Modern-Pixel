import { Link} from 'react-router-dom';

 function Navbar() {
    return (
        <nav className="bg-black text-white p-5 flex justify-between items-center">
            <h1 className='text-xl font-bold'>My Website</h1>

            <div className='flex gap-6'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;