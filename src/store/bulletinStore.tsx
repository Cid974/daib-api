import React from "react";

export interface IPost {
  _id: string;
  nickName: string;
  content: string;
  createdAt: string;
  __v: number;
}

interface IState {
  update: boolean;
  list: Array<IPost>;
}

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string; payload: any }) => void;
}

export const BulletinContext = React.createContext({} as IContextProps);

export const initialState = {
  update: true,
  list: [],
};

export const NEW_BULLETIN = "NEW_BULLETIN";
export const GET_BULLETINS = "GET_BULLETINS";

export function bulletinReducer(state: any, action: any) {
  switch (action.name) {
    case NEW_BULLETIN:
      return {
        ...state,
        update: action.payload.update,
      };
    case GET_BULLETINS:
      console.log(action.payload.list);
      return {
        update: action.payload.update,
        list: action.payload.list,
      };
    default:
      return initialState;
  }
}
