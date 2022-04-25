import { MouseEventHandler, ReactNode, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './button.module.scss';

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  path?: string;
  type?: 'orange' | 'black';
  htmlType?: 'button' | 'submit';
}

export default function Button({
  children,
  disabled = false,
  onClick,
  path,
  type = 'orange',
  htmlType = 'button',
}: IButton) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (path) {
      navigate(path);
    }
  };

  return (
    <button
      className={`${s.button} ${s[`button_type_${type}`]}`}
      type={htmlType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
