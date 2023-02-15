import './styles.css';
// import { Audio } from 'react-loader-spinner';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImagesService } from 'services/image-gallery';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    perPage: 12,
    currentPage: 1,
    query: '',
  };

  formSubmit = name => {
    console.log(name);
    const { query } = this.state;
    console.log(query);
    // if (name === query || name === '') {
    //   alert('Write new date for search');
    // }
    if (name !== query) {
      this.setState({
        images: [],
        query: name,
        perPage: 12,
        currentPage: 1,
      });
      console.log(this.state);
    }
  };

  async componentDidUpdate(_, prevState) {
    console.log(this.state);
    this.setState({ status: 'loading' });

    const { query, perPage, currentPage } = this.state;
    if (prevState.query !== query || prevState.currentPage !== currentPage) {
      console.log(query);
      console.log(this.state);
      try {
        console.log(this.state);
        const response = await getImagesService({
          query,
          perPage,
          currentPage,
        });
        console.log(response);
        this.setState({ images: response, status: 'fulfilled' });
      } catch (error) {
        this.setState({ status: 'rejected' });
        throw new Error(error.message);
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} query={this.state.query} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
