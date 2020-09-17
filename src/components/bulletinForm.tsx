import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { token } from "../utils/token";

import "../style/bulletinForm.css";
import { BulletinContext, NEW_BULLETIN } from "../store/bulletinStore";

const BulletinForm = () => {
  const data = useContext(BulletinContext);
  const { dispatch } = data;
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to reset this post?")) {
      setContent("");
      setNickname("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://dauth.daios.net/v1/boards",
        {
          content: content,
          nickName: nickname,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (result.status === 200) {
        dispatch({ type: NEW_BULLETIN, payload: { update: true } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <form className="bulletinForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="bulletinForm__Entry">
          <TextField
            className="bulletinForm__Input"
            variant="outlined"
            label="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="bulletinForm__Entry">
          <TextField
            className="bulletinForm__Input"
            variant="outlined"
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={6}
          />
        </div>
        <div className="bulletinForm__Buttons">
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            type="submit"
          >
            SAVE
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={(e) => handleReset(e)}
          >
            RESET
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BulletinForm;
