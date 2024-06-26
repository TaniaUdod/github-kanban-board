import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Issue } from "../types/issueTypes";

export type IssueState = {
  todo: Issue[];
  inProgress: Issue[];
  done: Issue[];
  [key: string]: Issue[];
};

interface State {
  repoUrl: string;
  issues: IssueState;
}

const initialState: State = {
  repoUrl: "",
  issues: {
    todo: [],
    inProgress: [],
    done: [],
  },
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setRepoUrl: (state, action: PayloadAction<string>) => {
      state.repoUrl = action.payload;
    },
    setIssues: (state, action: PayloadAction<IssueState>) => {
      state.issues = action.payload;
    },
  },
});

export const { setRepoUrl, setIssues } = githubSlice.actions;

export const githubReducer = githubSlice.reducer;
