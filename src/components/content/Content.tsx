import styled from "styled-components";
import React, {FC, ReactNode, useEffect, useState} from "react";
import {FaCog, FaMoon, FaSun} from "react-icons/fa";
import {Menu} from "./Menu";

const ContentMain = styled.div`
  background: var(--bg-black-900);
  min-height: 100vh;
  display: block;
  padding: 0 30px;
  opacity: 1;
  position: fixed;
  left: 270px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease;

  @media (max-width: 1199px) {
    left: 0;
  }
`

const Switcher = styled.div<SwitcherType>`
  position: fixed;
  right: 0;
  top: 60px;
  padding: 15px;
  width: 200px;
  border: 1px solid var(--bg-black-50);
  background: var(--bg-black-100);
  z-index: 101;
  border-radius: 5px;
  transition: all 0.3s ease;
  transform: translateX(${({isOpenConfig}) => isOpenConfig ? '0' : '200px'});
  user-select: none;

  h4 {
    margin: 0 0 10px;
    color: var(--text-black-700);
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }
`

const ThemeSwitcher = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  font-size: 20px;
  background: var(--bg-black-100);
  color: var(--text-black-900);
  right: 100%;
  border: 1px solid var(--bg-black-50);
  margin-right: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 50px;
`

const ColorSwitcher = styled(ThemeSwitcher)`
  top: 0;

  svg {
    animation: config 2s linear infinite;

    @keyframes config {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  span {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-bottom: 5px;
    cursor: pointer;

    &:nth-child(1n + 6) {
      margin-bottom: 0;
    }
  }
`

const Line = styled.hr`
  border: 0;
  border-top: 1px solid;
  color: var(--text-black-700);
  margin: 0 0 15px;
  opacity: .1;
`

const Overlay = styled.div<OverlayType>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.75;
  z-index: 1;
  display: ${({isOpenMenu}) => isOpenMenu ? 'block' : 'none'};
`

export const Content: FC<ContentType> = ({children}) => {
    const [color, setColor] = useState<string>('red')
    const [theme, setTheme] = useState<string>('night')
    const [isOpenConfig, setIsOpenConfig] = useState<boolean>(false)
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const changeColor = (color: string) => {
        setColor(color)
        localStorage.setItem('data-color', color);
    }

    const changeTheme = () => {
        const currentTheme = theme === 'day' ? 'night' : 'day'
        setTheme(currentTheme)
        localStorage.setItem('data-theme', currentTheme);
    }

    useEffect(() => {
        document.body.setAttribute('data-color', color);
    }, [color])
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])
    useEffect(() => {
        const colorData = localStorage.getItem('data-color')
        if (colorData) {
            setColor(colorData)
        }

        const themeData = localStorage.getItem('data-theme')
        if (themeData) {
            setTheme(themeData)
        }
    }, [])

    return (
        <>
            <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <ContentMain onClick={() => setIsOpenConfig(false)}>
                <Overlay isOpenMenu={isOpenMenu} onClick={() => setIsOpenMenu(false)}/>
                {children}
            </ContentMain>
            <Switcher isOpenConfig={isOpenConfig}>
                <ColorSwitcher onClick={() => setIsOpenConfig(!isOpenConfig)}>
                    <FaCog/>
                </ColorSwitcher>
                <ThemeSwitcher onClick={changeTheme}>
                    {theme === "day" ? <FaSun/> : <FaMoon/>}
                </ThemeSwitcher>
                <h4>Theme Colors</h4>
                <Line/>
                <Colors>
                    <span style={{background: '#da1427'}} onClick={() => changeColor('red')}></span>
                    <span style={{background: '#ef750c'}} onClick={() => changeColor('orange')}></span>
                    <span style={{background: '#ffd700'}} onClick={() => changeColor('yellow')}></span>
                    <span style={{background: '#008000'}} onClick={() => changeColor('green')}></span>
                    <span style={{background: '#00a3e1'}} onClick={() => changeColor('cyan')}></span>
                    <span style={{background: '#0000b4'}} onClick={() => changeColor('blue')}></span>
                    <span style={{background: '#6600b0'}} onClick={() => changeColor('indigo')}></span>
                    <span style={{background: '#e83e8c'}} onClick={() => changeColor('pink')}></span>
                    <span style={{background: '#795548'}} onClick={() => changeColor('brown')}></span>
                    <span style={{background: '#808080'}} onClick={() => changeColor('grey')}></span>
                </Colors>
            </Switcher>
        </>
    );
};

type ContentType = {
    children: ReactNode
}

interface SwitcherType {
    isOpenConfig: boolean
}

interface OverlayType {
    isOpenMenu: boolean
}
