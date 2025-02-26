export function changeHeaderColor(header) {
    header.style.transition = 'background-color 0.3s '; // Añadir transición suave

    const handleScroll = () => {
        if (window.scrollY > 700) {
            header.style.backgroundColor = '#ffdbe1'; // Azul semi-transparente
        } else {
            header.style.backgroundColor = 'white'; // Lightblue semi-transparente
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}