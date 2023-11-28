import { useEffect, useMemo,useRef, useState } from 'react';

import { Icon } from '../Icon';

import {
  SelectButtonWraper,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectWraper,
} from './styled';
import { SelectInterface } from '.';

export const Select = ({
  label,
  placeholder,
  options = [],
  value,
  onChange,
}: SelectInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  const renderedLabel = useMemo(
    () => (label ? <SelectLabel>{label}</SelectLabel> : null),
    [label],
  );

  const renderedValue = useMemo(
    () => (value ? value : placeholder || 'Choose from the list'),
    [value, placeholder],
  );

  const renderedOptions = useMemo(
    () => (
      <SelectList $isOpen={isOpen}>
        {options.map((option, i) => (
          <SelectItem key={i} onClick={() => handleOptionClick(option.label)}>
            {option.icon}
            {option.label}
          </SelectItem>
        ))}
      </SelectList>
    ),
    [options, isOpen, handleOptionClick],
  );

  return (
    <SelectWraper ref={selectRef}>
      {renderedLabel}
      <SelectButtonWraper
        $hasValue={!!value}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {renderedValue}
        <Icon name="expandMore" fill="#FFBA55" />
      </SelectButtonWraper>
      {renderedOptions}
    </SelectWraper>
  );
};
