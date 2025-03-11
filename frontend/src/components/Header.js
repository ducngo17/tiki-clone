import { useContext } from "react"
import SearchBar from "./SearchBar"
import { dataContext } from "../App"

const Header = () => {
    const { handleIsAccountClicked } = useContext(dataContext)

    return (
        <header>
            <div className="header-container">
                <div className="header-sub-container">
                    <div className="logo">
                        <img src='https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png' alt="" preview={false} />
                        <span>Tốt & Nhanh</span>
                    </div>
                    <div className="main-bar">
                        <div className="top-bar">
                            <div className="search-bar">
                                <SearchBar />
                            </div>
                            <div className="menu-bar">
                                <div className="home">
                                    <img src="https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png" alt="header_menu_item_home" />
                                    <span>Trang chủ</span>
                                </div>
                                <div className="account" onClick={() => handleIsAccountClicked(true)}>
                                    <img src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="header_header_account_img" />
                                    <span>Tài khoản</span>
                                </div>
                                <div className="cart">
                                    <a>
                                        <div className="cart-inner">
                                            <div className="cart-icon">
                                                <img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-bar">
                            <div className="suggest-list">
                                <a>điện gia dụng</a>
                                <a>xe cộ</a>
                                <a>mẹ & bé</a>
                                <a>khỏe đẹp</a>
                                <a>nhà cửa</a>
                                <a>sách</a>
                                <a>thể thao</a>
                                <a>trốn lên mái nhà để khóc</a>
                            </div>
                            <div className="place-wrapper">
                                <div className="place">
                                    <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="header-icon-location" />
                                    <span className="title">Giao đến: </span>
                                    <span className='address'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header