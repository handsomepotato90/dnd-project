import React, { useReducer, useEffect, ChangeEvent } from 'react';
import { validate } from '../util/validators';
import styles from './Input.module.css';

interface Validator {
  type: string;
  val?: number | string;
}

interface InputProps {
  id: string;
  initialValue?: string;
  initialValid?: boolean;
  element: 'input' | 'textarea';
  type?: string;
  placeholder?: string;
  rows?: number;
  label: string;
  notRequired?: boolean;
  validators?: Validator[];
  onInput: (id: string, value: string, isValid: boolean) => void;
  errorText: string|null;
}

interface InputState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

type InputAction =
  | { type: 'CHANGE'; val: string; validators: Validator[] }
  | { type: 'TOUCH' };

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<InputProps> = ({
  id,
  initialValue = '',
  initialValid = false,
  element,
  type,
  placeholder,
  rows = 3,
  label,
  notRequired,
  validators,
  onInput,
  errorText,
}: InputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isTouched: false,
    isValid: initialValid,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: validators || [],
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const inputElement =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={placeholder && styles.input_general__style}>
      <label htmlFor={id}>
        {label}
        {!notRequired && placeholder && <span className={styles.required_star__style}>*</span>}
      </label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p className={styles.error__style}>{errorText}</p>}
    </div>
  );
};

export default Input;
