import React, { useState } from "react";
import "./AddQuotes.css";
import axios from "../../axios-orders";
import { useNavigate } from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";
import AddEditForm from "../AddEditForm/AddEditForm";

const AddQuotes = () => {
  const [AddQuotes, setAddQuotes] = useState({
    author: "",
    category: "",
    quoteText: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addChange = (event) => {
    const { name, value } = event.target;
    setAddQuotes({ ...AddQuotes, [name]: value });
  };

  const addSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.post("quotes.json", AddQuotes);
    } finally {
      navigate({
        pathname: "/",
      });
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="add">
      <h1>Submit new quote</h1>
      <AddEditForm
        quotesValue={AddQuotes}
        eventChange={addChange}
        eventSubmit={addSubmit}
      />
    </div>
  );
};

export default AddQuotes;
