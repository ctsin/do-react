type UserStringKeysRequired = "name";
type UserStringKeys = "address" | "email";
type UserBooleanKeys = "graduated";

export type User = Record<UserStringKeysRequired, string> &
  Partial<
    Record<UserStringKeys, string> &
      Record<UserBooleanKeys, boolean> & { gender: "F" | "M" }
  >;

export type Users = User[];
