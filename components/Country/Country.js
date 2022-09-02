import { Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import classNames from 'classnames'
import React from 'react'
import styles from './Country.module.css'
import { countries } from '../../Helpers/help'

export const Country = ({ onChange, value }) => {
  console.log(value, 'ssssssssssssssssss')
  return (
    <div className={classNames(styles.input_block, styles.input_block_2)}>
      <Autocomplete
        onChange={(event, item) => {
          onChange(item?.label)
        }}
        value={value}
        className={styles.input}
        id="country-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        defaultValue={{ value: value ? value : '' }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
    </div>
  )
}
