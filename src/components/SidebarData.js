import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import firebase from "../firebase";


const handleLogout = () => {
  firebase.auth().signOut();
};

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',

    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  
  {
    title: 'Data Anggur',
    path: '/dataanggur',
    icon: <GiIcons.GiGrapes/>,
    cName: 'nav-text'
  },
  {
    title: 'Tambah Anggur',
    path: '/tambahanggur',
    icon: <RiIcons.RiAddLine/>,
    cName: 'nav-text'
  },
  {
    title: 'Daftar Toko',
    path: '/toko',
    icon: <RiIcons.RiStore3Fill />,
    cName: 'nav-text'
  },
  {
    title: 'Tambah Toko',
    path: '/tambahtoko',
    icon: <RiIcons.RiAddLine />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },

  {
    title: 'Keluar',
    onclick : {handleLogout},
    icon: <IoIcons.IoMdExit />,
    cName: 'nav-text'
  }
];