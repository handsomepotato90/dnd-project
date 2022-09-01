import styles from "./TextArea.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function TextArea(props) {
  const textFromEditor = (event, editor) => {
    const data = editor.getData();
    props.onChange(data,props.input_name)
  };
  return (
    <div className={styles.textarea__style}>
      <span className={styles.capytal__style}>{props.name}</span>
      <CKEditor className={styles.textarea_box__style}
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
      ></CKEditor>
    </div>
  );
}
