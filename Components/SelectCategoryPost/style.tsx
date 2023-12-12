import styled from "@emotion/styled";

export const StyledSelectCategoryPost = styled.div(({ theme }) => `
  margin: 0 auto;
  
  & .selectCategory-post-container{
    max-width: 752px;
    width: 100%;
    display: grid;
    column-gap: 20px;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 872px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 572px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  & .category-post-container {
    transition: all .2s ease;

    &:active {
      transform: scale(0.95);
    }
  }

  & a {
    text-decoration: none;
    color: ${theme.colors.text()};
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }

  & h1 {
    font-size: 20px;
  }

  & h2 {
    word-break: break-all;
    font-size: 18px;

    @media (max-width: 572px) {
      font-size: 16px;
    }
  }
`);