import { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Container = styled.div`
  width: 100%;
`;

const Draft = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateTextDescription = (state) => {
    setEditorState(state);
  };

  return (
    <>
      <Container>
        <Editor
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          editorStyle={{
            height: '130px',
            width: '100%',
            border: '1px solid lightgray',
          }}
          toolbar={{
            options: ['inline', 'blockType', 'list', 'textAlign'], // 필요한 옵션만 남기고 나머지 삭제
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            blockType: {
              inDropdown: true,
              options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
            },
            list: {
              inDropdown: true,
              options: ['unordered', 'ordered'],
            },
            textAlign: {
              inDropdown: true,
              options: ['left', 'center', 'right'],
            },
          }}
        />
      </Container>
    </>
  );
};

export default Draft;
