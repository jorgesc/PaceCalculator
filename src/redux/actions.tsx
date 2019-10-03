const CHANGE_SELECTED_SPORT = "CHANGE_SELECTED_SPORT";

interface IChangeSelectedSportAction {
  type: typeof CHANGE_SELECTED_SPORT;
  payload: number;
}

export const changeSelectedSportAction = (
  selection: number,
): IChangeSelectedSportAction => {
  return {type: CHANGE_SELECTED_SPORT, payload: selection};
};

export type AppActionTypes = IChangeSelectedSportAction;
