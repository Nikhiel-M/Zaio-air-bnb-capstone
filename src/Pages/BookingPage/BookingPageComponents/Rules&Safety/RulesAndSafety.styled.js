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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
    margin: 2rem 0;

    .rules-title {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
    }
  }
`;
