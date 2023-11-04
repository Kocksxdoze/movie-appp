import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <hr className='footerLine' />
            <div className='footer'>
                <div className='footerMain'>
                    <img className='logo' src='/img/logo.png' />
                    <p>Filmlarga bo'lgan huquqlar ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot uchun taqdim etiladi. Ma'muriyat foydalanuvchilar tomonidan joylashtirilgan noqonuniy materiallar uchun javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi
                    </p>
                </div>
                <div className='footerNavigation'>
                    <div className='footernav'>
                        <h4>Pages</h4>
                        <ul>
                            <li>The most watched movies</li>
                            <li>Top Rated Movies</li>
                            <li>Movies</li>
                            <li>Serials</li>
                        </ul>
                    </div>
                    <div className='footernav'>
                        <h4>Our social networks</h4>
                        <ul>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                    <div className='footernav'>
                        <h4>For reference</h4>
                        <ul>
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Whatsapp</li>
                            <li>Skype</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer