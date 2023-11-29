import { useState } from "react";
import { Button, Form, Input } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !message) {
      setMessageStatus(
        <div className="text-red-500">
          {"Habar yozmadiz qaytadan urinib ko'ring !"}
        </div>
      );
    } else {
      setMessageStatus("");
      toast.success(
        <div className="text-black text-[16px] font-serif font-medium">
          {" Habarimgiz Jo'natildi !"}
        </div>
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Message About ?"
          size
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">Send Message</Button>
        <div>{messageStatus}</div>
        <ToastContainer />
      </Form>
    </>
  );
};

export default Message;
