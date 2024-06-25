"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { FaSearch } from "react-icons/fa";
import { useDebounceValue } from "usehooks-ts";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue[0], // FROM DISCORD HELP
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <FaSearch
        size={24}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
        onChange={handleChange}
        value={value}
        className="w-full max-w-[516px] pl-9"
        placeholder="Search Borads...✍🏻"
      />
    </div>
  );
};

export default SearchInput;
