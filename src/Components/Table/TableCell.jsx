import React from 'react'
import s from './TableCell.module.css'

const Table = ({post}) => {
  return (
   <div className={s.table}>
       <div className={s.table__cell}>
           <div className={s.table__cell_section} style={{width:116}}>
               {post.id}
           </div>
           <div className={s.table__cell_section} style={{width:529}}>
               {post.title}
           </div>
           <div className={s.table__cell_section} style={{width:432}}>
               {post.body}
           </div>
       </div>
   </div>
  )
}

export default Table