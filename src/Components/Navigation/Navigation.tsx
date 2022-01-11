import "./Navigation.scss";

import React from "react";
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {grey} from '@mui/material/colors';
import MenuBurger from "../MenuBurger/MenuBurger";
import useTypedSelector from "../../hooks/useTypedSelector";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {

  const { menuIsOpen } = useTypedSelector((state) => state.appState);


  return (
    <div className={menuIsOpen ? 'navigation open' : 'navigation'}>
      <MenuBurger />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <PlaylistAddCheckCircleOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
              Заказы
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <PeopleAltOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
              Клиенты
            </a>
          </li>
          <hr/>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <SummarizeOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
              Отчёты
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <DataSaverOffOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
              Аналитика
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <SendOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
              SMS рассылка
            </a>
          </li>
          <hr/>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <SettingsOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }}  />
              Настройки
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
