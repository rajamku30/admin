import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cash & Liquildity',
    to: '/admin/liquildity',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Intraday Balances',
    to: '/admin/intraday',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/service',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'US Fed Account Forecast',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'MIS Report',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SVB Internal Accounts',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Hold Cash Flow Report',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Intraday Net Debit',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Top 100 Clients',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Help Center',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      }

    ]
  },
]

export default _nav
