import { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface Props {}

const SearchBox = (props: Props) => {
  const [keyword, setKeyword] = useState<string>("");

  return (
      <Form onSubmit={submitHandler} inline>
          <Form.Control type='text' 
          name='q' 
          onChange={(e) => setKeyword(e.target.value)} 
          placeholder="Search Products..." 
          className='mr-sm-2 ml-sm-5'>
          </Form.Control>
          <Button type='submit' 
          variant='outline-success' 
          className='p-2'>Search</Button>
      </Form>
  )

export default SearchBox;
