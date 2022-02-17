import { Box } from '@chakra-ui/react';
import React from 'react';

import { displayCorrectFormat } from '../../util/displayCorrectFormat';

// ********************************************************************************
interface Props {
  color: string;
  borderRadius: number;
  document: any;
}

export const DocumentSection: React.FC<Props> = ({ color, borderRadius, document }) => {
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
        DOCUMENT
      </Box>

      <Box width='100%' height='100%' overflow='scroll'>
        <pre>{displayCorrectFormat(document)}</pre>
      </Box>
    </Box>
  )
}
