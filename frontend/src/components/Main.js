import React, { useState } from 'react'
import Content from './Content'
import SideBarNew from './SideBarNew'
import LoginPage from './LoginPage'

const Main = () => {
  const [viewMore, setViewMore] = useState(true) //true = not full page

  return (
    <main>
      <LoginPage />
      <div className='main-container'>
        <div className='breadcrumb-wrapper'>
          <div className='breadcrumb'>
            <a className='breadcrumb-item'>Trang chủ</a>
            <span className='next-icon'>
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#808089" fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"></path>
              </svg>
            </span>
            <a className='breadcrumb-subitem'>Nhà Sách Tiki</a>
          </div>
        </div>
        <div className='body-wrapper'>
          <div className='sidebar-wrapper'>
            <SideBarNew />
          </div>
          <div className='content-wrapper'>
            <Content />
          </div>
        </div>

        <div className='recently-view-products'>
          <h2>Sản phẩm đã xem</h2>
          <div className='recently-container'>
            <div className='recently-wrapper'>
              <div className='recent-products'>
                <div className='recent-product'>
                  <div>
                    <div title="Chiến Binh Cầu Vồng (Tái Bản 2020)" rel="" className='recent-item-wrapper'>
                      <a href="https://tiki.vn/chien-binh-cau-vong-tai-ban-2020-p52788072.html?" style={{ width: '100%', height: '100%' }}>
                        <div className='recent-img-wrapper'>
                          <img alt="Chiến Binh Cầu Vồng (Tái Bản 2020)" src="https://salt.tikicdn.com/cache/280x280/ts/product/a1/ef/4f/0b39e40dca3827604c8bc4e867cc9423.jpg" />
                        </div>
                        <div class="recent-info">
                          <p class="price-has-discount">
                            <span>70.850 <sup>₫</sup></span>
                            <span class="percent">-35%</span>
                          </p>
                          <div class="recent-title" style={{ maxHeight: '40px', height: 'auto' }}>
                            <h3>Chiến Binh Cầu Vồng (Tái Bản 2020)</h3>
                          </div>
                          <div class="bottom" style={{ flex: 'unset' }}>
                            <div class="recent-review">
                              <div style={{ display: 'flex' }}>
                                <div class="full-rating">
                                  <div class="total" style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: 'rgb(128, 128, 137)' }}>4.8</span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}>
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(128, 128, 137)', lineHeight: 'normal', fontSize: '12px', paddingLeft: '4px' }}>
                                <div style={{ width: '1px', height: '9px', backgroundColor: 'rgb(199, 199, 199)' }}></div>
                                <div data-view-id="pdp_quantity_sold" style={{ paddingLeft: '6px' }}>Đã bán 1000+</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='recent-product'>
                  <div>
                    <div title="Chiến Binh Cầu Vồng (Tái Bản 2020)" rel="" className='recent-item-wrapper'>
                      <a href="https://tiki.vn/chien-binh-cau-vong-tai-ban-2020-p52788072.html?" style={{ width: '100%', height: '100%' }}>
                        <div className='recent-img-wrapper'>
                          <img alt="Chiến Binh Cầu Vồng (Tái Bản 2020)" src="https://salt.tikicdn.com/cache/280x280/ts/product/f9/53/ea/e51469639f6d4dfc7e183f45002f5a32.jpg.webp" />
                        </div>
                        <div class="recent-info">
                          <p class="price-has-discount" style={{color: 'rgb(56, 56, 61)'}}>
                            <span>498.000 <sup>₫</sup></span>
                          </p>
                          <div class="recent-title" style={{ maxHeight: '40px', height: 'auto' }}>
                            <h3>Tiếng việt cho người nước ngoài - Tái bản lần 1</h3>
                          </div>
                          <div class="bottom" style={{ flex: 'unset' }}>
                            <div class="recent-review">
                              <div style={{ display: 'flex' }}>
                                <div class="full-rating">
                                  <div class="total" style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: 'rgb(128, 128, 137)' }}>5</span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}>
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(128, 128, 137)', lineHeight: 'normal', fontSize: '12px', paddingLeft: '4px' }}>
                                <div style={{ width: '1px', height: '9px', backgroundColor: 'rgb(199, 199, 199)' }}></div>
                                <div data-view-id="pdp_quantity_sold" style={{ paddingLeft: '6px' }}>Đã bán 19</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='recent-product'>
                  <div>
                    <div title="Chiến Binh Cầu Vồng (Tái Bản 2020)" rel="" className='recent-item-wrapper'>
                      <a href="https://tiki.vn/chien-binh-cau-vong-tai-ban-2020-p52788072.html?" style={{ width: '100%', height: '100%' }}>
                        <div className='recent-img-wrapper'>
                          <img alt="Chiến Binh Cầu Vồng (Tái Bản 2020)" src="	https://salt.tikicdn.com/cache/280x280/ts/product/a6/d0/46/c70424ed96c64acc2eea7e1a257a30ec.png.webp" />
                        </div>
                        <div class="recent-info">
                          <p class="price-has-discount">
                            <span>153.000 <sup>₫</sup></span>
                            <span class="percent">-15%</span>
                          </p>
                          <div class="recent-title" style={{ maxHeight: '40px', height: 'auto' }}>
                            <h3>Sách Nuôi dưỡng tâm hồn - Shichida - Bộ Voi Con (trọn bộ gồm 6 quyển) - Truyện tranh cho bé 5 tuổi</h3>
                          </div>
                          <div class="bottom" style={{ flex: 'unset' }}>
                            <div class="recent-review">
                              <div style={{ display: 'flex' }}>
                                <div class="full-rating">
                                  <div class="total" style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: 'rgb(128, 128, 137)' }}>5</span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}>
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(128, 128, 137)', lineHeight: 'normal', fontSize: '12px', paddingLeft: '4px' }}>
                                <div style={{ width: '1px', height: '9px', backgroundColor: 'rgb(199, 199, 199)' }}></div>
                                <div data-view-id="pdp_quantity_sold" style={{ paddingLeft: '6px' }}>Đã bán 4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-brand-list'>
          <a className="storage">
            <div className="logo-ad-container" style={{ width: '204px', height: '204px' }}>
              <div className="logo-ad-bg" style={{ backgroundImage: `url(	https://salt.tikicdn.com/ts/tka/66/df/25/dc8464fc16a0530e43793b0a493ed200.png)` }}></div>
              <img className="logo-ad-img" style={{ width: '152px', height: '152px' }} src='https://salt.tikicdn.com/ts/tka/66/df/25/dc8464fc16a0530e43793b0a493ed200.png' />
            </div>
            <div className="info-ad-container">
              <div className="info-ad-title">
                Sách Nhã Nam - Giảm Đến 50%
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="ad-sponsored-text" style={{ fontSize: '14px', lineHeight: '20px', color: "rgb(128, 128, 137)" }}>Tài trợ bởi</div> &nbsp;
                <div className="ad-storename">Nhã Nam Official</div> &nbsp;
                <div style={{ display: 'flex', flexShrink: 0 }}>
                  <div style={{ color: "rgb(128, 128, 137)", fontSize: '14px', lineHeight: '21px', }}>5/5</div>
                  <img src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png" alt="rating-star" class="ad-star" />
                </div>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="ad-products-row">
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/76/d4/6b/9944f73c0362efdd2f16b28e1f417bf9.jpg.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-20%</div>
                    </div>
                    <div className="ad-product">
                      <img src='	https://salt.tikicdn.com/cache/100x100/ts/product/0d/8c/de/9d6af6d52b52c89eb1f9b5218d876c0e.jpg.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-20%</div>
                    </div>
                    <div className="ad-product">
                      <img src='	https://salt.tikicdn.com/cache/100x100/ts/product/e4/9f/47/f4d39da57e40bf66b5209abcf289ce8f.jpg.webp' alt="product-image-undefined" />
                    </div>
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/03/1a/37/93569e6dbcc7e917333916e658f95142.jpg.webp' alt="product-image-undefined" />
                    </div>
                  </div>
                  <div className='vertical-seperator'>
                  </div>
                  <div className='right-group'>
                    <div className='discount-text'>
                      Giảm 40%
                    </div>
                    <div className='viewmore-btn'>
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="storage">
            <div className="logo-ad-container" style={{ width: '204px', height: '204px' }}>
              <div className="logo-ad-bg" style={{ backgroundImage: 'url(https://vcdn.tikicdn.com/ts/seller/84/d9/5f/b5d9c7a3d3419d77ef56a4b4a58666f8.png)' }}></div>
              <img className="logo-ad-img" style={{ width: '152px', height: '152px' }} src='https://vcdn.tikicdn.com/ts/seller/84/d9/5f/b5d9c7a3d3419d77ef56a4b4a58666f8.png' />
            </div>
            <div className="info-ad-container">
              <div className="info-ad-title">
                phanbook
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="ad-sponsored-text" style={{ fontSize: '14px', lineHeight: '20px', color: "rgb(128, 128, 137)" }}>Tài trợ bởi</div> &nbsp;
                <div className="ad-storename">PHAN LỆ & FRIENDS</div> &nbsp;
                <div style={{ display: 'flex', flexShrink: 0 }}>
                  <div style={{ color: "rgb(128, 128, 137)", fontSize: '14px', lineHeight: '21px', }}>5/5</div>
                  <img src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png" alt="rating-star" class="ad-star" />
                </div>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="ad-products-row">
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/62/52/1e/7ad9cf679f6be3c4b3317beb37edb1e3.jpg.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-25%</div>
                    </div>
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/f2/f3/96/cdc585e6dbd7d579bbb1e835c77de006.jpg.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-26%</div>
                    </div>
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/9b/c8/62/216ec390fb1407e823455a7faf7962a1.jpg.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-28%</div>
                    </div>
                    <div className="ad-product">
                      <img src='https://salt.tikicdn.com/cache/100x100/ts/product/12/00/4b/8c47669a6816b66b74cd0aebf68439e8.png.webp' alt="product-image-undefined" />
                      <div className="ad-product-badge">-36%</div>
                    </div>
                  </div>
                  <div className='vertical-seperator'>
                  </div>
                  <div className='right-group'>
                    <div className='discount-text'>
                      Giảm 15K
                    </div>
                    <div className='viewmore-btn'>
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="book-store-wrapper">
          <div className="group">
            <h2 className="book-store-title">Thông Tin Danh mục</h2>
            <div class="book-store-content">
              <div class="toggle-content-wrapper">
                <div class="toggle-content-view" style={viewMore === true ? { overflow: 'hidden', height: '250px' } : {}}>
                  <div>
                    <p dir="ltr">Nhà sách là một trong những địa điểm đã gắn liền với tuổi thơ của nhiều người. Nơi đây không chỉ cung cấp cho chúng ta một nguồn kho tàng tri thức quý giá mà còn bày bán rất nhiều món&nbsp;<a href="https://tiki.vn/qua-luu-niem/c18328">quà lưu niệm</a> đáng yêu cùng vô vàn món <a href="https://tiki.vn/van-phong-pham-qua-luu-niem/c7741">văn phòng phẩm</a> khác. Cùng Tiki tìm hiểu thêm những điều thú vị tại nhà sách qua bài viết dưới đây nhé.</p>
                    <h2 dir="ltr">Nhà sách - Thế giới tri thức và tinh hoa nhân loại</h2>
                    <p dir="ltr">Người ta thường nói “sách là một kho tàng vô giá” vì nó chứa đựng nhiều kiến thức bổ ích của nhân loại. Chính vì thế mà nhà sách, nơi được trưng bày hàng nghìn cuốn sách có thể nói là một thế giới tri thức và hội tụ đủ muôn vàng tinh hoa của các nền văn hóa khác nhau.</p>
                    <p dir="ltr">Một vài địa điểm bán sách nổi tiếng và đã xuất hiện từ lâu như nhà sách Fahasa, nhà sách Nhã Nam chắc hẳn là nơi đã lưu giữ kỷ niệm tuổi thơ của nhiều người. Những nhà sách này không chỉ bán mỗi sách mà còn “bán” cả niềm vui, sự hạnh phúc cho nhiều em nhỏ ở tuổi cắp sách đến trường.</p>
                    <p dir="ltr">Nơi đây có nhiều loại sách khác nhau với đa dạng lĩnh vực từ <a href="https://tiki.vn/sach-kinh-te/c846">kinh tế</a>, văn hóa, nghệ thuật,...cho đến triết học hay <a href="https://tiki.vn/cong-nghe-thong-tin/c876">công nghệ</a>. Thêm vào đó, những loại sách bao gồm các kiến thức về ẩm thực, <a href="https://tiki.vn/sach-thuong-thuc-gia-dinh/c862">gia đình</a> cũng có mặt tại đây. Do đó, nhà sách không chỉ đón tiếp mỗi học sinh, sinh viên mà còn là thiên đường dành cho những ai ham học hỏi và cần tìm đến kiến thức.</p>
                    <p dir="ltr">Tham khảo thêm về: <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;sách, truyện one piece&quot;}" data-sheets-userformat="{&quot;2&quot;:1049345,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:3,&quot;12&quot;:0,&quot;23&quot;:1}" data-sheets-textstyleruns="{&quot;1&quot;:0,&quot;2&quot;:{&quot;2&quot;:{&quot;1&quot;:2,&quot;2&quot;:1136076},&quot;9&quot;:1}}{&quot;1&quot;:4}{&quot;1&quot;:6,&quot;2&quot;:{&quot;2&quot;:{&quot;1&quot;:2,&quot;2&quot;:1136076},&quot;9&quot;:1}}" data-sheets-hyperlinkruns="{&quot;1&quot;:0,&quot;2&quot;:&quot;https://tiki.vn/sach-truyen-tieng-viet/c316&quot;}{&quot;1&quot;:4}{&quot;1&quot;:6,&quot;2&quot;:&quot;https://tiki.vn/search?q=truy%E1%BB%87n%20one%20piece%20tr%E1%BB%8Dn%20b%E1%BB%99&quot;}{&quot;1&quot;:22}"><a class="in-cell-link" href="https://tiki.vn/sach-truyen-tieng-viet/c316" target="_blank" rel="noopener">sách</a>, <a class="in-cell-link" href="https://tiki.vn/search?q=truy%E1%BB%87n%20one%20piece%20tr%E1%BB%8Dn%20b%E1%BB%99" target="_blank" rel="noopener">truyện One Piece, </a><a class="waffle-rich-text-link" href="https://tiki.vn/search?q=Truy%E1%BB%87n%20tranh%20-%20One-Punch%20Man%20(T%E1%BA%ADp%201-18)">Truyện One Punch Man</a><a class="in-cell-link" href="https://tiki.vn/search?q=truy%E1%BB%87n%20one%20piece%20tr%E1%BB%8Dn%20b%E1%BB%99" target="_blank" rel="noopener">, </a><a href="https://tiki.vn/search?q=truy%E1%BB%87n%20tokyo%20revengers">Tokyo Revengers manga</a>, <a href="https://tiki.vn/kinh-van-hoa-chet-choc-p272155345.html?spid=272155347">Kính Vạn Hoa Chết Chóc</a></span></p>
                    <h2 dir="ltr">Tại sao nên chọn nhà sách Tiki?</h2>
                    <p dir="ltr">Bên cạnh những nhà sách truyền thống như nhà sách Fahasa, nhà sách Nhã Nam, nhà sách Phương Nam,...Tiki sẽ là một lựa chọn mới mẻ và thú vị dành cho những ai có sở thích mua sách online. <a href="https://tiki.vn/nha-sach-tiki/c8322">Nhà sách Tiki</a> sở hữu một kho tàng sách rộng lớn với đa dạng các loại sách khác nhau để các bạn có thể lựa chọn.</p>
                    <ul>
                      <li dir="ltr" aria-level="1">
                        <p dir="ltr" role="presentation">Thao tác mua và thanh toán đơn giản</p>
                      </li>
                    </ul>
                    <p dir="ltr">Nếu như những nhà sách truyền thống khiến các bạn thích thú vì có thể tận tay cầm những cuốn sách hay có được cảm giác thoải mái khi dạo vòng quanh những giá sách thì nhà sách trực tuyến Tiki sẽ mang đến cho các bạn sự thuận tiện khi mua sắm.&nbsp;</p>
                    <p dir="ltr">Thay vì phải loay hoay đi khắp nơi để tìm được cuốn sách mình muốn mua, các bạn chỉ cần lên điểm bán sách trực tuyến Tiki gõ tên sách mình cần tìm là nó sẽ xuất hiện ngay. Thêm vào đó, việc thanh toán sau khi mua hàng cũng sẽ vô cùng nhanh chóng và không cần phải chen chúc xếp hàng để chờ đến lượt mình.</p>
                    <p dir="ltr">
                      <img src="https://salt.tikicdn.com/ts/lp/f7/7a/75/6706376fbdd7ce2217c51726e507e180.png" alt="Nhà sách Tiki, mua sắm tiện lợi" width="600" height="314" /></p>
                    <p dir="ltr" style={{ textAlign: 'center' }}><em>Nhà sách Tiki - mua sắm dễ dàng, giao hàng nhanh chóng (Nguồn: Tiki)</em></p>
                    <p dir="ltr" style={{ textAlign: 'center' }}><em>Xem thêm: <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;sách giáo khoa lớp 10 mới, thần đồng đất việt, hoàng tử bé&quot;}" data-sheets-userformat="{&quot;2&quot;:1053243,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:16776960},&quot;6&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;7&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;8&quot;:{&quot;1&quot;:[{&quot;1&quot;:2,&quot;2&quot;:0,&quot;5&quot;:{&quot;1&quot;:2,&quot;2&quot;:0}},{&quot;1&quot;:0,&quot;2&quot;:0,&quot;3&quot;:3},{&quot;1&quot;:1,&quot;2&quot;:0,&quot;4&quot;:1}]},&quot;12&quot;:0,&quot;15&quot;:&quot;Arial&quot;,&quot;23&quot;:1}" data-sheets-textstyleruns="{&quot;1&quot;:0,&quot;2&quot;:{&quot;2&quot;:{&quot;1&quot;:2,&quot;2&quot;:1136076},&quot;9&quot;:1}}{&quot;1&quot;:25}{&quot;1&quot;:27,&quot;2&quot;:{&quot;2&quot;:{&quot;1&quot;:2,&quot;2&quot;:1136076},&quot;9&quot;:1}}{&quot;1&quot;:45}{&quot;1&quot;:47,&quot;2&quot;:{&quot;2&quot;:{&quot;1&quot;:2,&quot;2&quot;:1136076},&quot;9&quot;:1}}" data-sheets-hyperlinkruns="{&quot;1&quot;:0,&quot;2&quot;:&quot;https://tiki.vn/search?q=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%2010%20m%E1%BB%9Bi&quot;}{&quot;1&quot;:25}{&quot;1&quot;:27,&quot;2&quot;:&quot;https://tiki.vn/search?q=truy%E1%BB%87n%20th%E1%BA%A7n%20%C4%91%E1%BB%93ng%20%C4%91%E1%BA%A5t%20vi%E1%BB%87t&quot;}{&quot;1&quot;:45}{&quot;1&quot;:47,&quot;2&quot;:&quot;https://tiki.vn/search?q=ho%C3%A0ng%20t%E1%BB%AD%20b%C3%A9&quot;}{&quot;1&quot;:58}"><a class="in-cell-link" href="https://tiki.vn/search?q=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%2010%20m%E1%BB%9Bi" target="_blank" rel="noopener">sách giáo khoa lớp 10 mới</a>, <a class="in-cell-link" href="https://tiki.vn/search?q=truy%E1%BB%87n%20th%E1%BA%A7n%20%C4%91%E1%BB%93ng%20%C4%91%E1%BA%A5t%20vi%E1%BB%87t" target="_blank" rel="noopener">thần đồng đất việt</a>, <a class="in-cell-link" href="https://tiki.vn/search?q=ho%C3%A0ng%20t%E1%BB%AD%20b%C3%A9" target="_blank" rel="noopener">hoàng tử bé</a></span></em></p>
                    <ul>
                      <li dir="ltr" aria-level="1">
                        <p dir="ltr" role="presentation">Đầy đủ, đa dạng thể loại sách&nbsp;</p>
                      </li>
                    </ul>
                    <p dir="ltr">Tiki sở hữu nhiều loại sách khác nhau với đa dạng các lĩnh vực và thể loại mà các bạn có thể lựa chọn. Ngoài những bộ <a href="https://tiki.vn/sach-giao-khoa-giao-trinh/c2321">sách giáo khoa</a> từ cấp 1, cấp 2 đến cấp 3, Tiki còn có nhiều loại sách về lĩnh vực kinh tế, khoa học,...Các thể loại <a href="https://tiki.vn/tam-ly-gioi-tinh/c868">sách tâm lý</a>, tiểu thuyết, <a href="https://tiki.vn/truyen-tranh/c1084">truyện tranh</a>, <a href="https://tiki.vn/sach-van-hoc/c839">văn học</a> nước ngoài,...cũng có thể dễ dàng tìm thấy trên Tiki.</p>
                    <ul>
                      <li dir="ltr" aria-level="1">
                        <p dir="ltr" role="presentation">Nhiều thương hiệu uy tín&nbsp;</p>
                      </li>
                    </ul>
                    <p dir="ltr">Ngoài sách, Tiki còn có bán nhiều loại dụng cụ văn phòng phẩm khác nhau với đa dạng thương hiệu nổi tiếng và uy tín trên thị trường. Những nhãn hiệu văn phòng phẩm nổi tiếng như <a href="https://tiki.vn/cua-hang/pentel-official">Pentel</a>, <a href="https://tiki.vn/cua-hang/thien-long-official-store">Thiên Long</a>, Deli,...đều có mặt tại Tiki.</p>
                    <p dir="ltr">Thêm vào đó, việc mua sắm trên Tiki sẽ còn dễ dàng và tiện ích hơn rất nhiều bởi các bạn có thể so sánh giá với nhiều điểm bán khác. Tiki cũng có nhiều chương trình ưu đãi cùng khuyến mãi hấp dẫn giúp các bạn mua sắm tiết kiệm hơn.</p>
                    <ul>
                      <li dir="ltr" aria-level="1">
                        <p dir="ltr" role="presentation">Nhiều nhà cung cấp nổi tiếng, được yêu thích&nbsp;</p>
                      </li>
                    </ul>
                    <p dir="ltr">Nhà sách Tiki đồng hành cùng nhiều nhà cung cấp uy tín và có tiếng như VBooks, Fahasa, Nhã Nam,...nên các bạn có thể hoàn toàn yên tâm về chất lượng sách cũng như sự đa dạng của sách khi mua hàng tại đây.</p>
                    <p dir="ltr">Xem thêm một số tác phẩm văn học nước ngoài: <a href="https://tiki.vn/mot-doi-mot-kiep-giang-nam-lao-p179584523.html">Một Đời Một Kiếp</a>, <a href="https://tiki.vn/mot-doi-mot-kiep-giang-nam-lao-p179584523.html">Đã Nhiều Năm Như Thế</a>, <a href="https://tiki.vn/hoang-le-nhat-thong-chi-p263681261.html?spid=270661742">Hoàng Lê Nhất Thống Chí</a>, <a href="https://tiki.vn/mo-hoang-bi-tu-eb-p190184.html">Mộ Hoàng Bì Tử</a>, <a href="https://tiki.vn/chung-ta-se-ket-hon-that-sao-365-days-to-the-wedding-tap-1-p263800099.html?spid=263800102">365 days to the wedding</a></p>
                    <h2 dir="ltr">Một số món đồ siêu tiện lợi trong nhà sách&nbsp;</h2>
                    <p dir="ltr">Không chỉ bán mỗi sách, nhà sách Tiki còn có khá nhiều các sản phẩm khác từ quà lưu niệm, <a href="https://tiki.vn/do-choi/c5250">đồ chơi</a>, cho đến văn phòng phẩm.</p>
                    <h3 dir="ltr">Sách&nbsp;</h3>
                    <p dir="ltr">Các loại sách trên cửa hàng trực tuyến Tiki không chỉ có mỗi <a href="https://tiki.vn/sach-truyen-tieng-viet/c316">sách tiếng Việt</a> mà còn có nhiều ngôn ngữ nước ngoài khác như tiếng Anh, tiếng Trung, tiếng Nhật, <a href="https://tiki.vn/tu-dien-tieng-viet/c903">từ điển tiếng việt</a>...đáp ứng được nhu cầu của mọi khách hàng.</p>
                    <p dir="ltr">Ngoài ra, các bạn còn có thể tìm mua được các loại sách tô màu, sách vẽ tranh hay các loại tập vở đa dạng ô ly dành cho các bé mẫu giáo, tiểu học tập viết. Những quyển sách dạy cách chăm con hay các kiến thức gia đình, nấu ăn cũng có thể tìm thấy dễ dàng trên Tiki.</p>
                    <h3 dir="ltr">Đồ văn phòng phẩm&nbsp;</h3>
                    <p dir="ltr">Những món đồ văn phòng phẩm chuyên dụng như <a href="https://tiki.vn/but-bi-ruot-but-bi/c1869">bút bi</a>, <a href="https://tiki.vn/but-muc-but-may/c1868">bút máy</a>, gôm, bìa tài liệu,...trên nhà sách Tiki cũng có bán. Các thương hiệu văn phòng phẩm đều thuộc những nhãn hàng nổi tiếng đảm bảo được chất lượng và độ an toàn của sản phẩm.&nbsp;&nbsp;</p>
                    <h3 dir="ltr">Quà lưu niệm</h3>
                    <p dir="ltr">Đối với những ai yêu thích những món quà lưu niệm nho nhỏ đáng yêu và độc đáo thì Tiki là nơi mà các bạn có thể dễ dàng tìm thấy những món quà ấy. Quà lưu niệm tại Tiki rất đa dạng và luôn được cập nhật liên tục để khách hàng có thể mua sắm dễ dàng.</p>
                    <p dir="ltr">Những chú gấu nhồi bông đáng yêu, những quả cầu thủy tinh nhiều màu sắc hay những chiếc móc khóa mới lạ cũng đều có mặt tại Tiki.&nbsp;</p>
                    <p dir="ltr">
                      <img src="https://salt.tikicdn.com/cache/750x750/ts/product/bc/d0/6c/9aa42135b002b0bb185c4685a1152a18.jpg.webp" alt="Tiki có đa dạng các món đồ văn phòng phẩm" width="600" height="600" />
                    </p>
                    <p dir="ltr" style={{ textAlign: 'center' }}><em>Đa dạng các món đồ văn phòng phẩm</em></p>
                    <p dir="ltr" >Tham khảo thêm về: <a href="https://tiki.vn/harry-potter-va-hon-da-phu-thuy-tap-01-tai-ban-2022-ban-quyen-p270774869.html">Harry Potter và hòn đá phù thủy</a>, <a href="https://tiki.vn/ma-phap-thieu-nu-tap-1-p162844706.html">Ma Pháp Thiếu Nữ</a>, <a href="https://tiki.vn/dung-nhat-ban-trai-trong-thung-rac-tap-1-p250230238.html">Đừng Nhặt Bạn Trai Trong Thùng Rác</a>, <a href="https://tiki.vn/bi-mat-mua-he-nam-ay-p70847906.html?spid=99350322">Mùa Hè Năm Ấy</a>, <a href="https://tiki.vn/treu-nham-tap-1-p271626741.html?spid=271724843/">Trêu Nhầm</a></p>
                    <h2 dir="ltr">Mua ngay các sản phẩm sách và văn phòng phẩm tại nhà sách Tiki tiện lợi với mức giá ưu đãi</h2>
                    <p dir="ltr">Nhà sách trực tuyến Tiki tự hào là nơi cung cấp tất cả các thể loại sách từ nhiều lĩnh vực khác nhau và đa dạng các loại văn phòng phẩm với mức giá ưu đãi cho khách hàng. Mua sắm trên <a href="https://tiki.vn/">Tiki</a> hoàn toàn tiện lợi, vừa tiết kiệm được thời gian công sức vừa tiết kiệm chi phí hiệu quả.</p>
                    <p dir="ltr">Có thể nói nhà sách Tiki chính là thiên đường để mua sắm các dụng cụ học tập, các thể loại sách dành cho mọi lứa tuổi từ học sinh, sinh viên cho đến người đã đi làm như <a href="https://tiki.vn/tam-ly-gioi-tinh/c868">sách tâm lý - giới tính</a>, <a href="https://tiki.vn/y-hoc/c885">sách y học</a>, <a href="https://tiki.vn/tap-chi-catalogue/c1468">tạp chí</a>,... “Tiết kiệm chi phí - Tiết kiệm thời gian” chính là những tiện ích mà chúng ta có thể tìm thấy tại Tiki.</p>
                    <p dir="ltr">Mua sắm văn phòng phẩm và sách ở đâu vừa nhanh gọn vừa dễ dàng? Bật mí là ở nhà sách Tiki đấy nhé. Nếu các bạn đang chuẩn bị bước vào năm học mới hay đang tìm mua một quyển sách nào đó, đừng ngần ngại mà lên Tiki ngay.</p></div>
                  {viewMore === true && <div class="gradient"></div>}
                </div>
                <a class="book-store-btn-more" onClick={() => { setViewMore((prev) => !prev) }}>{viewMore === true ? 'Xem thêm' : 'Thu gọn'}</a>
              </div>
            </div>
          </div>
        </div>


        <div className="top-relevant-product">
          <h2 className="relevant-title">
            Tìm Kiếm Liên Quan
          </h2>
          <div class="relevant-content">
            <a href="https://tiki.vn/search?q=harry%20potter%20tr%E1%BB%8Dn%20b%E1%BB%99">harry potter trọn bộ</a>
            <a href="https://tiki.vn/search?q=m%C3%B9a%20h%C3%A8%20kh%C3%B4ng%20t%C3%Aan">999 lá thư gửi cho chính mình</a>
            <a href="https://tiki.vn/search?q=atomic%20habits">atomic habits</a>
            <a href="https://tiki.vn/search?q=roses%20and%20champagne">roses and champagne</a>
            <a href="https://tiki.vn/search?q=%C4%91%C3%A1m%20tr%E1%BA%BB%20%E1%BB%9F%20%C4%91%E1%BA%A1i%20d%C6%B0%C6%A1ng%20%C4%91en">đám trẻ ở đại dương đen</a>
            <a href="https://tiki.vn/search?q=t%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20v%E1%BB%81%20ti%E1%BB%81n">tâm lý học về tiền</a>
            <a href="https://tiki.vn/search?q=t%C6%B0%20duy%20nhanh%20v%C3%A0%20ch%E1%BA%Adm">tư duy nhanh và chậm</a>
            <a href="https://tiki.vn/search?q=d%C3%A1m%20b%E1%BB%8B%20gh%C3%A9t">dám bị ghét</a>
            <a href="https://tiki.vn/search?q=ng%C6%B0%E1%BB%9Di%20b%C3%A0%20t%C3%A0i%20gi%E1%BB%8Fi%20v%C3%B9ng%20saga">người bà tài giỏi vùng saga</a>
            <a href="https://tiki.vn/search?q=vi%E1%BB%87t%20nam%20s%E1%BB%AD%20l%C6%B0%E1%BB%A3c">việt nam sử lược</a>
            <a href="https://tiki.vn/search?q=tr%E1%BB%91n%20l%C3%AAn%20m%C3%A1i%20nh%C3%A0%20%C4%91%E1%BB%83%20kh%C3%B3c">trốn lên mái nhà để khóc</a>
            <a href="https://tiki.vn/search?q=t%E1%BB%99i%20%C3%A1c%20v%C3%A0%20h%C3%ACnh%20ph%E1%BA%A1t">tội ác và hình phạt</a>
            <a href="https://tiki.vn/search?q=v%E1%BA%BB%20%C4%91%E1%BA%B9p%20c%E1%BB%A7a%20s%E1%BB%B1%20c%C3%B4%20%C4%91%C6%A1n">vẻ đẹp của sự cô đơn</a>
            <a href="https://tiki.vn/search?q=%C4%91%C3%BAng%20vi%E1%BB%87c">đúng việc</a><a href="https://tiki.vn/search?q=tri%C3%AAu%20du">triêu du</a>
            <a href="https://tiki.vn/search?q=t%E1%BA%A7n%20s%E1%BB%91%20rung%20%C4%91%E1%BB%99ng">tần số rung động</a>
            <a href="https://tiki.vn/search?q=%C4%91%E1%BB%A9a%20tr%E1%BA%BB%20hi%E1%BB%83u%20chuy%E1%BB%87n%20th%C6%B0%E1%BB%9Dng%20kh%C3%B4ng%20c%C3%B3%20k%E1%BA%B9o%20%C4%83n">đứa trẻ hiểu chuyện thường không có kẹo ăn</a>
            <a href="https://tiki.vn/search?q=con%20%C4%91%C6%B0%E1%BB%9Dng%20ch%E1%BA%B3ng%20m%E1%BA%A5y%20ai%20%C4%91i">con đường chẳng mấy ai đi</a><a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main