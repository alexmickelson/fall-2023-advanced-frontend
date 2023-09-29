// import { useReducer } from 'react';
// import { createStore } from 'redux';

// interface Comment {
//   bookID: string;
//   comment: string;
//   id: string;
// }
// export interface CommentState {
//   comments: Comment[];
// }


// export enum ACTION_TYPE {
//   ADD_COMMENT = "ADD_COMMENT",
//   DELETE_COMMENT = "DELETE_COMMENT"
// }

// export type CommentAction =
//   | {
//     type: ACTION_TYPE.ADD_COMMENT,
//     payload: Comment
//   }
//   | {
//     type: ACTION_TYPE.DELETE_COMMENT,
//     payload: { commentIndex: number }
//   }

// export const addComment =
//   (bookID: string, comment: string): CommentAction => ({
//     type: ACTION_TYPE.ADD_COMMENT,
//     payload: { bookID, comment, id: crypto.randomUUID() },
//   })


// export const deleteComment =
//   (commentIndex: number): CommentAction => ({
//     type: ACTION_TYPE.DELETE_COMMENT,
//     payload: { commentIndex },
//   })


// const commentReducer =
//   (state: CommentState = { comments: [] }, action: CommentAction) => {
//   switch (action.type) {
//     case ACTION_TYPE.ADD_COMMENT:
//       return {
//         ...state,
//         comments: [...state.comments, action.payload],
//       };
//     case ACTION_TYPE.DELETE_COMMENT:
//       return {
//         ...state,
//         comments: state.comments.filter(
//           (_comment, index) => index !== action.payload.commentIndex
//         ),
//       };
//     default:
//       return state;
//   }
// }

// export const commentStore = createStore(commentReducer);

