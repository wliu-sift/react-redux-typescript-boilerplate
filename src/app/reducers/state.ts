import { TodoModel, ScoredTextModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  stagedGrains: RootState.StagedGrainState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type StagedGrainState = ScoredTextModel[];
}
