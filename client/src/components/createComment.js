import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useCommentsUpdateContext } from "./commentsProvider";

export default function CreateComment() {

  const addCommentChange = useCommentsUpdateContext();

  const [form, setForm] = useState({
    name: "",
    commentContent: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newComment = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", commentContent: "" });
    navigate("/");
    addCommentChange();
  }

  // This following section will display the form that takes the input from the user.
  return (
    <section>
      <h3>Share your opinion about this website.</h3>
      <form onSubmit={onSubmit} style={{
          "display": "flex",
          "flexDirection": "column",
          "gap": "0.3em",
          "fontSize": "1.2em"
        }}>
        <section className="form__container" >
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </section>
        <section className="form__container">
          <label htmlFor="commentContent">Your comment: </label>
          <input
            type="text"
            className="form-control"
            id="commentContent"
            value={form.commentContent}
            onChange={(e) => updateForm({ commentContent: e.target.value })}
          />
        </section>
        <section className="form__container">
          <input
            type="submit"
            value="Post a Comment"
            className="submit-button"
          />
        </section>
      </form>
    </section>
  );
}
