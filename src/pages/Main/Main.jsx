import styles from './Main.module.scss';
import ImagesList from '../../components/ImagesList/ImagesList';
import Header from '../../components/Header/Header';
import ImagesCategories from '../../components/ImagesCategories/ImagesCategories';

function Main() {
  return (
    <div>
      <Header />
      <ImagesCategories />
      <ImagesList />
    </div>
  );
}

export default Main;
