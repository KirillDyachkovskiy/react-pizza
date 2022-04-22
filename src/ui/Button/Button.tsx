import { MouseEventHandler, ReactNode } from 'react';
import s from './button.module.scss';

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'orange' | 'black';
  htmlType?: 'button' | 'submit';
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = 'orange',
  htmlType = 'button',
}: IButton) {
  return (
    <button
      className={`${s.button} ${s[`button_type_${type}`]}`}
      type={htmlType === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
