interface ButtonProps {
    children: React.ReactNode;
    to: string;
}

export function Button ({ children, to}: ButtonProps) {
    return (
        <a
            href={to}
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
        >
            {children}
            </a>
    )
}