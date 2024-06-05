import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styles from "./TextArea.module.css";

interface TextAreaProps {
  name: string;
  input_name: string;
  placeholder: string;
  onChange: (data: string, inputName: string) => void;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const textFromEditor = (event: any, editor: any) => {
    const data = editor.getData();
    props.onChange(data, props.input_name);
  };

  return (
    <div className={styles.textarea__style}>
      <span className={styles.capytal__style}>{props.name}</span>
      <div className={`${styles.textarea_box__style} black`}>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'heading',
              '|',
              'bold',
              'italic',
              '|',
              'numberedList',
              'bulletedList',
              '|',
              'indent',
              'outdent',
              '|',
            ],
          }}
          data={props.placeholder}
          onChange={textFromEditor}
        />
      </div>
    </div>
  );
};

export default TextArea;
