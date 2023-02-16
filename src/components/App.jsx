import './styles.css';
import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImagesService } from 'services/image-gallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    perPage: 12,
    query: '',
    page: 1,
    isLoading: false,
  };

  formSubmit = name => {
    const { query } = this.state;

    if (name !== query) {
      this.setState({
        images: [],
        query: name,
        page: 1,
        perPage: 12,
        isLoading: false,
      });
    }
  };

  handleAddImages = () => {
    this.setState(prevState => ({
      perPage: prevState.perPage + 12,
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { query, perPage, page } = this.state;

    if (prevState.query !== query || prevState.perPage !== perPage) {
      this.setState({ status: 'loading' });
      this.setState({ isLoading: true });
      try {
        const response = await getImagesService({
          query,
          perPage,
          page,
        });
        this.setState({ images: response, status: 'fulfilled' });
      } catch (error) {
        this.setState({ status: 'rejected' });
        throw new Error(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { totalHits, hits } = this.state.images;
    const coin = Math.floor(totalHits / this.state.perPage);

    return (
      <div className={css.App}>
        {this.state.isLoading && <Loader />}
        <Searchbar onSubmit={this.formSubmit} query={this.state.query} />
        {hits !== null && hits && <ImageGallery images={this.state.images} />}
        {coin > 1 && <Button onClick={this.handleAddImages} />}
      </div>
    );
  }
}
