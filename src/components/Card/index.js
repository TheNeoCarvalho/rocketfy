import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Container, Label,  } from './styles'

import BoardContext from '../Board/context'

export default function Card({ data, index }) {

  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{isDragging}, dragRef] = useDrag({
    item:{ type:'CARD', index},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      const draggedIndex = item.index
      const tragetIndex = index

      if(draggedIndex === tragetIndex){
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top)/2

      const draggedOfSet = monitor.getClientOffset()
      const draggedTop = draggedOfSet.y - targetSize.top

      if(draggedIndex < tragetIndex && draggedTop < targetCenter){
        return;
      }

      if(draggedIndex > tragetIndex && draggedTop > targetCenter){
        return;
      }

      move(draggedIndex, tragetIndex)

    }
  })

  dragRef(dropRef(ref))

  return (  
    <Container ref={ref} isDragging={isDragging}>
      <header>
       { data.labels.map(label => <Label key={label} color={label} />)} 
      </header>
      <p>{ data.content }</p>
      { data.user && <img src={ data.user } alt=""/> }
    </Container>
  );
}
