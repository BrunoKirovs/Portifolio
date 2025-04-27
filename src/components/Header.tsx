import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export function Header () {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-2x1 font-bold">
                <Link to="/">Meu Portifólio</Link>
            </h1>
            <nav className="flex space-x-4">
               {[
                {label: "Home", path: "/"},
                {label: "Sobre", path: "/about"},
                {label: "Projetos", path: "/projects"}
               ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.95}}
                        transition={{ type: 'spring', stiffness: 300}}>
                            <Link
                                to={item.path}
                                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-300 ">
                                {item.label}    
                                </Link>
                        </motion.div>
               ))}
            
            </nav>
        </header>
    );
}