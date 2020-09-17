import axios from "axios";
import { IPost } from "../store/bulletinStore";
import { token } from "./token";

export const fetchBulletins = async () => {
  try {
    const result = await axios.get("http://dauth.daios.net/v1/boards", {
      headers: {
        "x-access-token": token,
      },
    });
    if (result.status === 200) {
      console.log(result);
      const formated = result.data.data.map((item: any) => {
        const bulletin: IPost = {
          _id: item._id,
          nickName: item.nickName,
          content: item.content,
          createdAt: item.createdAt,
          __v: item.__v,
        };
        return bulletin;
      });
      return formated;
    }
  } catch (error) {
    console.log(error);
  }
};
