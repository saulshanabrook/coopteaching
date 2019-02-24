import React from "react";

export type DisplayCardProps = {
  topic: string;
  location: string;
  description: string;
  expectations: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};
export default function DisplayCard({
  topic,
  location,
  description,
  expectations,
  name,
  email,
  phone,
  createdAt
}: DisplayCardProps) {
  return (
    <div>
      <p>{topic}</p>
      <p>{location}</p>
      <p>{description}</p>
      <p>{expectations}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{createdAt}</p>
    </div>
  );
}
