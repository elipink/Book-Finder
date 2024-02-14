import styled from 'styled-components';

export const BookDetailContainer = styled.div`
  border: 1px solid green;
  width: 76vw;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
export const BookDetailWrapper = styled.div`
  border: 1px solid orangered;
  display: grid;
  grid-template-columns: repeat(3, minmax(30vw, 1fr));
  row-gap: 30px;
  grid-gap: 30px;
  min-height: 80vh;
 
`;