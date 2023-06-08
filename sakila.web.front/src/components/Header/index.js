import { HeaderContainer, HeaderLeft, HeaderRight, HeaderWrapper, Navigation, Logo, HeaderSignatureText } from "./HeaderElements";
import { Link, Outlet } from "react-router-dom";
import ReactImage from '../../assets/images/react.png';


const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderLeft>
                        <Logo src={ReactImage} type='images/png'/>
                        <Navigation>
                            <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>Accueil</Link> |{" "}
                            <Link to="/panier" style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>Panier</Link> |{" "}
                            <Link to="/historique" style={{ textDecoration: 'none', color: 'black', fontSize: '25px' }}>Historique</Link>
                        </Navigation>
                    </HeaderLeft>
                    <HeaderRight>
                        <HeaderSignatureText>E-Commerce with React by Ayoub Moutaouakil</HeaderSignatureText>
                    </HeaderRight>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
};

export default Header;
