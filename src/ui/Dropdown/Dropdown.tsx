import { ReactNode, useState } from 'react';
import s from './dropdown.module.scss';

interface IDropdown {
  children: (setIsDropdownVisible: (value: boolean) => void) => ReactNode;
  element: ReactNode;
}

export default function Dropdown({ children, element }: IDropdown) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <div className={s.dropdown}>
      <div
        className={s.dropdown__element}
        onMouseDown={() => setIsDropdownVisible(!isDropdownVisible)}
        onKeyPress={() => setIsDropdownVisible(!isDropdownVisible)}
        tabIndex={0}
        role='listbox'
      >
        {element}
      </div>
      {isDropdownVisible && children(setIsDropdownVisible)}
    </div>
  );
}
