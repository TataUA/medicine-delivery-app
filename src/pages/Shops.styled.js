import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const ShopsWrapper = styled.div`
  width: 300px;
  height: 580px;
  padding: 15px 30px;
  border: 3px solid var(--border);
  border-radius: 8px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

export const ShopsList = styled.ul`
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow-y: auto;

  > li {
    width: 200px;
    padding: 8px 16px;
    text-align: center;
    border: 3px solid var(--border);
    border-radius: 8px;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const MedicineWrapper = styled.div`
  width: 810px;
  height: 580px;
  padding: 15px 60px;
  border: 3px solid var(--border);
  border-radius: 8px;
  overflow-y: auto;
`;

export const MedicineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

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

    &:hover, :focus{
        transform: scale(1.1);
        transition: var(--transition);
    }
  }
`;
