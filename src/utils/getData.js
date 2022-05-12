import axios from "axios";
export const getAllData = async () => {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/photos?client_id=KKS_XfPpDX5wGKaqdLGAt70M-pqE7i_m7a7Vxk--KrA&page=1&per_page=30&orientation=squarish"
    );
    return await response;
  } catch (error) {
    console.error(error);
  }
};

export const getCertainImg = async (query) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/${query}?client_id=KKS_XfPpDX5wGKaqdLGAt70M-pqE7i_m7a7Vxk--KrA`
    );
    return await response;
  } catch (error) {
    console.error(error);
  }
};

export const getCertainData = async (query) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=KKS_XfPpDX5wGKaqdLGAt70M-pqE7i_m7a7Vxk--KrA&page=1&per_page=30`
    );
    return await response;
  } catch (error) {
    console.error(error);
  }
};

// getCertainData("snakes").then((data) => console.log(data));
