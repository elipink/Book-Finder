import styled from "styled-components";


export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  
`;

export const CardImage = styled.img`
  aspect-ratio: 3/2;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0.5rem;
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.2rem;
`;
export const CardDescription = styled.p`
  margin-bottom: 0.8rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;

  min-height: 6em;
  max-height: 40px;
  text-overflow: ellipsis,
  
`;

export const CardButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  pointer-events: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
