export function Home () {
    return (
       <section className="text-center">
            <h1 className="text-4x1 font-bold mb-4">Sejam Bem Vindos ao meu portifólio</h1>
            <p className="text-gray-600">Vejam meus projetos e conheça um pouco sobre mim.</p>
            <div className="flex justify-center gap-4">
                <a href="/about" className="button">
                    Sobre Mim
                </a>
                <a href="/projects" className="button">
                    Projetos
                </a>
            </div>
       </section>
    );
}