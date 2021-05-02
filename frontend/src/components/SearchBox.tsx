import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

interface Props {}

const SearchBox = (props: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const { push } = useHistory();

  /**
   * Search for a keyword
   */
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim()) {
      push(`/search/${keyword}`);
    } else {
      push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        data-testid="search-box"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
