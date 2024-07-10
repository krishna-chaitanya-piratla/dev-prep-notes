import React, { FC, ReactNode, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor } from 'react-dnd';
import { Content } from '../types/Page';
import { ItemTypes } from '../types/dndTypes';
import { DraggableBlockWrapper, DragHandle } from '../styles/DraggableBlock';

interface DraggableBlockProps {
  index: number;
  moveBlock: (dragIndex: number, hoverIndex: number) => void;
  content: Content; // Individual content block
  children: ReactNode;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DraggableBlock: FC<DraggableBlockProps> = ({ index, moveBlock, content, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.BLOCK,
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.BLOCK,
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));
  preview(ref);

  return (
    <DraggableBlockWrapper ref={ref} isDragging={isDragging}>
      <DragHandle ref={drag} />
      {children}
    </DraggableBlockWrapper>
  );
};

export default DraggableBlock;
