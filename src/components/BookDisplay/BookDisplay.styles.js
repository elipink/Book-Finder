import styled from 'styled-components';

export const BookDisplayCatagoryName = styled.h3`
font-size: 2rem;
`

export const BookDisplayContener = styled.div`
  padding: 20px 120px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
export const BookDisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 30px;
  grid-gap: 30px;
 
`;