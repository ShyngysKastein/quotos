import React from "react";
import "./AddEditForm.css";

const AddEditForm = ({ eventSubmit, quotesValue, eventChange }) => {
  return (
    <form onSubmit={eventSubmit}>
      <div>
        <select
          name="category"
          value={quotesValue.category}
          onChange={eventChange}
        >
          <option value="">Выберите категорию:</option>
          <option value="star-wars">Star Wars</option>
          <option value="famous-people">Famous People</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivation">Motivation</option>
        </select>
        <p>
          <b>Author:</b>
        </p>
        <input
          type="text"
          name="author"
          value={quotesValue.author}
          onChange={eventChange}
          placeholder="Author quote"
          className="input_add"
        />
      </div>
      <div>
        <p>
          <b>Quote text:</b>
        </p>
        <textarea
          type="text"
          name="quoteText"
          value={quotesValue.quoteText}
          onChange={eventChange}
          placeholder="Text quote"
          className="textarea_add"
        />
      </div>
      <button className="addBtn" type="submit">
        Save
      </button>
    </form>
  );
};

export default AddEditForm;
