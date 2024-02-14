import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 30%;
  width: 40%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Select = styled.select`
  margin-bottom: 20px;
  width: 50%;
  border: 2px solid black;
  border-radius: 4px;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const ModaloBtn = styled.button`
  padding: 1rem 2rem;
  margin-left: 0.5rem;
  background-color: #8cb9ad;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #8cb9bd;
  }
`;

function Modal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, author });
    setTitle("");
    setAuthor("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper method="dialog">
          <ModalContent>
            <ModalHeader>Add New Book</ModalHeader>
            <form onSubmit={handleSubmit}>
              <Input
                id="isbn"
                minlength="14"
                maxlength="14"
                placeholder="ISBN"
                required
              />
              <Input id="image-url" placeholder="Image URL" required />
              <Input id="author" type="text" placeholder="Author" required />
              <Input id="title" placeholder="Title" required />
              <TextArea
                id="description"
                placeholder="Description"
                rows="5"
              ></TextArea>
              <Input
                id="edition"
                placeholder="Edition"
                type="number"
                required
              />
              <Input id="publisher" placeholder="Publisher" />
              <Input
                id="published-date"
                placeholder="Published date"
                type="date"
                required
              />
              <Input id="pages" placeholder="Pages" type="number" required />
              <Input id="language" placeholder="Language" required />
              <div id="categories-container-add">
                <Label for="categories">Categories</Label>
                <Select>
                  <option value="Select">Select</option>
                  <option value="academic">Academic</option>
                  <option value="kids">Kids</option>
                  <option value="fiction">Fiction</option>
                  <option value="business">Business</option>
                  <option value="science">Science</option>
                  <option value="reference">Reference</option>
                  <option value="poetry">Poetry</option>
                  <option value="religion">Religion</option>
                </Select>
              </div>
              <div>
                <ModaloBtn onClick={handleSubmit}>Add Book</ModaloBtn>
                <ModaloBtn onClick={onClose}>Cancel</ModaloBtn>
                {/* <Button type="submit" value="Submit" />
                <Button type="reset" value="Clear" /> */}
              </div>
            </form>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
}

export default Modal;
