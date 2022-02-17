import { Grid, GridItem } from '@chakra-ui/react';

import { TipTapEditor } from './component/TipTapEditor';

// ********************************************************************************
const BORDER_RADIUS = 15;
export const GLOBAL_COLOR = '#EAF2EF';

// ********************************************************************************
function App() {
  return (
    <Grid h='100vh' templateRows='repeat(10, 1fr)' templateColumns='repeat(10, 1fr)' gap={1}> {/* // Make a 10x10 Grid */}

      <GridItem overflowX={'scroll'} overflowY={'scroll'} gridAutoFlow={'column'} rowSpan={7} colSpan={8} bg={GLOBAL_COLOR} borderRadius={BORDER_RADIUS}> {/* Spans 7 rows, 8 columns, Playground Component */}
        <TipTapEditor/>
      </GridItem>

      <GridItem rowSpan={10} colSpan={2} colStart={9} mb={2}> {/* Spans 10 rows, 2 columns, starts at column 9, this is the Metadata Area*/}
        {/* <MetadataSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} whatever={editorState.tr} /> */}
      </GridItem>

      <GridItem rowSpan={3} colSpan={2} rowStart={8} colStart={1} mb={2}> {/* Spans 3 rows, 2 columns, starts at row 8, column 1, this is the Selection Area*/}
        {/* <SelectionSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} selection={editorState.tr.selection} /> */}
      </GridItem>

      <GridItem rowSpan={3} colSpan={3} rowStart={8} colStart={3} mb={2}> {/* Spans 3 rows, 3 columns, starts at row 8, column 3, this is the Operations area */}
        {/* <StepSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} steps={steps} /> */}
      </GridItem>

      <GridItem rowSpan={3} colSpan={3} rowStart={8} colStart={6} mb={2}> {/* Spans 3 rows, 3 columns, starts at row 8, column 6, this is the Document Area */}
        {/* <DocumentSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} document={editorState.tr.doc} /> */}
      </GridItem>
    </Grid>  );
}

export default App;
