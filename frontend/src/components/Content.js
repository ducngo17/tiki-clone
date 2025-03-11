import BookList from "./BookList"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Popup from 'reactjs-popup';
import { useContext, useState } from "react";
import { dataContext } from "../App";

const Content = () => {
    const {handleFilteredClick} = useContext(dataContext)
    const adData = [
        {
            logoUrl: "https://salt.tikicdn.com/cache/w200/ts/tka/66/df/25/dc8464fc16a0530e43793b0a493ed200.png.webp",
            title: "Sách Nhã Nam - Giảm Đến 50%",
            seller: "Nhã Nam Official",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/15/ec/9a/41b8847a26fda2ea02440becad908776.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/94/a5/52/e28806e544f90e40f65800a4d6228b69.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/7f/9d/38/1342be9af144f3c5b975234a0c3e725b.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/06/7b/1e/b96e50c770bf2b90c812e99c5d195f31.png.webp"
            ],
            productBadges: [
                20, 17, 20, 1,
            ]
        },
        {
            logoUrl: "https://vcdn.tikicdn.com/cache/w200/ts/seller/44/fe/8b/e8d66cf43e03b62b0e6e4da99d19475d.jpg.webp",
            title: "Giảm đến 81% - SBOOKS",
            seller: "SÁCH SBOOKS HÀ NỘI",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/2c/e7/12/09aaad8ce495f349524ffe78fce1e07a.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/6b/26/3e/f42e3810278d8e7d02cba8cfb0eff0f0.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/05/8e/d1/b180563fb5b5d75f423ac47b12e2ec37.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/ed/69/46/9c86a1dad1bfb6ceca0d8b15e31745b9.jpg.webp"
            ],
            productBadges: [
                46, 34, 29, 34,
            ]
        },
        {
            logoUrl: "https://salt.tikicdn.com/cache/w200/ts/tka/1c/a1/00/3574c4dce736eb3ef0f4f371f358660e.png.webp",
            title: "Top Sách Bán Chạy",
            seller: "1980 Books Tại Tiki Trading",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/6f/3f/58/80b2a6075864f509d332757b6bcfaac4.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/0a/6c/f2/aaec7bcd7e61f8b6002fb6a537ef4b8f.jpg.webp",
            ],
            productBadges: [
                38, 40, 13, 30,
            ]
        },
        {
            logoUrl: "https://salt.tikicdn.com/cache/w200/ts/tka/b6/a5/b5/1b7632658a52ab5d49d58faa8f5e5337.png.webp",
            title: "Sách kĩ năng sống",
            seller: "FIRST NEWS",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/e2/3c/f0/4c84c86db01195b50665f23495a971d9.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/media/catalog/product/tmp/42/36/4b/510881a09fc35241426456545c99f524.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/media/catalog/product/tmp/7f/40/17/78b2c4f5fe1d9be19f7a9e07e464cf30.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/da/23/c2/ed5eff6b06b244b942184c88d6d65b20.jpg.webp",
            ],
            productBadges: [
                26, 30, 30, 34
            ]
        },
        {
            logoUrl: "https://vcdn.tikicdn.com/cache/w200/ts/seller/f8/fc/35/b9cf2e2abd40db7885da67494afe5d8f.jpg.webp",
            title: "THỨC TỈNH MỤC ĐÍCH SỐNG CỦA BẠN",
            seller: "Sbooks",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/30/98/5e/7c8e482cc04dc36ec0185c7a4c85ad5f.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/5a/e1/67/b481512110d25f1ee32422674374a2a5.jpeg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/a5/76/eb/f0cd28e1b2e331ccbfc528c8827c3b07.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/89/b8/39/72b7e9b91ba953a06c586162a2643991.jpeg.webp",
            ],
            productBadges: [
                45, 43, 44, 40
            ]
        },
        {
            logoUrl: "https://salt.tikicdn.com/cache/w200/ts/tka/cf/b2/2a/de2eff0c8ec17200982f71a9cd0dc5a9.png.webp",
            title: "MEGABOOK - SÁCH NGOẠI NGỮ GIẢM 50%",
            seller: "Megabook Officials",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/74/87/0e/bccbd6722114f75f2c74c93f417ed533.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/78/89/76/4b79c3b56d4e370f581d0691b5036e49.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/36/d2/e2/29f07ab0682a6dd71c5022a21c988f51.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/d4/91/fa/3d50602532c6488c62c7d0c5e47477d2.jpg.webp",
            ],
            productBadges: [
                41, 33, 43, 31
            ]
        },
        {
            logoUrl: "https://vcdn.tikicdn.com/cache/w200/ts/seller/dc/02/3a/50870fca12f723afe778059bbac545ef.jpg.webp",
            title: "Giảm đến 80%",
            seller: "Saigon Books Official",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/a5/f1/b1/b3e71799cf64703781b6fa89cd97dffd.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/c9/9b/44/b3d9655abacfe4c0ad10932ac206b036.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/95/b3/e3/54bd32adec2c169c0a970ebfaaf7df4e.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/2d/70/3e/62d116b2286f5a1049ee0e30b0605239.png.webp",
            ],
            productBadges: [
                0, 30, 52, 0
            ]
        },
        {
            logoUrl: "https://salt.tikicdn.com/cache/w200/ts/tka/d0/07/18/c2574ab0a318f9335d9bfdfa3ac2b000.jpg.webp",
            title: "SÁCH HOT GIẢM 50%",
            seller: "Thiền Sư Thích Nhất Hạnh - ...",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/a5/f1/b1/b3e71799cf64703781b6fa89cd97dffd.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/c9/9b/44/b3d9655abacfe4c0ad10932ac206b036.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/95/b3/e3/54bd32adec2c169c0a970ebfaaf7df4e.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/2d/70/3e/62d116b2286f5a1049ee0e30b0605239.png.webp",
            ],
            productBadges: [
                0, 30, 52, 0
            ]
        },
        {
            logoUrl: "https://vcdn.tikicdn.com/cache/w200/ts/seller/03/db/66/2a9079da2d92a9f743a029a6e6eb0d59.png.webp",
            title: "HOCMAI",
            seller: "HOCMAI",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/5e/0f/e6/3baf7f24ed4b8a60d8efae151c361de4.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/ec/47/8f/5cc2a478edacbaf455dcf6e61bd7b820.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/df/8d/03/e0d846b82f66a97b5f9f815b399ec37c.png.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/5c/87/b4/b571f493f8edea0cbd87fc1d81a3e9ac.jpg.webp",
            ],
            productBadges: [
                31, 38, 3, 0
            ]
        },
        {
            logoUrl: "https://vcdn.tikicdn.com/cache/w200/ts/seller/84/d9/5f/b5d9c7a3d3419d77ef56a4b4a58666f8.png.webp",
            title: "phanbook",
            seller: "PHAN LEEK & FRIENDS",
            productLinks: [
                "https://salt.tikicdn.com/cache/100x100/ts/product/2a/7a/eb/5a68184d25d1c3ed4f5aa06fff10148e.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/a9/ae/e0/fdc33e4b1416b71cf49a975690c80d0a.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/2d/43/6e/b6a49efff731b7384312fe3eb966cd9d.jpg.webp",
                "https://salt.tikicdn.com/cache/100x100/ts/product/e3/06/aa/2e281cebf35c684b8905afc8c4ec3446.jpg.webp",
            ],
            productBadges: [
                28, 32, 28, 31
            ]
        },
    ]

    const [activeSlide, setActiveSlide] = useState(0); // State to track the current slide

    const settings = {
        slidesPerRow: 2,
        speed: 500,
        prevArrow: <img className="prev-arrow" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" />,
        nextArrow: <img className="prev-arrow" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png" />,
        dots: true,
        afterChange: (i) => setActiveSlide(i),
        customPaging: (i) => ( //i : index of the current slide
            <div style={{ position: 'relative', marginLeft: '2px', marginRight: '2px' }}>
                <div style={{ backgroundColor: i === activeSlide ? 'rgb(10, 104, 255)' : 'rgba(0, 0, 0, 0.1)', width: i === activeSlide ? '24px' : '16px', height: '2px', borderRadius: '4px', cursor: 'pointer' }}></div>
                <div style={{ position: 'absolute', width: i === activeSlide ? '24px' : '16px', height: '12px', top: '-5px', cursor: 'pointer' }}></div>
            </div>
        ),
        appendDots: (dots) => (
            <ul style={{
                width: '100%',
                listStyleType: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '16px 0px 0px',
                padding: '0px',
                display: 'flex !important',
            }}>{dots}
            </ul>
        )
    }

    const [boxCheck, setBoxCheck] = useState([0, 0, 0, 0]);
    //0: uncheck, 1: hover, 2: checked

    return (
        <>
            <div className='title-section'>
                <h2>Nhà Sách Tiki</h2>
            </div>

            <div className="ad-widget-container">
                <div className="ad-widget">
                    <div className="slick-slider">
                        <Slider {...settings}>
                            {adData.map((ad, index) => (
                                <div className="slide" key={index}>
                                    <div style={index % 2 === 0 ? { marginRight: '6px' } : { marginLeft: '6px' }}>
                                        <a className="slide-container" style={{ height: '180.5px' }}>
                                            <div className="logo-ad-container">
                                                <div className="logo-ad-bg" style={{ backgroundImage: `url(${ad.logoUrl})` }}></div>
                                                <img className="logo-ad-img" src={`${ad.logoUrl}`} />
                                            </div>
                                            <div className="info-ad-container">
                                                <div className="info-ad-title">
                                                    {ad.title}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="ad-sponsored-text" style={{ fontSize: '14px', lineHeight: '20px', color: "rgb(128, 128, 137)" }}>Tài trợ bởi</div> &nbsp;
                                                    <div className="ad-storename">{ad.seller}</div> &nbsp;
                                                    <div style={{ display: 'flex', flexShrink: 0 }}>
                                                        <div style={{ color: "rgb(128, 128, 137)", fontSize: '14px', lineHeight: '21px', }}>5/5</div>
                                                        <img src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png" alt="rating-star" class="ad-star" />
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: 'auto' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <div className="ad-products-row">
                                                            <div className="ad-product">
                                                                <img src={`${ad.productLinks[0]}`} alt="product-image-undefined" />
                                                                <div className="ad-product-badge">-{ad.productBadges[0]}%</div>
                                                            </div>
                                                            <div className="ad-product">
                                                                <img src={`${ad.productLinks[1]}`} alt="product-image-undefined" />
                                                                <div className="ad-product-badge">-{ad.productBadges[1]}%</div>
                                                            </div>
                                                            <div className="ad-product">
                                                                <img src={`${ad.productLinks[2]}`} alt="product-image-undefined" />
                                                                <div className="ad-product-badge">-{ad.productBadges[2]}%</div>
                                                            </div>
                                                            <div className="ad-product">
                                                                <img src={`${ad.productLinks[3]}`} alt="product-image-undefined" />
                                                                <div className="ad-product-badge">-{ad.productBadges[3]}%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="cate-container">
                <div className="cate-title">Khám phá theo danh mục</div>
                <div className="cate-list">
                    <a className="eng-book">
                        <div className="cate-item">
                            <div className="cate-image">
                                <img src="https://salt.tikicdn.com/ts/category/cc/66/3d/4e4f1b8b1e772fe9e09611c6bec98746.png" alt="English Books" />
                            </div>
                            <div className="cate-name">English Books</div>
                        </div>
                    </a>
                    <a className="vn-book">
                        <div className="cate-item">
                            <div className="cate-image">
                                <img src="https://salt.tikicdn.com/ts/category/53/0f/bc/f6e936554ec845b45af8f94cbd4f1569.png" alt="Sách tiếng Việt" />
                            </div>
                            <div className="cate-name">Sách tiếng Việt</div>
                        </div>
                    </a>
                    <a className="stationery">
                        <div className="cate-item">
                            <div className="cate-image">
                                <img src="https://salt.tikicdn.com/ts/category/45/ab/0f/cffe9f60a7b37e0f87a9c50c4478aed9.png" alt="Văn phòng phẩm" />
                            </div>
                            <div className="cate-name">Văn phòng phẩm</div>
                        </div>
                    </a>
                    <a className="souvenir">
                        <div className="cate-item">
                            <div className="cate-image">
                                <img src="https://salt.tikicdn.com/ts/category/17/59/4f/af1292bf74c4d2862afd269bdfd42a62.png" alt="Quà lưu niệm" />
                            </div>
                            <div className="cate-name">Quà lưu niệm</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sort-and-filter-wrapper">
                <div className="saf-title">
                    Tất cả sản phẩm
                </div>
                <div className="saf-container">
                    <div className="saf-content">
                        <div className="filter-row-1">
                            <div className="filter-list">
                                <div className="filter-slider">
                                    <div>
                                        <div className="filter-name">
                                            Thương hiệu
                                        </div>
                                        <div className="brand-list" style={{ display: 'flex' }}>
                                            <div className="brand-button">
                                                <div class="brand-text">Deli</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">Thiên Long</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">Pentel</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">Hồng Hà</div>
                                            </div>
                                            <div className="brand-button" style={{ padding: '0px', margin: '0px', outline: 'none', background: 'none', color: 'rgb(39, 39, 42)', cursor: 'pointer', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg" alt="arrow" style={{ display: 'block', width: '20px', height: '20px', flexShrink: 0 }} />                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div>
                                        <div className="filter-name">
                                            Nhà cung cấp
                                        </div>
                                        <div className="brand-list" style={{ display: 'flex' }}>
                                            <div className="brand-button">
                                                <div class="brand-text">Nhà sách Vĩnh Thụy</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">Nhà sách Fahasa</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">Bamboo Books</div>
                                            </div>
                                            <div className="brand-button">
                                                <div class="brand-text">info</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-button">
                                <div className="divider">
                                </div>
                                <button>
                                    <img src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png" alt="filters" />
                                    <div>Tất cả</div>
                                    <div class="red-badge" style={{top: '-2px', right: '-2px'}}></div>
                                </button>
                            </div>
                        </div>
                        <div className="filter-row-2">
                            <div className="filter-list">
                                <div className="filter-options">
                                    <div className="filter-option">
                                        <div class="style__CheckboxV2Container-sc-1ewjwu4-3 hqFudj" style={{ marginRight: '8px' }}>
                                            <span class="box">
                                                {boxCheck[0] === 0 
                                                    && <img 
                                                        onMouseEnter={() => setBoxCheck(() => boxCheck.map((box, index) => index === 0 ? 1 : box))} 
                                                        class="icon-check-off" src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png" alt="default-checkbox" />}
                                                {boxCheck[0] === 1 
                                                    && <img 
                                                        onMouseLeave={() => setBoxCheck(() => boxCheck.map((box, index) => index === 0 ? 0 : box))} 
                                                        onClick={() => {
                                                            setBoxCheck(() => boxCheck.map((box, index) => index === 0 ? 2 : box))
                                                            handleFilteredClick('ship2h')
                                                            }} 
                                                            class="icon-check-hover" src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png" alt="hovered-checkbox" />}
                                                {boxCheck[0] === 2 
                                                    && <img 
                                                        onClick={() => setBoxCheck(() => boxCheck.map((box, index) => index === 0 ? 0 : box))} class="icon-check-on" src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png" alt="active-checkbox" />}
                                            </span>
                                        </div>
                                        <img src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" alt="Giao siêu tốc 2H" class="style-icon" style={{ height: '17px' }} />
                                        <div class="style-name">
                                            <span>Giao siêu tốc 2H</span>
                                        </div>
                                    </div>
                                    <div className="divider" style={{ height: '24px' }}></div>
                                    <div className="filter-option">
                                        <div class="style__CheckboxV2Container-sc-1ewjwu4-3 hqFudj" style={{ marginRight: '8px' }}>
                                            <span class="box">
                                                {boxCheck[1] === 0 && <img onMouseEnter={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 1 ? 1 : box))} class="icon-check-off" src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png" alt="default-checkbox" />}
                                                {boxCheck[1] === 1 && <img onMouseLeave={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 1 ? 0 : box))} onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 1 ? 2 : box))} class="icon-check-hover" src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png" alt="hovered-checkbox" />}
                                                {boxCheck[1] === 2 && <img onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 1 ? 0 : box))} class="icon-check-on" src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png" alt="active-checkbox" />}
                                            </span>
                                        </div>
                                        <img src="https://salt.tikicdn.com/ts/upload/fb/c5/dd/4f64c6f7f8c7a14485a7c2633027d62a.png" alt="Siêu rẻ" class="style-icon" style={{ height: '17px' }} />
                                        <div class="style-name">
                                            <span>Siêu rẻ</span>
                                        </div>
                                    </div>
                                    <div className="divider" style={{ height: '24px' }}></div>
                                    <div className="filter-option">
                                        <div class="style__CheckboxV2Container-sc-1ewjwu4-3 hqFudj" style={{ marginRight: '8px' }}>
                                            <span class="box">
                                                {boxCheck[2] === 0 && <img onMouseEnter={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 2 ? 1 : box))} class="icon-check-off" src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png" alt="default-checkbox" />}
                                                {boxCheck[2] === 1 && <img onMouseLeave={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 2 ? 0 : box))} onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 2 ? 2 : box))} class="icon-check-hover" src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png" alt="hovered-checkbox" />}
                                                {boxCheck[2] === 2 && <img onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 2 ? 0 : box))} class="icon-check-on" src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png" alt="active-checkbox" />}
                                            </span>
                                        </div>
                                        <img src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png" alt="freeship" class="style-icon" style={{ height: '17px' }} />
                                    </div>
                                    <div className="divider" style={{ height: '24px' }}></div>
                                    <div className="filter-option">
                                        <div class="style__CheckboxV2Container-sc-1ewjwu4-3 hqFudj" style={{ marginRight: '8px' }}>
                                            <span class="box">
                                                {boxCheck[3] === 0 && <img onMouseEnter={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 3 ? 1 : box))} class="icon-check-off" src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png" alt="default-checkbox" />}
                                                {boxCheck[3] === 1 && <img onMouseLeave={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 3 ? 0 : box))} onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 3 ? 2 : box))} class="icon-check-hover" src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png" alt="hovered-checkbox" />}
                                                {boxCheck[3] === 2 && <img onClick={() => setBoxCheck((prev) => boxCheck.map((box, index) => index === 3 ? 0 : box))} class="icon-check-on" src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png" alt="active-checkbox" />}
                                            </span>
                                        </div>
                                        <div class="stars" style={{ marginRight: '8px', transform: 'translateY(-1px)' }}>
                                            <div style={{ overflow: 'hidden' }}>
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
                                        <div class="style-name">
                                            <span>từ 4 sao</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-button">
                                <div style={{ marginLeft: '16px' }}></div>
                                <div className="sort-button-container">
                                    <div style={{ fontSize: '14px', lineHeight: '21px', color: 'rgb(128, 128, 137)', marginRight: '8px' }}>Sắp xếp</div>
                                    <div className="sort-button">
                                        <div style={{ marginRight: '8px' }}>Phổ biến</div>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg" alt="arrow"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <BookList />


        </>
    )
}

export default Content