import React from 'react';

const HeroMarqueeItem = ({ name, title, tags, mediaSrc, mediaType }) => (
  <div className="hero-marquee-item lazyloaded">
    <div className="hero-marquee-item__info">
      <div className="hero-marquee-item__name">{name}</div>
      <div className="hero-marquee-item__title">{title}</div>
      <ul className="hero-marquee-item__tags">
        {tags.map((tag, index) => (
          <li key={index} className="hero-marquee-item__tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>

    <div className="hero-marquee-item__media">
      {mediaType === 'image' ? (
        <img alt={name} src={mediaSrc} width="273" height="340" />
      ) : (
        <video
          width="273"
          height="340"
          playsInline
          className="lazypreload lazyloaded"
          autoPlay
          loop
          muted
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )}
    </div>
  </div>
);

const HeroMarquee = () => (
  <div className="hero-marquee" style={{ /* --card-count: 40; */ }}>
    <div className="hero-marquee__track">
      <div className="hero-marquee__grid">
        {/* Render HeroMarqueeItem components with data */}
        {/* Example: */}
        <HeroMarqueeItem
          name="Vladimir Gruev"
          title="Digital Designer"
          tags={['Brand', 'Design']}
          mediaSrc="path/to/your/image.jpg"
          mediaType="image"
        />
        {/* Repeat for other items */}
      </div>
    </div>
  </div>
);

export default HeroMarquee;
