"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  label: string;
  name: string;
  placeholder: string;
  options: IOption[];
  required?: boolean;
}

const CTSearchSelect = ({ label, name, options, placeholder }: IProps) => {
  const {
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext();
  const [open, setOpen] = useState(false);
  const [value, setValueState] = useState<string>("");

  const handleSelect = (selectedValue: string) => {
    setValueState(selectedValue);
    setValue(name, selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    setValueState("");
  }, [isSubmitSuccessful]);

  return (
    <div className="grid gap-2">
      <label htmlFor={name}>{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open ? "true" : "false"}
            className="w-[200px] justify-between"
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={`Search ${name}...`} className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleSelect(option.value)}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {errors[name] && (
        <span className="text-primary text-xs">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default CTSearchSelect;
