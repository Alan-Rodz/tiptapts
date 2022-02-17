import { Box } from '@chakra-ui/react';
import React from 'react';
import { displayCorrectFormat } from '../../util/displayCorrectFormat';

// import { GenericMetadataSectionEntry } from '../metadata/GenericMetadataSectionEntry';

// ********************************************************************************
interface Props {
  color: string;
  borderRadius: number;
  whatever: any;
}

export const MetadataSection: React.FC<Props> = ({ color, borderRadius, whatever }) => {
  return (
    <Box borderRadius={borderRadius} bg={color} fontSize={'10'} width='100%' height='100%' position='relative'>
      <Box transform='translateX(-50%)' top='0' left='50%' position={'absolute'} bg={'#4ECDC4'} borderRadius={borderRadius} padding={1}>
        METADATA
      </Box>

      <Box width='100%' height='100%' overflow='scroll'>
        <pre>{displayCorrectFormat('Currently Pending')}</pre>
      </Box>
    </Box>
  );
};
