import styled from "@emotion/styled";

export const BasketItem = styled.li`
  position: relative;
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

  &:hover {
    background-color: var(--border);
    transition: var(--transition);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  border: 2px solid var(--border);
  border-radius: 50%;
  text-align: center;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    transition: var(--transition);
  }
`;
