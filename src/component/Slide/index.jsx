import React, { Component } from "react";
import styles from "./Slide.module.css";
import images from "../../image";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: images,
    };
  }
  clickBtn = () => {
    this.setState({
      index: images[0],
    });
  };

  render() {
    const { alt, src, changeImg, nextImg } = this.props;
    return (
      <>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={src} alt={alt} />
          <button className={`${styles.btn} ${styles.btnL}`} onClick={nextImg}>
            &lt;
          </button>
          <button
            className={`${styles.btn} ${styles.btnP}`}
            onClick={changeImg}
          >
            &gt;
          </button>
        </div>
      </>
    );
  }
}

export default Slide;
