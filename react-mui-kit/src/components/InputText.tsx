import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { GridItem, GridItemProps } from './GridItem';

type InputTextProps = Omit<InputProps<string | number>, 'onChange'> & {
  label?: string;
  type?: 'password' | 'number';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  onChange: (value: any) => void;
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
