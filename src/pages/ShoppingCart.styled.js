import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;
export const UserWrapper = styled.div`
  width: calc((100% - 30px) / 2);
  height: 480px;
  padding: 15px 30px;
  border: 3px solid var(--border);
  border-radius: 8px;

  > label {
    display: block;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;

    > input {
      display: block;
      width: 400px;
      height: 40px;
      margin-top: 8px;
      border: 3px solid var(--border);
      border-radius: 8px;
    }
  }
`;

export const BasketWrapper = styled.div`
  width: calc((100% - 30px) / 2);
  height: 480px;
  padding: 15px 30px;
  border: 3px solid var(--border);
  border-radius: 8px;
  overflow-y: auto;
`;

export const BasketList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
`;

export const FinalWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  > p {
    font-weight: 600;
    font-size: 22px;
    margin-right: 80px;
  }

  > button {
    width: 260px;
    height: 60px;
    border: 2px solid var(--border);
    border-radius: 8px;
    font-weight: 600;
    font-size: 22px;

    &:hover,
    :focus {
      transform: scale(1.1);
      transition: var(--transition);
    }
  }
`;
