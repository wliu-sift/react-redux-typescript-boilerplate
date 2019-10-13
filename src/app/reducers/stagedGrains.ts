import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ScoredTextModel } from 'app/models';

const initialState: RootState.StagedGrainState = [
    {
        id: 1,
        text: 'Hello world',
        score: 0.8
    },
    {
        id: 2,
        text: 'Gucci handbag',
        score: 0.3
    }
];

export const stagedGrainReducer = handleActions<RootState.StagedGrainState, ScoredTextModel>({},
    initialState
);


