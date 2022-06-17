
import { Button } from '@mui/material'

import styles from "./Button.module.css"


export const ButtonComp = ({title,transparent,big,onClick}) => {

  
  return (
    <>
    {
      big ? 
      <Button 
       onClick={onClick}
       type="submit"
      className={transparent ? styles.btn_see_more_2 : (big ? styles.btn_see_more_big : styles.btn_see_more)} 
      variant="contained">
        <p className={transparent && styles.btn_title}>{title}</p>
     </Button>
      :
        <Button 
        onClick={onClick}
        type="submit"
         className={transparent ? styles.btn_see_more_2 : styles.btn_see_more} 
         variant="contained">
           <p className={transparent && styles.btn_title}>{title}</p>
        </Button>
}
    </>
  )
}
