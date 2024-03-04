import styled from "@emotion/styled";

export const MedicineItem = styled.li`
  padding: 15px;
  border: 3px solid var(--border);
  border-radius: 8px;

  > img {
    margin-bottom: 12px;
    border-radius: 8px;
  }

  > h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 20px;
  }

  > button {
    display: block;
    margin-left: auto;
    padding: 8px;
    border: 3px solid var(--border);
    border-radius: 8px;
    background-color: var(--gray);

    &:hover {
      transform: scale(1.1);
      transition: var(--transition);
    }
  }
`;
