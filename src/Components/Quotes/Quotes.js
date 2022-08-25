import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Quotes.css";
import axios from "../../axios-orders";
import Home from "../Home/Home";
import Spinner from "../UI/Spinner/Spinner";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();
  if (category === "all") {
    navigate(<Home />);
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/quotes.json?orderBy="category"&equalTo="${category}"`)
        .then((res) => {
          if (res.status === 200 || res.data) {
            const quotes = Object.keys(res.data).map((id) => {
              return { ...res.data[id], id };
            });
            setQuotes(quotes);
          }
        });
    };
    fetchData().catch(console.error);
  }, [category]);

  const removeQuote = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`quotes/${id}.json`);
      setQuotes((prevState) => prevState.filter((el) => el.id !== id));
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : quotes ? (
    quotes.map((el) => {
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
  ) : (
    <div>Отсутствует запись</div>
  );
};

export default Quotes;
