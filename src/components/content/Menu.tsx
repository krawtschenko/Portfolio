import React, {FC} from 'react';
import styled from "styled-components";
import {FaHome, FaUser, FaListUl, FaBriefcase, FaComments} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import {IoLogoFacebook, IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";

const MenuMain = styled.div<AsideMainType>`
  width: 270px;
  background: var(--bg-black-100);
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px;
  height: 100%;
  border-right: 1px solid var(--bg-black-50);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.3s ease;

  @media (max-width: 1199px) {
    left: ${({distance}) => distance};
  }
`

const Logo = styled.div`
  position: absolute;
  top: 50px;
  font-size: 30px;
  text-transform: capitalize;
  
  @media (max-height: 490px) {
    display: none;
  }

  a {
    color: var(--text-black-900);
    font-weight: 700;
    padding: 15px 20px;
    font-size: 30px;
    letter-spacing: 5px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-bottom: 5px solid var(--skin-color);
      border-left: 5px solid var(--skin-color);
      bottom: 0;
      left: 0;
    }

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-top: 5px solid var(--skin-color);
      border-right: 5px solid var(--skin-color);
      top: 0;
      right: 0;
    }
  }

  span {
    font-family: 'Lobster', cursive;
    color: var(--skin-color);
    font-size: 45px;
    font-weight: 400;
  }
`

const Hamburger = styled.div<HamburgerType>`
  height: 40px;
  width: 45px;
  border: 1px solid var(--bg-black-50);
  cursor: pointer;
  position: fixed;
  left: 300px;
  top: 20px;
  border-radius: 5px;
  background: var(--bg-black-100);
  display: none;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  span {
    height: 2px;
    width: 18px;
    background: ${({background}) => background};
    display: inline-block;
    position: relative;

    &::before {
      content: '';
      height: 2px;
      width: 18px;
      background: var(--skin-color);
      position: absolute;
      top: ${({topBefore}) => topBefore};
      left: 0;
      transform: ${({transformBefore}) => transformBefore};
    }

    &::after {
      content: '';
      height: 2px;
      width: 18px;
      background: var(--skin-color);
      position: absolute;
      top: ${({topAfter}) => topAfter};
      left: 0;
      transform: ${({transformAfter}) => transformAfter};
    }
  }

  @media (max-width: 1199px) {
    display: flex;
    left: ${({distance}) => distance};
  }
`

const Nav = styled.ul`
  list-style: none;
  margin-top: 50px;

  li {
    margin-bottom: 20px;
    transition: all 0.3s ease;
    

    &:hover {
      transform: scale(1.09);
    }
  }

  a {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--bg-black-50);
    color: var(--text-black-900);
    padding: 5px 15px;

    svg {
      margin-right: 15px;
    }
  }
`

const Social = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 90px;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-height: 490px) {
    display: none;
  }

  a {
    font-size: 25px;
    color: var(--text-black-900);
    transition: all 0.5s;

    &:hover {
      color: var(--skin-color);

      animation: icon 0.25s linear infinite alternate;

      @keyframes icon {
        from {
          margin-bottom: 0;
        }
        to {
          margin-bottom: 7.5px;
        }
      }
    }
  }
`

export const Menu: FC<AsidePropsType> = ({isOpenMenu, setIsOpenMenu}) => {
    const menu = isOpenMenu

    return (
        <MenuMain distance={menu ? '0' : '-270px'}>
            <Hamburger onClick={() => setIsOpenMenu(!isOpenMenu)}
                       background={menu ? 'transparent' : 'var(--skin-color)'}
                       distance={menu ? '300px' : '30px'} topBefore={menu ? '0' : '-6px'}
                       topAfter={menu ? '0' : '6px'} transformBefore={menu ? 'rotate(45deg)' : ''}
                       transformAfter={menu ? 'rotate(-45deg)' : ''}
            >
                <span></span>
            </Hamburger>
            <Logo onClick={() => setIsOpenMenu(false)}>
                <Link to="/"><span>P</span>ortfolio</Link>
            </Logo>
            <Nav>
                <li onClick={() => setIsOpenMenu(false)}>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: 'var(--skin-color)'} : {}}>
                        <FaHome/>Home
                    </NavLink>
                </li>
                <li onClick={() => setIsOpenMenu(false)}>
                    <NavLink to="/about" style={({isActive}) => isActive ? {color: 'var(--skin-color)'} : {}}>
                        <FaUser/>About
                    </NavLink>
                </li>
                <li onClick={() => setIsOpenMenu(false)}>
                    <NavLink to="/skills" style={({isActive}) => isActive ? {color: 'var(--skin-color)'} : {}}>
                        <FaListUl/>Skills
                    </NavLink>
                </li>
                <li onClick={() => setIsOpenMenu(false)}>
                    <NavLink to="/portfolio" style={({isActive}) => isActive ? {color: 'var(--skin-color)'} : {}}>
                        <FaBriefcase/>Portfolio
                    </NavLink>
                </li>
                <li onClick={() => setIsOpenMenu(false)}>
                    <NavLink to="/contact" style={({isActive}) => isActive ? {color: 'var(--skin-color)'} : {}}>
                        <FaComments/>Contact
                    </NavLink>
                </li>
            </Nav>
            <Social>
                <a target="_blank" href="https://www.facebook.com/krawtschenko/" rel="noreferrer">
                    <IoLogoFacebook/>
                </a>
                <a target="_blank" href="https://linkedin.com/in/yevhenii-kravchenko-7a6b96262/" rel="noreferrer">
                    <IoLogoLinkedin/>
                </a>
                <a target="_blank" href="https://github.com/krawtschenko/" rel="noreferrer">
                    <IoLogoGithub/>
                </a>
            </Social>
        </MenuMain>
    );
};

type AsidePropsType = {
    isOpenMenu: boolean
    setIsOpenMenu: (isOpenMenu: boolean) => void
}

interface AsideMainType {
    distance: string
}
interface HamburgerType {
    background: string
    distance: string
    topBefore: string
    topAfter: string
    transformBefore: string
    transformAfter: string

}