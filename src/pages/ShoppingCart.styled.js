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
export const BasketItem = styled.li`
  display: flex;
  width: 100%;
  padding: 8px;
  border: 3px solid var(--border);
  border-radius: 8px;

  > img {
    border-radius: 8px;
    margin-right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > h2 {
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 18px;
    }

    > p {
      margin-bottom: 16px;
      font-size: 14px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
  > input {
    width: 200px;
    height: 30px;
    border: 2px solid var(--border);
    border-radius: 8px;
    text-align: center;
  }
`;
export const ButtonUp = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: start;
  width: 30px;
  height: 15px;
  border: 2px solid var(--border);
  border-top-right-radius: 8px;
  background-color: var(--gray);

  &:hover,
  :focus {
    background-color: var(--border);
    transition: var(--transition);
  }
`;

export const ButtonDown = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: end;
  width: 30px;
  height: 15px;
  border: 2px solid var(--border);
  border-bottom-right-radius: 8px;
  background-color: var(--gray);

  &:hover,
  :focus {
    background-color: var(--border);
    transition: var(--transition);
  }
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
