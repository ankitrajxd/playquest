import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
  colorMode: string;
}

const SearchInput = ({ onSearch, colorMode }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const background = 'background="#3B3B3B"';

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          {...(colorMode === "dark" ? { background } : {})}
          ref={ref}
          borderRadius={30}
          placeholder="Search games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
