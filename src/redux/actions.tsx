export interface IReduxAction {
  actionType: string;
  payload: any;
}

export const changeSelectedSportAction = (selection: number): IReduxAction => {
  return {actionType: "CHANGE_SELECTED_SPORT", payload: selection};
};
