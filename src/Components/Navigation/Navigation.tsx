import "./Navigation.scss";

import React from "react";
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {grey} from '@mui/material/colors';

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  return (
    <div className='navigation'>
      <div className="avatar" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <PlaylistAddCheckCircleOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
            <a href="#" className="nav__item__link">Заказы</a>
          </li>
          <li className="nav__item">
            <PeopleAltOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
            <a href="#" className="nav__item__link">Клиенты</a>
          </li>
          <hr/>
          <li className="nav__item">
            <SummarizeOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
            <a href="#" className="nav__item__link">Отчёты</a>
          </li>
          <li className="nav__item">
            <DataSaverOffOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
            <a href="#" className="nav__item__link">Аналитика</a>
          </li>
          <li className="nav__item">
            <SendOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }} />
            <a href="#" className="nav__item__link">SMS рассылка</a>
          </li>
          <hr/>
          <li className="nav__item">
            <SettingsOutlinedIcon className='nav__item__pic' color='primary' sx={{ color: grey[50] }}  />
            <a href="#" className="nav__item__link">Настройки</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
