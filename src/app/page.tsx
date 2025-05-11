"use client";
import { FormEvent, InputHTMLAttributes, useRef } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetch("/", {
    })
  }
  return (
      <form
        className="grid grid-cols-2 gap-2 w-96"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label htmlFor="id">id</label>
        <Input
          id="id"
          name="id"
          type="text"
          list="id_list"
        />
        <datalist id="id_list">
          <option value="id1">id1</option>
          <option value="id2">id2</option>
          <option value="id3">id3</option>
        </datalist>
        
        <label htmlFor="password">password</label>
        <Input
          name="password"
          type="password"
        />
        <button
          className="col-span-2 bg-blue-500 text-white rounded-md p-2"
          value="Login"
          type="submit"
        >
          Login
        </button>
      </form>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="border-2 border-gray-300 rounded-md p-2"
      {...props}
    />
  )

}