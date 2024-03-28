import { Action } from "@reduxjs/toolkit";

export type MemberState = {
  id: string;
  name: string;
  avatar: string;
  phone: string;
};

export type MemberAction = Action<string> & { payload: MemberState };
