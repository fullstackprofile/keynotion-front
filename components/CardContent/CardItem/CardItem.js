import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import AppContext from '../../AppContext/AppContext'
import { SmallButton } from '../../Button/SmallButton'


import styles from "./CardItem.module.css"

export const CardItem = ({id,type,other_type,price,count,currency,title_}) => {

    const context = useContext(AppContext)
    

    const router =useRouter()

    

   

    // const getind=()=>{
    //     let newArr = [...context.session.itemsss]
    //     let index=newArr.findIndex(el => el.id === id)
    //     newArr[index].count=newArr[index].count+1
        
    // }

    const removeItem = () =>{
        context.setSession( prev => {
        let newArr = [...context.session.itemsss]
        let index=newArr.findIndex(el => el.id === id)
        newArr.splice(index,1)

        return {
            itemsss:newArr, 
            count: newArr.length
        }
        })
    }

    const plusItem = () =>{
        context.setSession( prev => {
        let newArr = [...context.session.itemsss]
        let index=newArr.findIndex(el => el.id === id)
        newArr[index].count=newArr[index].count+1

        return {
            itemsss:newArr, 
            count: newArr.length
        }
        })
    }

    const minusItem = () =>{
        context.setSession( prev => {
        let newArr = [...context.session.itemsss]
        let index=newArr.findIndex(el => el.id === id)
        newArr[index].count=newArr[index].count-1

        return {
            itemsss:newArr, 
            count: newArr.length
        }
        })
    }

    const CheckOut = () =>{
        context.setSession( prev => {
        let newArr = [...context.session.itemsss]
        let index_=newArr.findIndex(el => el.id === id)
        
        return {
            itemsss:newArr, 
            count: newArr.length,
            index : index_
        }
       
        })
        router.push('/CheckOut')
    }
    


  return (
    <div className={styles.card_item}>
      <div className={styles.item_name_block}>
          <div className={styles.remove} onClick={removeItem}>
               <Image src="/remove.png" width={32} height={32} />
          </div>
            <p className={styles.item_name}>Ticket: {} {title_} - {type}{other_type}</p>
            <div>
                <SmallButton  transparent title="Check Out" onClick={CheckOut}/>
            </div>
      </div>
        <div className={styles.item_right}>
            <div className={styles.item_quantity_block}>
                <button className={styles.minus} disabled={count<=1} onClick={minusItem} ><p className={styles.icon}>-</p></button>
                   <div className={styles.count}><p className={styles.countt}>{count}</p></div>
                   <button className={styles.plus} onClick={plusItem}><p className={styles.icon}>+</p></button>
                </div>
               
            <div className={styles.item_price_block}>
                <p className={styles.item_price}>{currency}{price}</p>
        </div>
      </div>
    </div>
  )
}
