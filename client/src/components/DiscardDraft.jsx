import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './../assets/styles/QuestionStyle.jsx';

const DiscardDraftButton = styled(Button)`
  color: rgb(194, 45, 50);
  background-color: #f8f9f9;
  font-weight: 400;
  margin-left: 10px;
  &:hover {
    color: rgb(172, 37, 42);
    background-color: rgb(253, 242, 242);
  }
  &:active {
    color: rgb(194, 45, 50);
    background-color: rgb(249, 211, 211);
  }
`;
const DeleteButton = styled(Button)`
  background-color: #d0393e;
  margin-right: 10px;
  &:hover {
    background-color: rgb(194, 45, 50);
  }
`;
const CancelButton = styled(Button)`
  color: #3b4045;
  background-color: #ffffff;
  &:hover {
    color: #3b4045;
    background-color: #f8f9f9;
  }
`;
const XButton = styled(CancelButton)`
  padding: 10px;
  margin-top: -10px;
  width: 40px;
  font-size: 20px;
`;
const ModalTitle = styled.div`
  font-size: 27px;
  font-weight: 600;
  color: #c22e32;
`;
const ModalTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #3b4045;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export default function DiscardDraft({ resetForm, resetTagContent }) {
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
  const handleDiscard = () => {
    resetForm();
    resetTagContent();
    closeModal();
  };
  return (
    <>
      <DiscardDraftButton onClick={openModal}>Discard draft</DiscardDraftButton>
      {isModalOpen && (
        <ModalOverlay onClick={handleModalClick}>
          <ModalContent>
            <ModalTopContainer>
              <ModalTitle>Discard question</ModalTitle>
              <XButton onClick={closeModal}>&times;</XButton>
            </ModalTopContainer>
            <p>
              Are you sure you want to discard this question? This cannot be
              undone.
            </p>
            <DeleteButton onClick={handleDiscard}>
              Discard question
            </DeleteButton>
            <CancelButton onClick={closeModal}>Cancel</CancelButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
