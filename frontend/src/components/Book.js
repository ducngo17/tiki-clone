import React from 'react';
const Book = ({ book }) => {
  return (
    <div className="book">
      <a id="product-item">
        <span className="style-item">
          <div style={{ position: 'relative' }}>
            <div className='book-thumbnail'>
              <div className='image-wrapper'>
                <img className='image' src={book.thumbnail} alt="" />
              </div>
            </div>
            <div className='book-frame'>
              {(book.auth === true && book.freeship === false && book.topdeal === false) && <img src='https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png' />}
              {(book.auth === true && book.freeship === true && book.topdeal === true) && <img src='https://salt.tikicdn.com/ts/upload/21/c9/ce/ecf520f4346274799396496b3cbbf7d8.png' />}
              {(book.auth === true && book.freeship === true && book.topdeal === false) && <img src='https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png' />}
              {(book.auth === true && book.freeship === false && book.topdeal === true) && <img src='https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png' />}
            </div>
          </div>

          <div className='book-content'>
            <div className='info'>
              <div className='price-and-discount'>
                <div className='price'>
                  {book.price}
                  <sup>₫</sup>
                </div>
                <div className='discount'>
                  -{book.discount}%
                </div>
              </div>

              <div className='book-info'>
                <div className='name'>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span>{book.author}</span>
                    <h3>{book.title}</h3>
                  </div>
                </div>
                <div className='rating-quantity'>
                  <div className='rating' style={{ fontSize: '12px', display: 'inline-block' }}>
                    <div className='star'>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                        <g clipPath="url(#a)">
                          <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" fill="#FFC400"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                        <g clipPath="url(#a)">
                          <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" fill="#FFC400"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                        <g clipPath="url(#a)">
                          <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" fill="#FFC400"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                        <g clipPath="url(#a)">
                          <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" fill="#FFC400"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }}>
                        <g clipPath="url(#a)">
                          <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" fill="#FFC400"></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" transform="translate(1 1.5)" d="M0 0h10v10H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <span className='quantity'>Đã bán {book.productSold}</span>
                </div>
                {book.priceDecrease !== 0 &&
                  <div className='sale'>
                    <div className='sale-icon'>
                      <img src="https://salt.tikicdn.com/ts/upload/56/12/53/7e524d144a7251570f53c968526c68bd.png" width="16" height="16" alt="item-icon" />
                      <span>Giảm {book.priceDecrease}K</span>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className='delivery'>
              {book.ship2h === true ? <><img width="32" height="16" src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" alt="tikinow" /><span>Giao siêu tốc 2h</span></> : <><span>Giao sau 2 ngày</span></>}
            </div>
          </div>
        </span>
      </a>
    </div>
  );
}
export default Book;