import React from 'react'

const Popup = () => {
    return (
        <div className='popup'>
            <div className='popup-content'>
                <div class="sort-item-wrapper" style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
                    <div class="sort-item">Phổ biến</div>
                    <img src="https://salt.tikicdn.com/ts/upload/0a/3f/8c/35f5967924f138b30c5840d3907ba081.png" alt="selected"/>
                    <div class="styles__Divider-sc-1pqmdza-3 iCZDJU" style={{backgroundColor: 'rgb(235, 235, 240)', height: '1px', width: '160px'}}></div>
                </div>
                <div class="sort-item-wrapper">
                    <div class="sort-item">Bán chạy</div>
                    <div class="styles__Divider-sc-1pqmdza-3 iCZDJU" style={{backgroundColor: 'rgb(235, 235, 240)', height: '1px', width: '160px'}}></div>
                </div>
                <div class="sort-item-wrapper">
                    <div class="sort-item">Hàng mới</div>
                    <div class="styles__Divider-sc-1pqmdza-3 iCZDJU" style={{backgroundColor: 'rgb(235, 235, 240)', height: '1px', width: '160px'}}></div>
                </div>
                <div class="sort-item-wrapper" >
                    <div class="sort-item">Giá thấp đến cao</div>
                    <div class="styles__Divider-sc-1pqmdza-3 iCZDJU" style={{backgroundColor: 'rgb(235, 235, 240)', height: '1px', width: '160px'}}></div>
                </div>
                <div class="sort-item-wrapper" style={{ borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                    <div class="sort-item">Giá cao đến thấp</div>
                </div>
            </div>
        </div>
    )
}

export default Popup