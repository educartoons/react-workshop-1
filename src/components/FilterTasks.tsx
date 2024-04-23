import { ChangeEvent, useEffect, useState } from "react";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";

export default function FilterTasks(){
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  useEffect(()=>{
    // call the function filter tasks here
  }, [debouncedFilter])

  return <div className="mt-4 mb-2">
    <Input type="text" name={filter} value={filter} onChange={handleChange} placeholder="Filter tasks" label={false} />
  </div>
}