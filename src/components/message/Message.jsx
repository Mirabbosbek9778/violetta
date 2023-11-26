import { Button, Form, Input } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  const notify = () => toast("Message sending!");

  return (
    <>
      <Form action="">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="SureName" />
        <Input type="text" placeholder="Message About ?" size />
        <Button onClick={notify}>Send Message</Button>
        <ToastContainer />
      </Form>
    </>
  );
};

export default Message;
