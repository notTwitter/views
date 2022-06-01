import { FC } from "react";
import CreateTweet from "./CreateTweet/CreateTweet";
import * as S from './Home.css'

const Home: FC = () => {
  return (
    // Parent Elements = MainSection -> Outlet(Auth) -> Content Section => Home
    <S.HomeContainer>
      <S.Title>
        <h2>Home</h2>
      </S.Title>
      <S.HomeContent>
        <CreateTweet/>
      </S.HomeContent>
    </S.HomeContainer>
  )
};

export default Home;
