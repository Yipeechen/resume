import { createActions } from 'redux-actions';

export const createRequestedActions = (requestedActions: Array<string>) => {
  const types: { [key: string]: string } = {};
  const actions: { [key: string]: <T>(payload: T) => T } = {};

  requestedActions.forEach(currentAction => {
    ['REQUEST', 'SUCCESS', 'FAILURE'].forEach(result => {
      const situation = `${currentAction}_${result}`

      types[situation] = situation;
      actions[situation] = payload => payload;
    })
  });

  return {
    types,
    actions: createActions(actions)
  };
}