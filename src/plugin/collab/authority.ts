import { Node as ProsemirrorNode } from 'prosemirror-model';
import { Step } from 'prosemirror-transform';

export class Authority {
  doc: ProsemirrorNode<any> | null | undefined;
  steps:Step<any>[] | undefined;
  stepClientIDs: any;
  onNewSteps: any;
  
  constructor(doc: ProsemirrorNode<any>) {
    this.doc = doc;
    this.steps = [];
    this.stepClientIDs = [];
    this.onNewSteps = [];
  }

  receiveSteps(version: any, steps: Step<any>[] | undefined, clientID: any) {
    if (version != this.steps!.length) return

    // Apply and accumulate new steps
    steps!.forEach(step => {
      this.doc = step.apply(this.doc!).doc
      this.steps!.push(step)
      this.stepClientIDs.push(clientID)
    })
    // Signal listeners
    this.onNewSteps.forEach(function(f: Function) { f() })
  }

  stepsSince(version: any) {
    return {
      steps: this.steps!.slice(version),
      clientIDs: this.stepClientIDs.slice(version)
    }
  }
}

// export const authority = new Authority();