import { useRef, useEffect, ReactChild, FocusEvent, useCallback } from 'react';
import s from './clickAwayListener.module.scss';

export default function ClickAwayListener({
  children,
  onAwayClick,
}: {
  children: ReactChild;
  onAwayClick: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent | FocusEvent<HTMLDivElement>) => {
      if (
        (event.relatedTarget &&
          !wrapperRef?.current?.contains(event.relatedTarget as Node)) ||
        (event.target && !wrapperRef?.current?.contains(event.target as Node))
      ) {
        onAwayClick();
      }
    },
    [onAwayClick]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={s.listener}
      ref={wrapperRef}
      onBlur={(e: FocusEvent<HTMLDivElement>) => handleClickOutside(e)}
    >
      {children}
    </div>
  );
}
