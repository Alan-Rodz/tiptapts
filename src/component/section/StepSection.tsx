import { Box } from '@chakra-ui/react';
import React from 'react';

import { displayCorrectFormat } from '../../util/displayCorrectFormat';

// ********************************************************************************
interface Props {
  color: string;
  borderRadius: number;
  steps: any;
}

export const StepSection: React.FC<Props> = ({ color, borderRadius, steps }) => {
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
        STEPS
      </Box>

      <Box width='100%' height='100%' overflow='scroll'>
        <pre>{displayCorrectFormat(steps)}</pre>
      </Box>
    </Box>
  )
}
