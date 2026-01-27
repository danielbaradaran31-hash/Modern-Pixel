import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

 function Navbar() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            localStorage.removeItem('theme', 'light');
        }
    }, [dark]);

    return (
        <nav className="bg-black text-white p-5 flex justify-between items-center">
            <h1 className='text-xl font-bold'>My Website</h1>

            <div className='flex gap-6'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <button
                    onClick={() => setDark(!dark)}
                    className="border px-3 py-1 rounded"
                >
                    {dark ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;