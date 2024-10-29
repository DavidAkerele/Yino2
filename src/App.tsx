// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';

import './App.css';
import { useRef, useState } from 'react';
import { Spotify } from 'react-spotify-embed';
import { SpotifyEmbed } from 'spotify-embed';

function App() {
  const navItems = [
    {
      id: 'home',
      name: 'Home',
    },
    {
      id: 'about',
      name: 'About',
    },
    {
      id: 'music',
      name: 'Music',
    },
    {
      id: 'writing',
      name: 'Writing',
    },
    {
      id: 'photography',
      name: 'Photography',
    },
    {
      id: 'contact',
      name: 'Contact',
    },
  ];

  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // const musicArray = []
  return (
    <>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                swiperRef.current?.swiper.slideTo(navItems.indexOf(item));
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        ref={swiperRef}
        onActiveIndexChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
          thresholdDelta: 10, //this solves the multiple slide swipe on hard mousewheel scroll
          thresholdTime: 500,
        }}
        keyboard={true}
        longSwipes={false}
        speed={600}
        // onScroll={(swiper) => {
        //   console.log(swiper);
        // }}
        modules={[Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <div id='home' className='slide'>
            <div className='home-left'></div>
            <div className='home-right'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='about' className='slide'>
            <div className='about-left'></div>
            <div className='about-right'>
              <img src='/image.png' alt='Person' className='foreground' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='music' className='slide'>
            <div className='max-'>
              <div className='music-grid-container'>
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index} className='music-grid-item'>
                    {/* <iframe
                      src='https://open.spotify.com/embed/track/6jIpfTmCaebJyQxfrZb749?utm_source=generator'
                      width='100%'
                      height='352'
                      loading='lazy'
                      allow='encrypted-media'
                    ></iframe> */}
                    <SpotifyEmbed src='https://open.spotify.com/track/3l9VCXMSoS1KBRhkCU5zuO?si=145fc4e3de1b4207' />
                  </div>
                ))}
              </div>
              <div className='music-right'>
                <div className='spotify-item'></div>

                <div className='lets-talk-button'></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='writing' className='slide'>
            <h3>Writing</h3>

            <div className='writing-items'>
              <div className='writing-item'></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='photography' className='slide'>
            <h3>PHOTOGRAPHY</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='contact' className='slide'>
            <div className='about-left'></div>
            <div className='about-right'>
              <img src='/image.png' alt='Person' className='foreground' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
