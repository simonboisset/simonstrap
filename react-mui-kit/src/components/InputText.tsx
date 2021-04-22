import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
import { InputProps } from './InputCheckBox';

type InputTextProps = InputProps<string | number> & {
  type?: 'password' | 'number';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  onChange: ((value: string | undefined) => void) | ((value: number | undefined) => void);
} & GridItemProps;

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  error,
  label,
  type,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onChange(type === 'number' ? Number(e.target.value) || undefined : e.target.value);
  };

  return (
    <GridItem {...rest}>
      <TextField
        variant="outlined"
        label={label}
        fullWidth
        value={value}
        onChange={handleChange}
        type={type === 'number' ? undefined : type}
        error={!!error}
        helperText={error}
        InputProps={{
          startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null,
          endAdornment: endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : null
        }}
      />
    </GridItem>
  );
};
