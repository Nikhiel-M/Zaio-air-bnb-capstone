import styled from "styled-components";

export const CalenderContainer = styled.div`
  height: 100%;
  width: 70%;
  min-width: 0;
  background-color: white;
  color: black;
  font-size: 1rem;
  border-radius: 30px;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);

  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-icon {
    margin: 0.6rem 0.5rem 0 3rem;
    height: 2.6rem;
    width: 2.9rem;
    color: white;
    fill: white;
    background-color: red;
    padding: 0.5rem 0.4rem 0.5rem 0.4rem;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 85%;

    .search-icon {
      margin-left: 1rem;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 22px;
    padding: 0.1rem 0.4rem;

    .search-icon {
      margin: 0.4rem 0 0 0.4rem;
      width: 2.5rem;
      height: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    border-radius: 16px;
    gap: 0;
    padding: 0.2rem 0.3rem;
    overflow: hidden;

    .search-button {
      width: auto;
      flex: 0 0 auto;
      justify-content: center;
      margin-top: 0;
      margin-left: 0.1rem;
    }

    .search-icon {
      margin: 0;
      width: 1.95rem;
      height: 1.95rem;
      padding: 0.38rem;
    }
  }

  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 0.15rem 0.2rem;

    .search-icon {
      width: 1.75rem;
      height: 1.75rem;
      padding: 0.32rem;
    }
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  flex: 1 1 0;
  min-width: 0;
  height: fit-content;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: black;
  position: relative;
  display: flex;
  flex-direction: column;


  .calender-title {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    white-space: nowrap;
  }

  .subtitle {
    font-size: 0.8rem;
    color: gray;
    margin: 0 0 0 0.1rem;
    cursor: pointer;
    padding: 0.2rem 0;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      color: #333;
    }
  }

  .locations {
    text-decoration: none;
  }

  @media (max-width: 992px) {
    padding: 0.45rem 0.65rem;

    .calender-title {
      font-size: 1rem;
    }

    .subtitle {
      font-size: 0.78rem;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 768px) {
    flex: 1 1 0;
    width: auto;
    padding: 0.32rem 0.24rem;
    border-right: 1px solid #eee;

    .calender-title {
      font-size: 0.72rem;
    }

    .subtitle {
      font-size: 0.62rem;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 480px) {
    flex: 1 1 0;
    width: auto;
    padding: 0.25rem 0.2rem;

    .calender-title {
      font-size: 0.65rem;
    }

    .subtitle {
      font-size: 0.56rem;
    }
  }
`;

export const CalendarModal = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0;
  width: max-content;
  min-width: 350px;
  max-width: calc(100vw - 2rem);
  overflow: auto;

  @media (max-width: 768px) {
    position: fixed;
    left: 1rem;
    right: 1rem;
    top: 6.5rem;
    width: auto;
    min-width: 0;
    max-height: 75vh;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
    padding: 0.4rem;
  }
`;

export const GuestDropdownModal = styled.div`
  position: absolute;
  z-index: 9999;
  top: 100%;
  right: 0;
  margin-top: 10px;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  min-width: 320px;
  max-width: 400px;

  @media (max-width: 768px) {
    position: fixed;
    top: 6.5rem;
    left: 1rem;
    right: 1rem;
    margin-top: 0;
    min-width: 0;
    max-width: none;
    max-height: 75vh;
    overflow-y: auto;
    padding: 16px;
  }
`;

export const GuestSection = styled.div`
  margin-bottom: 20px;
`;

export const GuestRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const GuestInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #717171;
  }
`;

export const GuestControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GuestButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "white")};
  color: ${(props) => (props.disabled ? "#ccc" : "#222")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: #f0f0f0;
  }
`;

export const GuestCount = styled.span`
  min-width: 20px;
  text-align: center;
  font-size: 16px;
`;

export const DoneButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const DoneButtonContainer = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 16px;
  margin-top: 16px;
`;

export const CountrySelector = styled.div`
  padding: 0.1rem;
  cursor: pointer;
`;
export const CountryOption = styled.div`
font-size: 1.1rem;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
