import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

     subNav: [
         {
           title: 'Users',
           path: '/home/users',
           icon: <IoIcons.IoMdPeople />,
        },
         {
           title: 'Revenue',
           path: '/home/revenue',
           icon: <IoIcons.IoIosPaper />
         }
       ]

  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

     subNav: [
         {
           title: 'Products 1',
           path: '/products/products1',
           icon: <FaIcons.FaCartPlus />,
           cName: 'sub-nav'
         },
         {
           title: 'Products 2',
           path: '/products/products2',
           icon: <FaIcons.FaCartPlus />,
           cName: 'sub-nav'
         },
         {
           title: 'Products 3',
           path: '/products/products3',
           icon: <FaIcons.FaCartPlus />,
         }
       ]

  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];