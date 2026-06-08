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

  @media (max-width: 1024px) {
    padding: 2rem 1.4rem;
    margin: 1.5rem 0;

    .header {
      gap: 1rem;
      margin-bottom: 1.2rem;
    }

    .host-profile-pic {
      width: 64px;
      height: 64px;
    }

    .host-title {
      font-size: 1.2rem;
    }

    .host-subtitle {
      font-size: 0.85rem;
    }

    .title-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
      padding: 1.1rem 0;
    }

    .list-subtitle {
      font-size: 0.92rem;
      padding: 0.25rem 0;
    }

    .icon {
      font-size: 1.7rem;
    }

    .body {
      padding: 1.1rem 0 0.4rem;
    }

    .body-title {
      font-size: 1.18rem;
      margin-bottom: 0.7rem;
    }

    .body-subtitle {
      font-size: 0.98rem;
      line-height: 1.45;
      margin: 0.45rem 0;
    }

    .body-btn {
      margin-top: 1rem;
      padding: 0.65rem 1.35rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.1rem 0.85rem;
    margin: 1rem 0;

    .header {
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.8rem;
    }

    .host-profile-pic {
      width: 56px;
      height: 56px;
      border-width: 2px;
    }

    .host-title {
      font-size: 1rem;
    }

    .host-subtitle {
      font-size: 0.78rem;
    }

    .title-list {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0.8rem 0;
    }

    .list-subtitle {
      font-size: 0.82rem;
    }

    .icon {
      font-size: 1.35rem;
    }

    .body {
      padding: 0.8rem 0 0.2rem;
    }

    .body-title {
      font-size: 1rem;
    }

    .body-subtitle {
      font-size: 0.84rem;
      line-height: 1.4;
      margin: 0.35rem 0;
    }

    .body-btn {
      margin-top: 0.8rem;
      padding: 0.55rem 1rem;
      font-size: 0.82rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.9rem 0.65rem;
    border-radius: 10px;

    .header {
      gap: 0.6rem;
    }

    .host-profile-pic {
      width: 48px;
      height: 48px;
    }

    .host-title {
      font-size: 0.9rem;
    }

    .host-subtitle {
      font-size: 0.72rem;
    }

    .title-list {
      gap: 0.7rem;
    }

    .list-subtitle {
      font-size: 0.76rem;
    }

    .icon {
      font-size: 1.18rem;
    }

    .body-title {
      font-size: 0.9rem;
    }

    .body-subtitle {
      font-size: 0.76rem;
    }
  }
`