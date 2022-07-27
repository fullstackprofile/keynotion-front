import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'

import styles from './Input.module.css'

export const Input = ({
  type,
  placeholder,
  showPass,
  single,
  name,
  ...rest
}) => {
  const [show, setShow] = React.useState(false)
  if (showPass) {
    return (
      <div
        className={classnames(
          styles.input_block,
          styles.input_block_2,
          styles.input_pass
        )}
      >
        <input
          {...rest}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          className={styles.input}
          name={name}
        />
        <span className={styles.showPass_icon} onClick={() => setShow(!show)}>
          <Image
            src={show ? '/passwordShow.svg' : '/passwordUnShow.svg'}
            alt="icon"
            width={30}
            height={29}
          />
        </span>
      </div>
    )
  }
  if (single) {
    return (
      <div className={styles.input_block}>
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          name={name}
        />
      </div>
    )
  }
  return (
    <div className={classnames(styles.input_block, styles.input_block_2)}>
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        name={name}
      />
    </div>
  )
}
