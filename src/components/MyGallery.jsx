import { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class MyGallery extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        const { query } = this.props;
        fetch(`http://www.omdbapi.com/?apikey=95535619&s=${query}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    movies: data.Search || []
                });
            })
            .catch((error) => {
                console.log(error, 'Something went wrong');
            });
    }

    render() {
        const { title } = this.props;
        const { movies } = this.state;

    
        const slidesToShow = Math.min(movies.length, 8);

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: Math.min(movies.length, 6),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(movies.length, 4),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: Math.min(movies.length, 4),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: Math.min(movies.length, 3),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: Math.min(movies.length, 2),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: Math.min(movies.length, 1),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerPadding: '0'
                    }
                }
            ]
        };

        return (
            <div className="bg-dark mx-0" data-bs-theme="dark">
                <h3>{title}</h3>
                <Slider {...settings}>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div key={movie.imdbID}>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    style={{ width: '200px', height: '300px', objectFit: 'cover', margin: '20px' }}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading Movies...</p>
                    )}
                </Slider>
            </div>
        );
    }
}

export default MyGallery;
