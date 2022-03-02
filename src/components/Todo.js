import { db } from '../firebase'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import React from 'react'


const Todo = ({ arr }) => {
  return (
    <List className='todo_list'>
        <ListItem>
            <ListItemAvatar />
            <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
        </ListItem>
        <DeleteForeverIcon onClick={() => {db.collection('todos').doc(arr.id).delete()}} />
    </List>
  )
}

export default Todo