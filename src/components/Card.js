import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { title, tags, text, pic, linkstyle, links } = data[i];

    return (
      <animated.div
        className="card-container"
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
        }}
      >
        <animated.div
          className="card"
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans),
          }}
        >
          <div className="content-container">
            <img className="round-img" src={pic} alt="pic" />

            <h2>{title}</h2>

            {tags.length > 0 && (
              <div className="tag-container">
                {tags.map((tag, index) => (
                  <span
                    className="tag"
                    style={{ background: tag.color }}
                    key={index}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            )}

            <h5 dangerouslySetInnerHTML={{ __html: text }}></h5>

            {links.length > 0 && (
              <ul className={linkstyle}>
                {links.map((link, index) => (
                  <li>
                    <a href={link.url} target="_blank" className={link.icon}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array,
};

export default Card;
