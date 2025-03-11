import React, { useContext } from 'react'
import { dataContext } from '../App'

const LoginPage = () => {
    const { isAccountClicked, handleIsAccountClicked } = useContext(dataContext)
    if (isAccountClicked) {
        handleIsAccountClicked(true)
        return (
            <div className='full-container'>
                <div className='account-page-wrapper'>
                    <div className='account-page'>
                        <div className='close-button' onClick={() => handleIsAccountClicked(false)}>
                            <img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="icon" />
                        </div>
                        <div className='account-left'>
                            <div className='login-with-pass'>
                                <div className='login-with-phone'>
                                    <div className='account-heading'>
                                        <h4>Xin chào,</h4>
                                        <p>Đăng nhập hoặc Tạo tài khoản</p>
                                    </div>
                                    <form>
                                        <div className='input'>
                                            <input type="tel" name="tel" placeholder="Số điện thoại" maxlength="10" value=""></input>
                                        </div>
                                        <button>Tiếp Tục</button>
                                        <p className="login-with-email">Đăng nhập bằng email</p>
                                        <div className='social-login'>
                                            <p className='social-heading'>
                                                <span>Hoặc tiếp tục bằng</span>
                                            </p>
                                            <ul className='social-items'>
                                                <li className='social-item'>
                                                    <img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" width='58px' />
                                                </li>
                                                <li className='social-item'>
                                                    <img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" width='58px' />
                                                </li>
                                            </ul>
                                            <p className="note">
                                                <span>Bằng việc tiếp tục, bạn đã đọc và đồng ý với </span> 
                                                <a href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung">điều khoản sử dụng</a> 
                                                <span> và </span> 
                                                <a href="https://tiki.vn/bao-mat-thong-tin-ca-nhan">Chính sách bảo mật thông tin cá nhân</a>
                                                <span> của Tiki </span>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='account-right'>
                            <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" width="203" />
                            <div className='account-content'>
                                <h4>Mua sắm tại Tiki</h4>
                                <span>Siêu ưu đãi mỗi ngày</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    else return (<></>)

}

export default LoginPage