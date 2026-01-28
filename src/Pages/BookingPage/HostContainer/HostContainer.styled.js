import styled from "styled-components";

export const HostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  margin: 3rem 0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .header {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .host-profile-pic {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .host-titles {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .host-title {
    font-size: 1.5rem;
    color: #222;
    margin: 0;
    font-weight: 600;
  }

  .host-subtitle {
    font-size: 0.95rem;
    color: #888;
    margin: 0;
  }

  .title-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    padding: 2rem 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .title-list > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .list-subtitle {
    font-size: 1rem;
    color: #222;
    margin: 0;
    padding: 0.5rem 0;
    font-weight: 500;
  }

  .icon {
    font-size: 2.5rem;
    color: #ea3939;
    margin: 0;
  }

  .body {
    padding: 2rem 0;
  }

  .body-title {
    color: #222;
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  .body-subtitle {
    font-size: 1.3rem;
    color: #555;
    line-height: 1.6;
    margin: 0.75rem 0;
  }

  .body-btn {
    margin-top: 2rem;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 2rem 0;

    .host-title {
      font-size: 1.25rem;
    }

    .title-list {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`