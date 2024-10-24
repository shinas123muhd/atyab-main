import http from "../../httpService";
import { REMOVE_CATEGORY, UPLOAD_CATEGORY } from "../../enpoint";

export const uploadCategory = async (image) => {
  const { data } = await http.post(
    UPLOAD_CATEGORY,
    { imageFiles: image },
    {
      headers: {
        clientID: "1010002",
        imageClassification: "products",
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const removeCategory = async ({ org_url, thumb_url }) => {
  const { data } = await http.delete(REMOVE_CATEGORY, {
    data: {
      fileNames: [org_url, thumb_url],
    },
    headers: {
      clientID: "1010002",
      imageClassification: "products",
      "Content-Type": "application/json",
    },
  });
  return data;
};
