import { FC } from "react"
import { Banner, Name, Title } from "./style";

const Header: FC = () => {
    return (
        <>
        <Banner>
            <Title>MY LITTLE JOURNAL</Title>
            <Name>By Julia</Name>
        </Banner>
        </>
    )
};

export default Header;