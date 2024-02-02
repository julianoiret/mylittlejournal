import { FC } from "react"
import { Banner, LeftImg, TitleImg, RightImg, Name, Title, TitleWrapper } from "./style";

const Header: FC = () => {
    return (
        <>
        <Banner>
            <LeftImg src={require('../asset/butterfly.png')}></LeftImg>
            <div>
            <TitleWrapper>
            <Title>My Little Journal</Title>
            <TitleImg src={require('../asset/butterfly-2.png')}></TitleImg>
            </TitleWrapper>
            <Name>Creative journals - Science | History | Culture | Art</Name>
            </div>
            {/* <MiddleImg src={require('../asset/butterfly-2.png')}></MiddleImg> */}
            <RightImg src={require('../asset/yellow-plant.png')}></RightImg>
        </Banner>
        </>
    )
};

export default Header;