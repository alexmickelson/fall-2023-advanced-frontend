import { useReducer } from 'react';


interface CommentState {
  comments: {
    bookID: string;
    comment: string;
  }[];
}

export interface CommentAction {
  type: string,
  payload: any
}

export const useCommentReducer = () => {

  const commentReducer = (state: CommentState, action: CommentAction): CommentState => {
    if (action.type == "ADD_COMMENT")
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    if (action.type == "DELETE_COMMENT")
      return {
        ...state,
        comments: state.comments.filter(
          (_comment, index) => index !== action.payload.commentIndex
        ),
      };

    return state;
  }

  const startingState: CommentState = { comments: [] };
  return useReducer(commentReducer, startingState);
}