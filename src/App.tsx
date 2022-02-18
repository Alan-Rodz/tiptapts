import { Grid, GridItem } from '@chakra-ui/react';
import { EditorContent, useEditor } from '@tiptap/react';
import { Editor } from '@tiptap/core'; /*import from tiptap/core instead of tiptap/react to prevent type error*/
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

import { DocumentSection } from './component/section/DocumentSection';
import { MetadataSection } from './component/section/MetadataSection';
import { SelectionSection } from './component/section/SelectionSection';
import { StepSection } from './component/section/StepSection';
import { Authority } from './plugin/collab/authority';
import { MenuBar } from './component/MenuBar';
import { collab, getVersion, receiveTransaction, sendableSteps } from 'prosemirror-collab';

// ********************************************************************************
const BORDER_RADIUS = 15;
export const GLOBAL_COLOR = '#EAF2EF';

// ********************************************************************************
// ... Pre Configuration ..........................................................
const initialContent = '<p>Type...</p>';
let isPluginRegistered = 0;
function App() {

  // ... States ...................................................................
  const [steps, setSteps] = useState<any>();
  
  // ... Setup ...................................................................
  const editor = useEditor({ extensions: [ StarterKit ], content: initialContent });

  if (editor && isPluginRegistered === 0) {
    isPluginRegistered = 1; /*only register the plugin once*/
    const authority = new Authority(editor?.state.doc!);
    editor?.registerPlugin(collab({version: authority.steps?.length}) );

    editor!.view.props.dispatchTransaction= (transaction) => {
      const newState = editor!.view.state.apply(transaction);
      editor!.view.updateState(newState);

      const sendable = sendableSteps(newState);
      if (sendable) {
        authority.receiveSteps(sendable.version, sendable.steps, sendable.clientID)
      }
    }

    authority.onNewSteps.push(function() {
console.log('App', 'onNewSteps');
      const newData = authority.stepsSince(getVersion(editor!.view.state));
      editor!.view.dispatch(receiveTransaction(editor!.view.state, newData.steps, newData.clientIDs));
    });
  }

  // ... Rendering Logic ..........................................................
  useEffect(() => {
    const handleUpdate = ({editor, transaction}: { editor: Editor; transaction: any; }) => {
      setSteps(transaction.steps);
    };
    editor?.on('update', handleUpdate);
    return () => {editor?.off('update', handleUpdate); };
  }, [editor])

  // ... Visuals .................................................................
  return (
    <Grid h='100vh' templateRows='repeat(10, 1fr)' templateColumns='repeat(10, 1fr)' gap={1}> {/* // Make a 10x10 Grid */}

      <GridItem overflowX={'scroll'} overflowY={'scroll'} gridAutoFlow={'column'} rowSpan={7} colSpan={8} bg={GLOBAL_COLOR} borderRadius={BORDER_RADIUS}> {/* Spans 7 rows, 8 columns, Playground Component */}
        <MenuBar editor={editor!} />
        <EditorContent editor={editor} />
      </GridItem>

      <GridItem rowSpan={10} colSpan={2} colStart={9} mb={2}> {/* Spans 10 rows, 2 columns, starts at column 9, this is the Metadata Area*/}
        <MetadataSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} whatever={editor?.getJSON()} />
      </GridItem>

      <GridItem rowSpan={3} colSpan={2} rowStart={8} colStart={1} mb={2}> {/* Spans 3 rows, 2 columns, starts at row 8, column 1, this is the Selection Area*/}
        <SelectionSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} selection={editor?.state.selection} />
      </GridItem>

      <GridItem rowSpan={3} colSpan={3} rowStart={8} colStart={3} mb={2}> {/* Spans 3 rows, 3 columns, starts at row 8, column 3, this is the Operations area */}
        <StepSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} steps={steps} />
      </GridItem>

      <GridItem rowSpan={3} colSpan={3} rowStart={8} colStart={6} mb={2}> {/* Spans 3 rows, 3 columns, starts at row 8, column 6, this is the Document Area */}
        <DocumentSection color={GLOBAL_COLOR} borderRadius={BORDER_RADIUS} document={editor?.state.doc} />
      </GridItem>
    </Grid>  );
}

export default App;
