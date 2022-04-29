import styles from "./Main.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../redux/sagaActions";
import ImagesList from "../../components/ImagesList/ImagesList";
import Header from "../../components/Header/Header";
import ImagesCategories from "../../components/ImagesCategories/ImagesCategories";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: sagaActions.FETCH_IMAGES_SAGA });
    }, 2000);
  }, []);

  return (
    <div>
      <Header />
      <ImagesCategories />
      <ImagesList />
    </div>
  );
}

export default Main;
