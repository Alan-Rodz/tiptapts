import { Box } from '@chakra-ui/react';
import React from 'react';

import { displayCorrectFormat } from '../../util/displayCorrectFormat';

// ********************************************************************************
interface SelectionSectionProps {
  color: string;
  borderRadius: number;
  selection: any;
}

export const SelectionSection: React.FC<SelectionSectionProps> = ({ color, borderRadius, selection }) => {
  return (
    <Box borderRadius={borderRadius} bg={color} fontSize={'10'} width='100%' height='100%' position='relative'>
      <Box
        transform='translateX(-50%)'
        top='0'
        left='50%'
        position={'absolute'}
        bg={'#4ECDC4'}
        borderRadius={borderRadius}
        padding={1}
      >
        SELECTION
      </Box>

      <Box width='100%' height='100%' overflow='scroll'>
        <pre>{displayCorrectFormat(selection)}</pre>
      </Box>
    </Box>
  )
}
