import NavContentBar from './NavContentBar';
import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar__container}>
        {/* <nav className={styles.navbar}>
          <ul className={styles.navbar__link__content}>
            <li className={styles.navbar__logo}>
              <svg
                height='44'
                viewBox='0 0 14 44'
                width='14'
                xmlns='http://www.w3.org/2000/svg'
                fill='var(--r-globalnav-color)'
              >
                <path d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z'></path>
              </svg>
            </li>
            <li className={styles.navbar__links}>
              <a href='#'>Store</a>
              <ul className={styles.dropdown}>
                <div className={styles.dropdown__container}>
                  <div>
                    <li>
                      <a href='#'>Shop the latest </a>
                    </li>
                    <li>
                      <a href='#'>Mac</a>
                    </li>
                    <li>
                      <a href='#'>iPad</a>
                    </li>
                    <li>
                      <a href='#'>iPhone</a>
                    </li>
                    <li>
                      <a href='#'>Accessories</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href='#'>Find a store</a>
                    </li>
                    <li>
                      <a href='#'>Order status</a>
                    </li>
                    <li>
                      <a href='#'>Apple Trade in</a>
                    </li>
                    <li>
                      <a href='#'>Financing</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href='#'>Submenu Item 1</a>
                    </li>
                    <li>
                      <a href='#'>Submenu Item 2</a>
                    </li>
                    <li>
                      <a href='#'>Submenu Item 3</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className={styles.navbar__links}>Mac</li>
            <li className={styles.navbar__links}>iPad</li>
            <li className={styles.navbar__links}>iPhone</li>
            <li className={styles.navbar__links}>Watch</li>
            <li className={styles.navbar__links}>Airpods</li>
            <li className={styles.navbar__links}>TV & Home</li>
            <li className={styles.navbar__links}>Entertainment</li>
            <li className={styles.navbar__links}>Accessories</li>
            <li className={styles.navbar__links}>Support</li>
            <li className={styles.navbar__logo}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15px'
                height='44px'
                viewBox='0 0 15 44'
                fill='var(--r-globalnav-color)'
              >
                <path d='M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z'></path>
              </svg>
            </li>
            <li className={styles.navbar__logo}>
              <svg
                height='44'
                viewBox='0 0 14 44'
                width='14'
                xmlns='http://www.w3.org/2000/svg'
                fill='var(--r-globalnav-color)'
              >
                <path d='m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z'></path>
              </svg>
            </li>
          </ul>
        </nav> */}
        <div className='navbar'>
          <a href='#store'>
            <svg
              height='44'
              viewBox='0 0 14 44'
              width='14'
              className='svg__style'
              xmlns='http://www.w3.org/2000/svg'
              fill='var(--r-globalnav-color)'
            >
              <path d='m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z'></path>
            </svg>
          </a>
          <div class='dropdown'>
            <button class='dropbtn'>
              Store
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Mac
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              iPad
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              iPhone
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Watch
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Airpods
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              TV & Home
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Entertainment
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Accessories
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <div class='dropdown'>
            <button class='dropbtn'>
              Support
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <div class='row'>
                <div class='column'>
                  <span>Shop</span>
                  <a href='#'>Shop the latest</a>
                  <a href='#'>Mac</a>
                  <a href='#'>iPad</a>
                  <a href='#'>iPhone</a>
                  <a href='#'>Apple watch</a>
                  <a href='#'>Accessories</a>
                </div>
                <div class='column2'>
                  <span>Quick links</span>
                  <a href='#'>Finding a store</a>
                  <a href='#'>Order status</a>
                  <a href='#'>Apple trade in</a>
                  <a href='#'>Financing</a>
                </div>
                <div class='column2'>
                  <span>Shop Special Store</span>
                  <a href='#'>Refurbished</a>
                  <a href='#'>Education</a>
                  <a href='#'>Business</a>
                  <a href='#'>Mertans and Miltary</a>
                  <a href='#'>Government</a>
                </div>
              </div>
            </div>
          </div>
          <a href='#search'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15px'
              height='44px'
              className='svg__style'
              viewBox='0 0 15 44'
              fill='var(--r-globalnav-color)'
            >
              <path d='M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z'></path>
            </svg>
          </a>
          <a href='#shop'>
            <svg
              height='44'
              viewBox='0 0 14 44'
              width='14'
              className='svg__style'
              xmlns='http://www.w3.org/2000/svg'
              fill='var(--r-globalnav-color)'
            >
              <path d='m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z'></path>
            </svg>
          </a>
          <a href='#menu' className='menu__icon'>
            <svg width='18' height='18' viewBox='0 0 18 18'>
              <polyline
                id='globalnav-menutrigger-bread-bottom'
                class='globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                points='2 12, 16 12'
              >
                <animate
                  id='globalnav-anim-menutrigger-bread-bottom-open'
                  attributeName='points'
                  keyTimes='0;0.5;1'
                  dur='0.24s'
                  begin='indefinite'
                  fill='freeze'
                  calcMode='spline'
                  keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
                  values=' 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5'
                ></animate>
                <animate
                  id='globalnav-anim-menutrigger-bread-bottom-close'
                  attributeName='points'
                  keyTimes='0;0.5;1'
                  dur='0.24s'
                  begin='indefinite'
                  fill='freeze'
                  calcMode='spline'
                  keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
                  values=' 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12'
                ></animate>
              </polyline>
              <polyline
                id='globalnav-menutrigger-bread-top'
                class='globalnav-menutrigger-bread globalnav-menutrigger-bread-top'
                fill='none'
                stroke='currentColor'
                stroke-width='1.2'
                stroke-linecap='round'
                stroke-linejoin='round'
                points='2 5, 16 5'
              >
                <animate
                  id='globalnav-anim-menutrigger-bread-top-open'
                  attributeName='points'
                  keyTimes='0;0.5;1'
                  dur='0.24s'
                  begin='indefinite'
                  fill='freeze'
                  calcMode='spline'
                  keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
                  values=' 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15'
                ></animate>
                <animate
                  id='globalnav-anim-menutrigger-bread-top-close'
                  attributeName='points'
                  keyTimes='0;0.5;1'
                  dur='0.24s'
                  begin='indefinite'
                  fill='freeze'
                  calcMode='spline'
                  keySplines='0.42, 0, 1, 1;0, 0, 0.58, 1'
                  values=' 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5'
                ></animate>
              </polyline>
            </svg>
          </a>
        </div>
      </div>
      <NavContentBar />
    </div>

    // <div className={styles.container}>
    //   <div className={styles.navbar__container}>
    //     <nav className={styles.navbar}>
    //       <ul className={styles.navbar__menu}>
    //         <li className={styles.navbar__item}>
    //           <a href='#'>Home</a>
    //         </li>
    //         <li className={styles.navbar__item}>
    //           <a href='#'>Services</a>
    //           <ul className={styles.dropdown__menu}>
    //             <li>
    //               <a href='#'>Service 1</a>
    //             </li>
    //             <li>
    //               <a href='#'>Service 2</a>
    //             </li>
    //             <li>
    //               <a href='#'>Service 3</a>
    //             </li>
    //           </ul>
    //         </li>

    //         <li className={styles.navbar__item}>
    //           <a href='#'>About</a>
    //         </li>
    //         <li className={styles.navbar__item}>
    //           <a href='#'>Contact</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default NavBar;
