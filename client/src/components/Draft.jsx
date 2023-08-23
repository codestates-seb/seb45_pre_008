import { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from 'draftjs-to-html';

const Container = styled.div`
  width: 100%;
`;
const Hidden = styled.div`
  display: none;
`;

const Draft = ({ handleChange, isState, setIsState }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState('');
  const updateTextDescription = async (state) => {
    await setIsState(state);
    const html = draftjsToHtml(convertToRaw(isState.getCurrentContent()));
    setHtmlString(html);
    // console.log('html :', html);
    await handleChange(html);
  };

  return (
    <>
      <Container>
        <Editor
          editorState={isState}
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
      <Hidden dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export default Draft;
