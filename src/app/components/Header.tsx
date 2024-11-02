import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

export const Header = () => (
    <div class="w3-top">
      <div class="w3-bar w3-top w3-left-align w3-large horwood-top">
        <a id="site_logo" href="{{ base_url }}" class="w3-bar-item w3-button w3-theme-l1 horwood-logo">
          <img src="https://owncloud.horwood.biz/apps/theming/image/logo?v=25" alt="Site Logo" height="42" width="49">
        </a>
      </div>
      <div class="w3-bar w3-top w3-left-align w3-large horwood-bcs" style="top: 66px;">
        <span class='seven-col'>
        </span>
        <span class="horwood-temp"></span>
        <div class='five-col search noprint' role='search'>
        </div>
      </div>
    </div>
    );
