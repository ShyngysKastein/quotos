import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../../axios-orders";
import { useNavigate } from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";

const Home = () => {
  const [home, setHome] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/quotes.json").then((response) => {
        if (response.data !== null && response.data !== undefined) {
          const quotes = Object.keys(response.data).map((id) => {
            return { ...response.data[id], id };
          });
          setHome(quotes);
        }
      });
    };
    fetchData().catch(console.error);
  }, []);

  const removeQuote = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`quotes/${id}.json`);
      setHome((prevState) => prevState.filter((el) => el.id !== id));
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : home ? (
    home.map((el) => {
      return (
        <div className="category" key={el.id}>
          <div className="element_content">
            <p className="element_text">{el.quoteText}</p>
            <p className="element_author">---  {el.author}</p>
          </div>
          <div className="category_btn">
            <button
              className="category_btn_edit"
              onClick={() => {
                navigate(`/quotes/${el.id}/edit`);
              }}
            >
              edit
            </button>
            <button
              className="category_btn_delete"
              onClick={() => removeQuote(el.id)}
            >
              delete
            </button>
          </div>
        </div>
      );
    })
  ) : null;
};

export default Home;
