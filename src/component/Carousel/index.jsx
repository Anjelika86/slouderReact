import { Component } from "react";
import Slide from "../Slide";
import Description from "../Description";
import styles from "./Carousel.module.css";
import images from "../../image";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courentIndex: 0,
    };
  }
  changeImg = () => {
    const { courentIndex } = this.state;
    this.setState({
      courentIndex: courentIndex - 1,
    });
  };
  nextImg = () => {
    const { courentIndex } = this.state;
    this.setState({
      courentIndex: courentIndex + 1,
    });
  };

  render() {
    const { courentIndex } = this.state;

    return (
      <article className={styles.sladeWrapper}>
        <Slide
          src={images[courentIndex]}
          changeImg={this.changeImg}
          nextImg={this.nextImg}
        />
        <Description />
      </article>
    );
  }
}

export default Carousel;
