import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App'
import axios from 'axios'

export const AutoComplete = ({ autoComplete, query }) => {
    // console.log(autoComplete)
    // console.log(query)
    const { handleIsInputClicked, handleIsFiltered, handleClick } = useContext(dataContext)
    const [filterResults, setFilterResults] = useState([])

    useEffect(() => {
        //if dont have if statement, the first time this callback called is when query = '' --> call wrong api --> error
        if (query !== '') {
            axios.get(`http://localhost:4000/products/search/${query}`, {
                mode: 'no-cors'
            })
                .then(response => {
                    setFilterResults(response.data)
                });
        }
    }, [query]);

    // console.log(filterResults)

    if (autoComplete === 0) {
        handleIsInputClicked(false)
        return (
            <>
            </>
        )
    }
    else
        if (autoComplete === 1) {
            handleIsInputClicked(true)
            return (
                <>
                    <div className='auto-complete'>
                        <div className="top-auto-complete">
                            <a className="top-item">
                                <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" />
                                <div>tư duy ngược</div>
                            </a>
                            <a className="top-item">
                                <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" />
                                <div>iphone 15 promax</div>
                            </a>
                            <a className="top-item">
                                <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" />
                                <div>đắc nhân tâm</div>
                            </a>
                            <div className="show-more">
                                <div>
                                    Xem thêm
                                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgb(13,92,182)" fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-auto-complete">
                            <div className="trending">
                                <div className="wrap-heading">
                                    <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" />
                                    <div>Tìm Kiếm Phổ Biến</div>
                                </div>
                                <div className="wrap-trending">
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/e3/2d/4e/9f6c54fc90512e4f452a94bd2a4236bc.jpg" />
                                        <span>nhiệt kế điện tử</span>
                                    </a>
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/98/32/e5/ef7c71795da862b2e2e8e77d41e3acb9.png" />
                                        <span>gumac</span>
                                    </a>
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d2/c0/6a/6aca67494d99b044932b036d5e0709cd.jpg" />
                                        <span>áo khoác nam mùa đông</span>
                                    </a>
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/1c/2d/46/bd0e590c21bffd449cf6259ba6e5d80c.jpg" />
                                        <span>lego</span>
                                    </a>
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/50/fb/9f/26564e8aca6ac1887b7e9d37db3e1b5c.jpg" />
                                        <span>giày anh khoa</span>
                                    </a>
                                    <a className="trending-item">
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bb/33/33/fbc76c9b1b7097faf2d31b6eb21ae5e4.png" />
                                        <span>bò</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hot-categories">
                                <div className="wrap-heading">
                                    <div>Danh Mục Nổi Bật</div>
                                </div>
                                <div className="wrap-hot">
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" />
                                            </div>
                                        </div>
                                        <span>Đồ Chơi - Mẹ & Bé</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png" />
                                            </div>
                                        </div>
                                        <span>Điện thoại - Máy Tính Bảng</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png" />
                                            </div>
                                        </div>
                                        <span>NGON</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png" />
                                            </div>
                                        </div>
                                        <span>Làm Đẹp - Sức Khỏe</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png" />
                                            </div>
                                        </div>
                                        <span>Điện Gia Dụng</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png" />
                                            </div>
                                        </div>
                                        <span>Thời trang nữ</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png" />
                                            </div>
                                        </div>
                                        <span>Thời trang nam</span>
                                    </a>
                                    <a className="hot-item">
                                        <div className="thumb-wrap">
                                            <div className="thumb">
                                                <img src="https://salt.tikicdn.com/ts/category/cf/ed/e1/5a6b58f21fbcad0d201480c987f8defe.png" />
                                            </div>
                                        </div>
                                        <span>Giày - Dép Nữ</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (autoComplete === 2) {
            handleIsInputClicked(true)

            // const titles = books?.map((book) => book.title)
            // const authors = books?.map((book) => book.author)
            // //take the first 3 elements in title list that have their first characters == query
            // const foundedTitles = titles.filter((title) => title.toLowerCase().indexOf(query.toLowerCase()) === 0).slice(0, 3)
            // const foundedAuthors = authors.filter((author) => author.toLowerCase().indexOf(query.toLowerCase()) === 0).slice(0.3)
            return (
                <>
                    <div className='auto-complete'>
                        <div className="top-auto-complete">
                            {
                                filterResults?.map((result) => (
                                    <>
                                        <a className="top-item">
                                            <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" />
                                            <div>{result}</div>
                                        </a>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </>
            )
        }

}
