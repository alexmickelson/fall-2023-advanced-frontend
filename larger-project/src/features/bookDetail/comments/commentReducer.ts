import { useReducer } from 'react';


export enum COMMENT_ACTION {
  ADD_COMMENT = "ADD_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT"
}

interface Comment {
  bookID: string;
  comment: string;
}

export type CommentAction = 
  | { type: COMMENT_ACTION.ADD_COMMENT, payload: { bookID: string, comment: string } }
  | { type: COMMENT_ACTION.DELETE_COMMENT, payload: { commentIndex: number } }

export const commentReducer = (state: CommentState, action: CommentAction): CommentState => {
  switch (action.type) {
    case COMMENT_ACTION.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case COMMENT_ACTION.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (_: Comment, index: number) => index !== action.payload.commentIndex
        ),
      };
    default:
      return state;
  }
};


interface CommentState {
  comments: Comment[];
}

export const useCommentReducer = () => {
  return useReducer(commentReducer, { comments: [] });
}