declare module '@ckeditor/ckeditor5-react' {
    import { ComponentType } from 'react';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  
    interface CKEditorProps {
      editor: typeof ClassicEditor;
      data?: string;
      config?: Record<string, any>;
      disabled?: boolean;
      onInit?: (editor: ClassicEditor) => void;
      onChange?: (event: Event, editor: ClassicEditor) => void;
      onBlur?: (event: Event, editor: ClassicEditor) => void;
      onFocus?: (event: Event, editor: ClassicEditor) => void;
    }
  
    export const CKEditor: ComponentType<CKEditorProps>;
  }
  
  declare module '@ckeditor/ckeditor5-build-classic' {
    class ClassicEditor {
      static create(element: HTMLElement, config?: Record<string, any>): Promise<ClassicEditor>;
      getData(): string;
      setData(data: string): void;
      destroy(): Promise<void>;
      static defaultConfig: Record<string, any>;
    }
  
    export = ClassicEditor;
  }