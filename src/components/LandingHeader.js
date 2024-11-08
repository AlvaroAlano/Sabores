import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0) scale(1)' : 'translateY(-100%) scale(0.8)')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 1000;
  @media (max-width: 768px) {
  transform: translateY(0) scale(1);
  opacity: 1;
  }
`;

const TopBar = styled.div`
  background-color: #096F8C;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
  display: none;
  }
`;

const SocialIconsContainer = styled.div`
  margin-right: 150px;
`;

const SocialIcon = styled.a`
  color: #fff;
  margin-left: 20px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #096F8C;
  }
`;

const MainHeader = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  margin: 5px 0px 0px 0px;
  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')};
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #7E7E7E;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: #096F8C;
  }

  &:hover {
    color: #096F8C;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

function LandingHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer isVisible={isVisible}>
      <TopBar>
        <SocialIconsContainer>
          <SocialIcon href="https://www.facebook.com/share/18c1Kz3dk3/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/_saboresdolitoral?igsh=ZnJjeHJndzZra2Zq" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIconsContainer>
      </TopBar>
      <MainHeader>
        <NavLink to="/landing">
          <LogoImage src="/images/logomeiocinza.png" alt="Logo" />
        </NavLink>
        <HamburgerIcon onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </HamburgerIcon>
        <NavMenu isMenuOpen={isMenuOpen}>
        <StyledNavLink to="/landing" end onClick={toggleMenu}>Home</StyledNavLink>
          <StyledNavLink to="/landing/produtos" onClick={toggleMenu}>Produtos</StyledNavLink>
          <NavLink to="/landing">
            <LogoImage src="/images/logomeiocinza.png" alt="Logo" isMenuOpen={isMenuOpen} />
          </NavLink>
          <StyledNavLink to="/landing/parceiros" onClick={toggleMenu}>Parceiros</StyledNavLink>
          <StyledNavLink to="/landing/contato" onClick={toggleMenu}>Contato</StyledNavLink>
        </NavMenu>
      </MainHeader>
    </HeaderContainer>
  );
}

export default LandingHeader;