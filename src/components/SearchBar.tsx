"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mic, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`https://google.com/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white w-1/3 p-2 rounded-full flex items-center gap-x-4 px-4">
      <Search />
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="outline-none rounded-full border-none w-full"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Mic />
    </form>
  );
};

export default SearchBar;