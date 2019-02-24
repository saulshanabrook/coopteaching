import React, { useState, FormEvent } from "react";
import { client, CREATE_POST } from "./client";

export default function InputCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [expectations, setExpectations] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async function(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await client.mutate({
        mutation: CREATE_POST,
        variables: {
          post: {
            topic,
            location,
            description,
            expectations,
            name,
            email,
            phone
          }
        }
      });
      console.log("Got result", res);
    } catch (error) {
      setIsSubmitting(false);
      setError(error.toString());
      return;
    }

    setIsSubmitting(false);
    setTopic("");
    setLocation("");
    setDescription("");
    setExpectations("");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={event => setTopic(event.target.value)}
        />
      </label>
      
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <label>
        Expectations:
        <input
          type="text"
          value={expectations}
          onChange={event => setExpectations(event.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
      </label>
      <input type="submit" value="Post" />
      <span>Status: {isSubmitting ? "Submitting" : error}</span>
    </form>
  );
}
