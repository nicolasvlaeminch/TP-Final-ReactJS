import { useLocation } from 'react-router-dom';

const useNavButton = () => {
    const location = useLocation();

    let buttonText = 'INGRESAR';
    let buttonLink = '/login';

    switch (location.pathname) {
        case '/':
            buttonText = 'I N G R E S A R';
            buttonLink = '/login';
            break;

        case '/login':
            buttonText = 'I N I C I O';
            buttonLink = '/';
            break;

        case '/employees':
            buttonText = 'CERRAR SESIÓN';
            buttonLink = '/';
            break;

        default:
            buttonText = 'INGRESAR';
            buttonLink = '/login';
    }

    return { buttonText, buttonLink };
};

export default useNavButton;
