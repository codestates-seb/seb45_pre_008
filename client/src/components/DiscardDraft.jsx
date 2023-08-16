import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  color: rgb(194, 45, 50);
  padding: 10.4px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: rgb(253, 242, 242);
    color: rgb(172, 37, 42);
  }
  &:active {
    color: rgb(194, 45, 50);
    background-color: rgb(249, 211, 211);
  }
`;
const ModalTitle = styled.div``;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export default function DiscardDraft() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <Button onClick={openModal}>Discard draft</Button>
      {isModalOpen && (
        <ModalOverlay onClick={handleModalClick}>
          <ModalContent>
            <ModalTitle>Discard question</ModalTitle>
            <p>
              Are you sure you want to discard this question? This cannot be
              undone.
            </p>
            <Button onClick={closeModal}>Discard question</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
