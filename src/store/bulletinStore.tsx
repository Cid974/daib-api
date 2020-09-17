import React from "react";

export interface IPost {
  _id: string;
  nickName: string;
  content: string;
  createdAt: string;
  __v: number;
}

export interface IState {
  update: boolean;
  bulletins: Array<IPost>;
}

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string; payload: any }) => void;
}

export const BulletinContext = React.createContext({} as IContextProps);

export const initialState = {
  update: true,
  bulletins: [],
};

export const GET_BULLETINS = "GET_BULLETINS";
export const ADD_BULLETIN = "ADD_BULLETIN";

export function bulletinReducer(state: any, action: any) {
  switch (action.type) {
    case GET_BULLETINS:
      return {
        ...state,
        update: action.payload.update,
        bulletins: action.payload.bulletins,
      };
    case ADD_BULLETIN:
      return {
        ...state,
        update: action.payload.update,
      };
    default:
      return initialState;
  }
}
