import { ReactNode, useState } from 'react';
import s from './dropdown.module.scss';

interface IDropdown {
  children: (setIsDropdownVisible: () => void) => ReactNode;
  element: ReactNode;
}

export default function Dropdown({ children, element }: IDropdown) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const hideDropdown = () => setIsDropdownVisible(false);
  const toggleDropdown = () =>
    setIsDropdownVisible((prevState: boolean) => !prevState);

  return (
    <div className={s.dropdown}>
      <div
        className={s.dropdown__element}
        onMouseDown={toggleDropdown}
        onKeyPress={toggleDropdown}
        tabIndex={0}
        role='listbox'
      >
        {element}
      </div>
      {isDropdownVisible && children(hideDropdown)}
    </div>
  );
}
