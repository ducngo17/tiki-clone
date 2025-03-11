import React, { useState } from 'react'


const SideBarNew = () => {
    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        if (selected === i) {
            //close item
            setSelected(null)
        }
        //open item
        else setSelected(i)
    }

    const categories = [
        {
            item: 'English Books',
            subitem: [
                'Art & Photography',
                'Biographies & Memoirs',
                'Business & Economics',
                'How-to - Self Help',
                'Children\'s Books',
                'Dictionary',
                'Education - Teaching',
                'Fiction - Literature',
                'Magazines',
                'Medical Books',
                'Parenting & Relationships',
                'Reference',
                'Science - Technology',
                'History, Politics & Social Sciences',
                'Travel & Holiday',
                'Cookbooks, Food & Wine',
            ],
        },
        {
            item: 'Sách tiếng Việt',
            subitem: [
                'Sách văn học',
                'Sách kinh tế',
                'Sách thiếu nhi',
                'Sách kỹ năng sống',
                'Nuôi dạy con',
                'Sách Giáo Khoa - Giáo Trình',
                'Sách Học Ngoại Ngữ',
                'Sách Tham Khảo',
                'Từ Điển',
                'Sách Kiến Thức Tổng Hợp',
                'Sách Khoa Học - Kỹ Thuật',
                'Sách Lịch sử',
                'Điện Ảnh - Nhạc - Họa',
                'Truyện Tranh, Manga, Comic',
                'Sách Tôn Giáo - Tâm Linh',
                'Sách Văn Hóa - Địa Lý - Du Lịch',
                'Sách Chính Trị - Pháp Lý',
                'Sách Nông - Lâm - Ngư Nghiệp',
                'Sách Công Nghệ Thông Tin',
                'Sách Y Học',
                'Tạp Chí - Catalogue',
                'Sách Tâm lý - Giới tính',
                'Sách Thường Thức - Gia Đình',
                'Thể Dục - Thể Thao'
            ]
        },
        {
            item: 'Văn phòng phẩm',
            subitem: [
                'Dụng Cụ Văn Phòng',
                'Bút - Viết các loại',
                'Bút Chì Màu - Bút Lông Màu - Sáp Màu',
                'Dụng Cụ Học Sinh',
                'Flashcards',
                'Sổ Tay Các Loại',
                'Tập vở các loại',
                'Văn Hóa Phẩm',
                'Thiết Bị Giáo Dục Trường Học',
                'Balo Học Sinh - Cặp học sinh',
                'Máy Tính Điện Tử',
                'Lịch',
                'Bút Kỹ Thuật',
                'Sản phẩm về giấy',
                'Thiết bị văn phòng',
                'Phấn - Bảng viết - Lau bảng'
            ]
        },
        {
            item: 'Quà lưu niệm',
            subitem: [
                'Thú Nhồi Bông',
                'Bookmark',
                'Bưu ảnh - Postcard',
                'Quà tặng trang sức',
                'Album',
                'Mô hình trang trí',
                'Sticker - Decal trang trí',
                'Ly - Cốc',
                'Kẹp Ảnh Gỗ',
                'Hộp quà',
                'Tượng',
                'Móc Khóa',
                'Đồng Hồ Cát',
                'Quả Cầu Tuyết',
                'Hộp Nhạc',
                'Phụ kiện - Vật liệu trang trí',
                'Quà tặng trang trí khác',
                'Gương mini',
                'Khung hình',
                'Thiệp',
                'Túi Quà'
            ]
        }





    ]

    return (
        <>
            <div className='tree-categories-container'>
                <div className='tree-title'>
                    Khám phá theo danh mục
                </div>
                <div className='tree-widget-container'>
                    {categories?.map((category, i) => (
                        <div className='tree-item-container'>
                            <div className='tree-item-style'>
                                <a href=''>
                                    <div className="tree-item-text">{category.item}</div>
                                </a>
                                <div className='tree-icon' onClick={() => toggle(i)}>
                                    <img src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp" style={selected === i ? { rotate: '180deg' } : { rotate: '0deg' }} />
                                </div>
                            </div>
                            <div className={selected === i ? 'tree-sub-item-show' : "tree-sub-item-hidden"}>{category?.subitem.map((sub) => <a className='subitem' style={{ display: 'block' }}>{sub}</a>)}</div>
                        </div>
                    ))}

                    {/* <div className='tree-item-container'>
                        <div className='tree-item-style'>
                            <a href=''>
                                <div className="tree-item-text">Sách tiếng việt</div>
                            </a>
                            <div className='tree-icon' onClick={toggle}>
                                <img src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp" />
                            </div>
                        </div>
                    </div>
                    <div className='tree-item-container'>
                        <div className='tree-item-style'>
                            <a href=''>
                                <div className="tree-item-text">Văn phòng phẩm</div>
                            </a>
                            <div className='tree-icon' onClick={toggle}>
                                <img src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp" />
                            </div>
                        </div>
                    </div>
                    <div className='tree-item-container' style={{ marginBottom: '0px' }}>
                        <div className='tree-item-style'>
                            <a href=''>
                                <div className="tree-item-text">Quà lưu niệm</div>
                            </a>
                            <div className='tree-icon' onClick={toggle}>
                                <img src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='advertisement'>
                <div className='ad'>
                    <a href="" className='ad-container'>
                        <div className='ad-pic'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e7/49/04/f148d28c1652086d0b7897048aed4c0c.png.webp"></img>
                        </div>
                        <div className='sponsor-badge'>Tài trợ</div>
                        <div className='ad-info'>
                            <div className='seller-info'>
                                <img src="https://vcdn.tikicdn.com/ts/seller/89/9e/7d/e292d266ae6cde91c045c23e97ad05de.jpg" />
                                <div className='seller-name'>GIVER BOOKS & MEDIA</div>
                            </div>
                            <div className="product-name">Marketing Bán Lẻ Đa Kênh - 9 Bí Quyết Tiếp Thị Tinh Gọn Tạo Ngay Dòng Tiền</div>
                            <div className='ad-rating'>
                                <div className='ad-stars'>
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
                                <div className='ad-seperator'></div>
                                <div style={{ fontSize: '10px', lineHeight: '15px', color: 'rgb(128, 128, 137)' }}>Đã bán 29</div>
                            </div>
                            <div className='ad-price-container'>
                                <div className='ad-price'>
                                    138.000 ₫
                                </div>
                                <div className='ad-discount'>
                                    -27%
                                </div>
                            </div>
                            <div className='ad-viewmore-btn'>Xem thêm</div>
                        </div>
                    </a>
                </div>
                <div className='ad'>
                    <a href="" className='ad-container'>
                        <div className='ad-pic'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e7/49/04/f148d28c1652086d0b7897048aed4c0c.png.webp"></img>
                        </div>
                        <div className='sponsor-badge'>Tài trợ</div>
                        <div className='ad-info'>
                            <div className='seller-info'>
                                <img src="https://vcdn.tikicdn.com/ts/seller/89/9e/7d/e292d266ae6cde91c045c23e97ad05de.jpg" />
                                <div className='seller-name'>GIVER BOOKS & MEDIA</div>
                            </div>
                            <div className="product-name">Marketing Bán Lẻ Đa Kênh - 9 Bí Quyết Tiếp Thị Tinh Gọn Tạo Ngay Dòng Tiền</div>
                            <div className='ad-rating'>
                                <div className='ad-stars'>
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
                                <div className='ad-seperator'></div>
                                <div style={{ fontSize: '10px', lineHeight: '15px', color: 'rgb(128, 128, 137)' }}>Đã bán 29</div>
                            </div>
                            <div className='ad-price-container'>
                                <div className='ad-price'>
                                    138.000 ₫
                                </div>
                                <div className='ad-discount'>
                                    -27%
                                </div>
                            </div>
                            <div className='ad-viewmore-btn'>Xem thêm</div>
                        </div>
                    </a>
                </div>
                <div className='ad'>
                    <a href="" className='ad-container'>
                        <div className='ad-pic'>
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e7/49/04/f148d28c1652086d0b7897048aed4c0c.png.webp"></img>
                        </div>
                        <div className='sponsor-badge'>Tài trợ</div>
                        <div className='ad-info'>
                            <div className='seller-info'>
                                <img src="https://vcdn.tikicdn.com/ts/seller/89/9e/7d/e292d266ae6cde91c045c23e97ad05de.jpg" />
                                <div className='seller-name'>GIVER BOOKS & MEDIA</div>
                            </div>
                            <div className="product-name">Marketing Bán Lẻ Đa Kênh - 9 Bí Quyết Tiếp Thị Tinh Gọn Tạo Ngay Dòng Tiền</div>
                            <div className='ad-rating'>
                                <div className='ad-stars'>
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
                                <div className='ad-seperator'></div>
                                <div style={{ fontSize: '10px', lineHeight: '15px', color: 'rgb(128, 128, 137)' }}>Đã bán 29</div>
                            </div>
                            <div className='ad-price-container'>
                                <div className='ad-price'>
                                    138.000 ₫
                                </div>
                                <div className='ad-discount'>
                                    -27%
                                </div>
                            </div>
                            <div className='ad-viewmore-btn'>Xem thêm</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SideBarNew