import React from "react";
import styled from "styled-components";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import Logo from './logo';

function NavBar() {
 
    return (
<AppBar>
<StyledTopBarInner><StyledLogoWrapper><Logo/></StyledLogoWrapper><Typography>xLiquidity</Typography>
        <Tabs>
          <Tab label="Home" href="#" />
          <Tab label="About" href="#"/>
          <Tab label="Contact" href="#"/>
          <Tab label="Documentation" href="#"/>
        </Tabs>
        </StyledTopBarInner>
      </AppBar>
        )}

        const StyledLogoWrapper = styled.div`
        width: 260px;
        @media (max-width: 400px) {
          width: auto;
        }
      `;
      const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: space-between;

  background-color:#5B90AD;
`;

export default NavBar;