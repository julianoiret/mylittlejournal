/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react"
import { IntroductionSection, IntroductionTitle, IntroductionText } from "./style";
import { data } from '../data';

type SelectOption = {
    id: number
    link: string
}

type SelectProps = {
    carotte: SelectOption[];
}

const Main: FC<SelectProps> = () => {
    return (
        <>
        <IntroductionSection>
            {data.map((option) => {
                return (
                    <p>{option.id}</p>
                )
            })}
            <IntroductionTitle>Title</IntroductionTitle>
            <IntroductionText>Introduction text</IntroductionText>
        </IntroductionSection>
        </>
    )
};

export default Main;