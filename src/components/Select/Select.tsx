import { useEffect, useMemo, useRef, useState } from 'react';

import { theme } from '../../theme';
import { Icon } from '../Icon';

import {
  SelectButtonWraper,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectWraper,
} from './styled';
import { SelectInterface } from './types';

export const Select = ({
  label,
  placeholder = 'Choose from the list',
  options = [],
  value,
  onChange,
}: SelectInterface) => {
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpened(false);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  const renderedLabel = useMemo(
    () => (label ? <SelectLabel>{label}</SelectLabel> : null),
    [label],
  );

  const renderedValue = useMemo(
    () => value || placeholder,
    [value, placeholder],
  );

  const renderedOptions = useMemo(
    () => (
      <SelectList $isOpened={isOpened}>
        {options.map(({ label, icon }, i) => (
          <SelectItem key={i} onClick={() => handleOptionClick(label)}>
            {icon}
            {label}
          </SelectItem>
        ))}
      </SelectList>
    ),
    [options, isOpened, handleOptionClick],
  );

  return (
    <SelectWraper ref={selectRef}>
      {renderedLabel}
      <SelectButtonWraper
        $hasValue={!!value}
        onClick={() => setIsOpened((prevState) => !prevState)}
      >
        {renderedValue}
        <Icon name="expandMore" fill={theme.colors.primary.primaryYellow} />
      </SelectButtonWraper>
      {renderedOptions}
    </SelectWraper>
  );
};
