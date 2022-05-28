import { FC } from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.css";
import twitterIcon from "./../../Assets/twitterIcon.png";
import homeIcon from "./../../Assets/homeIcon.png";
import notificationsIconDark from "./../../Assets/notificationsIconDark.png";
import messagesIconDark from "./../../Assets/messagesIconDark.png";
import accountIconDark from "./../../Assets/accountIconDark.png";
import moreIconDark from "./../../Assets/moreIconDark.png";

const Header: FC = () => {
  return (
    <>
      <S.Header className="center">
        <S.Nav>
          <S.Logo className="center">
            <img src={twitterIcon} alt="Twitter Logo" />
          </S.Logo>
          <S.UL>
            <S.LI>
              <S.NavLink to="">
                <img src={homeIcon} alt="" />
                <span>Home</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/notifications">
                <img src={notificationsIconDark} alt="" />
                <span>Notifications</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/messages">
                <img src={messagesIconDark} alt="" />
                <span>Messages</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/profile">
                <img src={accountIconDark} alt="" />
                <span>Profile</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/more">
                <img src={moreIconDark} alt="" />
                <span>More</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.TweetButton>Tweet</S.TweetButton>
            </S.LI>
          </S.UL>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Header;
