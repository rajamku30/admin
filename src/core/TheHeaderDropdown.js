import React from 'react';
import styled from 'styled-components';
import {colors} from './../components/Styles';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react';
import {Link} from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import avatar from './../assets/logo.png';
import { useHistory } from 'react-router-dom';

import {logoutUser} from './../redux/actions/userActions';

//Styled components section
const StyledLink = styled(Link)`
   text-decoration: none;
`;

const TheHeaderDropdown = () => {
  const history = useHistory();

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={avatar}
            className="c-avatar-img"
            alt="admin@gmail.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          <StyledLink to="#" onClick={() => logoutUser(history)}>Logout</StyledLink>
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
