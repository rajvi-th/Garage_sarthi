/**
 * DatePicker Component
 * Reusable date picker component using MUI
 */

import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// Custom theme to override MUI's default blue colors
const datePickerTheme = createTheme({
  palette: {
    primary: {
      main: '#060C12',
    },
    error: {
      main: '#B02E0C',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused fieldset': {
            borderColor: '#060C12 !important',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#060C12 !important',
          },
        },
      },
    },
    // Override calendar popup colors
    MuiPickersDay: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center!important',
          justifyContent: 'center!important',
          textAlign: 'center!important',
          '&.Mui-selected': {
            backgroundColor: '#B02E0C !important',
            color: '#fff !important',
            display: 'flex',
            alignItems: 'center!important',
            justifyContent: 'center!important',
            '&:hover': {
              backgroundColor: '#B02E0C !important',
            },
            '&:focus': {
              backgroundColor: '#B02E0C !important',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(176, 46, 12, 0.1) !important',
          },
          '&:focus': {
            backgroundColor: 'rgba(176, 46, 12, 0.1) !important',
          },
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: {
          color: '#060C12',
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          color: '#060C12',
        },
      },
    },
  },
});

export default function DatePicker({
  value,
  onChange,
  required = false,
  error,
  disabled = false,
  className = '',
  placeholder = 'DD/MM/YYYY',
  minDate,
  maxDate,
  ...props
}) {
  return (
    <div className={`w-full bg-white rounded-xl h-[44px] flex items-center overflow-hidden px-4 ${className}`}>
      <ThemeProvider theme={datePickerTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDatePicker
            value={value ? dayjs(value) : null}
            onChange={(newValue) => {
              if (onChange) {
                onChange(newValue ? newValue.toDate() : null);
              }
            }}
            disabled={disabled}
            minDate={minDate ? dayjs(minDate) : undefined}
            maxDate={maxDate ? dayjs(maxDate) : undefined}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                variant: 'standard', // Use standard variant to avoid fieldset issues
                InputProps: {
                  disableUnderline: true, // Remove the standard bottom line
                },
                placeholder: placeholder,
                fullWidth: true,
                onKeyDown: props.onKeyDown,
                sx: {
                  '& .MuiInput-root': {
                    border: 'none !important',
                    outline: 'none !important',
                    padding: '0 !important',
                    minHeight: '44px',
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: 'inherit',
                    fontSize: '0.875rem',
                    padding: '10px 16px !important', 
                    color: '#060C12',
                    height: 'auto',
                    cursor: disabled ? 'not-allowed' : 'text',
                    '&::placeholder': {
                      color: '#060C12',
                      opacity: 0.5,
                    },
                  },
                  '& .MuiInputAdornment-root': {
                    marginRight: 'px',
                  },
                  '& .MuiIconButton-root': {
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  },
                },
              },
              actionBar: {
                actions: ['clear', 'today'],
              },
            }}
            {...props}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}
