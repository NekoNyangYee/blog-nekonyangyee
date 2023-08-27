import styled from "@emotion/styled";

const StyledIntroduceHeader = styled.div(({ theme }) => `
    widrh: 100%;
    border: 1px solid ${theme.colors.text(10)};
    padding: 12px;
    border-radius: 12px;
    margin: 30px 0;

    & p {
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        color: ${theme.colors.text(90)};
    }
`);

export const Introduce = () => {
    return (
        <StyledIntroduceHeader>
            <p>ℹ️ 안녕하세요! NekoNynagYee 블로그에 오신 것을 환영합니다😊 <br /> 개발 일기를 쓸 목적으로 만들어졌지만 개발 일기 말고도 여러 일상 이야기도 올라옵니다😁👍</p>
        </StyledIntroduceHeader>
    );
}