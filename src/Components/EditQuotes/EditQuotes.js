import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditQuotes.css";
import axios from "../../axios-orders";
import Spinner from "../UI/Spinner/Spinner";
import AddEditForm from "../AddEditForm/AddEditForm";

const EditQuotes = () => {
  const [editQuotes, setEditQuotes] = useState({
    author: "",
    category: "",
    quoteText: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();

  const editChange = (event) => {
    const { name, value } = event.target;
    setEditQuotes({ ...editQuotes, [name]: value });
  };

  useEffect(() => {
    axios.get(`quotes/${category}.json`).then((res) => {
      return setEditQuotes(res.data);
    });
  }, [category]);

  const editSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.put(`quotes/${category}.json`, editQuotes);
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
      <h1>Edit quote</h1>
      <AddEditForm eventChange={editChange} eventSubmit={editSubmit} quotesValue={editQuotes}/>
    </div>
  );
};

export default EditQuotes;
