// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

import './App.css';
import { useRef, useState } from 'react';
import { FaMusic, FaSnapchatGhost } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

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

  const writingArray = [
    {
      title: 'Writing Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.',
    },
    {
      title: 'Writing Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.',
    },
    {
      title: 'Writing Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.',
    },
    {
      title: 'Writing Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.',
    },
    {
      title: 'Writing Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.',
    },
  ];

  const images = [
    'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2449605/pexels-photo-2449605.png?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const thingsIAm = [
    {
      title: 'Musician',
      description:
        'I started playing the piano at the age of 10 and have since learned to play the guitar, drums, and violin. I have also learned to sing and produce music.',
    },
    {
      title: 'Writer',
      description:
        'I have written several poems, short stories, and essays that have been published in various magazines and newspapers.',
    },
    {
      title: 'Photographer',
      description:
        'I have been taking pictures since I was 12 and have since developed a keen eye for detail and composition.',
    },
    {
      title: 'Designer',
      description:
        'I have designed several websites, logos, and posters for various clients and have received positive feedback for my work.',
    },
    {
      title: 'Photographer',
      description:
        'I have been taking pictures since I was 12 and have since developed a keen eye for detail and composition.',
    },
    {
      title: 'Designer',
      description:
        'I have designed several websites, logos, and posters for various clients and have received positive feedback for my work.',
    },
  ];

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
              className={activeIndex === navItems.indexOf(item) ? 'active' : ''}
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
            <div className='home-left flex flex-col justify-center items-center'>
              <h1 className='text-white text-8xl font-bold italic mb-12'>
                YINOLUU
              </h1>
              <p className='text-white text-xl mb-8'>
                I'm a{' '}
                <span className='text-[#b27d4a]'>
                  Multi-Disciplinary Artist
                </span>
                ,<br />
                and an all-round{' '}
                <span className='text-[#b27d4a]'>Creative Consultant</span>
              </p>
              <button className='bg-[#f6f1ee] text-[#b27d4a] px-8 py-3 my-8 rounded-full font-medium hover:bg-[#b27d4a] hover:text-white transition-all'>
                GET IN TOUCH!
              </button>

              <div className='flex mx-auto gap-2 text-white'>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <BsTwitter size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <BsInstagram size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <FaSnapchatGhost size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <FaMusic size={30} />
                </div>
              </div>
              {/* <div className='flex gap-6 mt-8'>
                <a
                  href='#'
                  className='text-white hover:text-[#b27d4a] transition-all'
                >
                  <i className='fab fa-twitter text-2xl'></i>
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#b27d4a] transition-all'
                >
                  <i className='fab fa-instagram text-2xl'></i>
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#b27d4a] transition-all'
                >
                  <i className='fab fa-snapchat text-2xl'></i>
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#b27d4a] transition-all'
                >
                  <i className='fab fa-facebook text-2xl'></i>
                </a>
              </div> */}
            </div>
            <div className='home-right'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='about' className='slide '>
            <div className='about-left flex flex-col justify-center px-12'>
              <h2 className='text-white font-semibold'>ABOUT ME ...</h2>
              <p className='text-white mt-4'>
                I was born and raised in Lagos, Nigeria to a family that
                appreciated all facets of the arts and so I dabbled in most of
                them as a child. By the age of 10, I had begun to write, draw,
                paint, play instruments, play sports, act, and even design
                different things. As I grew older, those interests grew with me
                and I deepened my knowledge, passion, and expertise by constant
                learning and practice.
              </p>

              <h2 className='text-white font-semibold mt-8'>I'M A ...</h2>

              <div className='grid grid-cols-2 gap-8 mt-4'>
                {thingsIAm.map((item, index) => (
                  <div key={index} className='bg-white/10 p-6 rounded-lg'>
                    <h3 className='text-white font-medium text-xl mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-white'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='about-right'>
              <img src='/image.png' alt='Person' className='foreground' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='music' className='slide py-20'>
            <h2 className='text-[#4a7cb2] w-[90%] mx-auto mb-8 text-xl font-medium'>
              MUSIC
            </h2>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-8'>
              <div className='music-grid-container justify-evenly gap-8'>
                {new Array(10).fill(0).map((_, index) => (
                  <div key={index} className='music-grid-item'>
                    <iframe
                      src='https://open.spotify.com/embed/track/3l9VCXMSoS1KBRhkCU5zuO?si=145fc4e3de1b4207'
                      width='100%'
                      height='352'
                      loading='lazy'
                      allow='encrypted-media'
                    ></iframe>
                    {/* <SpotifyEmbed
                      src='https://open.spotify.com/track/3l9VCXMSoS1KBRhkCU5zuO?si=145fc4e3de1b4207'
                      width={'70%'}
                    /> */}
                  </div>
                ))}
              </div>
              <div className='music-right flex flex-col gap-6'>
                <iframe
                  src='https://open.spotify.com/embed/album/6bPpXqJRpjwy0hLyUGtzYc?utm_source=generator'
                  width='100%'
                  height='500'
                  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                  loading='lazy'
                ></iframe>

                <div className='lets-talk-button font-bold mt-4'>
                  Let's Talk Music
                </div>

                <div className='flex mx-auto gap-2 text-white'>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <BsTwitter size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <BsInstagram size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <FaSnapchatGhost size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <FaMusic size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='writing' className='slide py-20'>
            <div className='w-[90%] mx-auto'>
              <h2 className='text-xl text-[#9d5a4d] mb-32'>Writing</h2>
              <Swiper
                direction='horizontal'
                slidesPerView={3}
                spaceBetween={30}
                modules={[Navigation, Mousewheel, Keyboard]}
                mousewheel={{
                  releaseOnEdges: true,
                  forceToAxis: true,
                  thresholdDelta: 10,
                  thresholdTime: 500,
                }}
                keyboard={true}
                navigation={true}
                className='writing-swiper'
              >
                {writingArray.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='writing-item text-center p-7 flex flex-col '>
                      <h3 className='text-xl font-semibold text-white mb-4'>
                        {item.title}
                      </h3>
                      <p className='text-white'>{item.content}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='lets-talk-button font-bold mt-6'>
                Let's Talk Writing
              </div>

              <div className='flex justify-center mt-8 gap-2 text-white'>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <BsTwitter size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <BsInstagram size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <FaSnapchatGhost size={30} />
                </div>
                <div className='hover:text-[#b27d4a] transition-all'>
                  <FaMusic size={30} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='photography' className='slide py-20'>
            <div className='w-[90%] mx-auto'>
              <h2 className='text-xl text-white mb-4'>PHOTOGRAPHY</h2>

              <Swiper
                direction='horizontal'
                slidesPerView={2}
                spaceBetween={30}
                modules={[Navigation, Mousewheel, Keyboard]}
                mousewheel={{
                  releaseOnEdges: true,
                  forceToAxis: true,
                  thresholdDelta: 10,
                  thresholdTime: 500,
                }}
                keyboard={true}
                navigation={true}
                className='photos-swiper'
              >
                {images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img className='photo' src={item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className='flex gap-10 justify-center'>
                <div className='lets-talk-button font-bold mt-6 !mx-0'>
                  Let's Talk Photography
                </div>

                <div className='flex justify-center mt-8 gap-2 text-white'>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <BsTwitter size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <BsInstagram size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <FaSnapchatGhost size={30} />
                  </div>
                  <div className='hover:text-[#b27d4a] transition-all'>
                    <FaMusic size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id='contact' className='slide'>
            <div className='contact-left flex flex-col items-center justify-center text-center text-white'>
              <h1 className='text-5xl font-semibold mb-12'>
                I'd love to hear from you!
              </h1>
              <h2 className='text-2xl font-semibold mb-8'>LET'S GET SOCIAL!</h2>
              <div className='flex gap-6 mb-12'>
                <BsTwitter
                  size={24}
                  className='hover:text-[#b27d4a] transition-all cursor-pointer'
                />
                <BsInstagram
                  size={24}
                  className='hover:text-[#b27d4a] transition-all cursor-pointer'
                />
                <FaSnapchatGhost
                  size={24}
                  className='hover:text-[#b27d4a] transition-all cursor-pointer'
                />
                <FaMusic
                  size={24}
                  className='hover:text-[#b27d4a] transition-all cursor-pointer'
                />
              </div>
              <h2 className='text-2xl font-semibold mb-6'>
                SO MANY E-MAIL ADDRESSES...
              </h2>
              <div className='flex flex-col gap-2'>
                <p className='hover:text-[#b27d4a] transition-all cursor-pointer'>
                  yinoluu@yinoluu.com
                </p>
                <p className='hover:text-[#b27d4a] transition-all cursor-pointer'>
                  kiishi@yinoluu.com
                </p>
                <p className='hover:text-[#b27d4a] transition-all cursor-pointer'>
                  music@yinoluu.com
                </p>
                <p className='hover:text-[#b27d4a] transition-all cursor-pointer'>
                  writing@yinoluu.com
                </p>
                <p className='hover:text-[#b27d4a] transition-all cursor-pointer'>
                  photography@yinoluu.com
                </p>
              </div>
            </div>
            <div className='contact-right'>
              <img src='/image.png' alt='Person' className='foreground' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
