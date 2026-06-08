import styled from "styled-components";
import { Subtitle } from "../../../../Styles/General.styled";

export const RulesSubtitle = styled(Subtitle)`
  color: #555;
  font-size: 1.3rem;
  overflow-wrap: break-word;
  padding: 0.8rem 0;
  line-height: 1.7;
  margin: 0;

  &:before {
    content: attr(data-icon);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.45rem 0;
    line-height: 1.45;
  }

  @media (max-width: 768px) {
    font-size: 0.88rem;
    padding: 0.35rem 0;
    line-height: 1.35;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

export const RulesAndSafety = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  margin: 3rem 0;

  > div {
    padding: 2rem;
    background: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: #f5f5f5;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }

  .rules-title {
    font-size: 1.5rem;
    color: #222;
    margin: 0 0 1.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid #ea3939;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    padding: 1rem 0 0 0 ;
    margin: 1rem 0 0 0 ;

    > div {
      padding: 1rem;
      border-radius: 10px;
    }

    .rules-title {
      font-size: 1.15rem;
      margin: 0 0 0.7rem 0;
      padding-bottom: 0.55rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    padding-top: 1rem ;
    margin-top: 1rem ;

    > div {
      padding: 0.8rem;

      &:hover {
        background: #fafafa;
        box-shadow: none;
      }
    }

    .rules-title {
      font-size: 1rem;
      margin: 0 0 0.5rem 0;
      padding-bottom: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.55rem;

    > div {
      padding: 0.65rem;
      border-radius: 8px;
    }

    .rules-title {
      font-size: 0.9rem;
    }
  }
`;
