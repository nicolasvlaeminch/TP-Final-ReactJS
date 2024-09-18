import { useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const useNavButton = () => {
    const location = useLocation();
    const { isLogged } = useAuth();

    let buttonText = isLogged ? 'CERRAR SESIÓN' : 'INGRESAR';
    let buttonLink = isLogged ? '/' : '/login';

    switch (location.pathname) {
        case '/':
            buttonText = isLogged ? 'H O M E' : 'I N G R E S A R';
            buttonLink = isLogged ? '/home' : '/login';
            break;

        case '/login':
            buttonText = 'I N I C I O';
            buttonLink = '/';
            break;

        case '/home':
            buttonText = 'E M P L E A D O S';
            buttonLink = isLogged ? '/employees' : '/login';
            break;

        case '/employees':
            buttonText = 'H O M E';
            buttonLink = '/home';
            break;
    }

    return { buttonText, buttonLink };
};

export default useNavButton;
