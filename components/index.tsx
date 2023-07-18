import React from "react";
import { useState } from "react";
type UserProps = {
  name: string;
  email: string;
};

export default function Index({ name, email }: UserProps) {
  const [user, setuser] = useState<UserProps>({} as UserProps);
  const HandleLoggedin = () => {
    setuser({
      name,
      email,
    });
  };

  return (
    <div>
      <button onClick={HandleLoggedin}>login</button>
      <div>user name {user.name}</div>
      <div>user email {user.email}</div>
    </div>
  );
}
