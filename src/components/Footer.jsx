import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiOutlineWhatsApp } from "react-icons/ai";
import {FaCcVisa, FaApplePay, FaCcMastercard, FaCcPaypal} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container footer__container"}>
                <div className={"footer__items"}>
                    <div className={"footer__item"}>
                        <h2>Мы на связи</h2>
                        <p><a href="tel:+4733378901">+996 507 48 84 83</a></p>
                        <div className={"social-networks"}>
                            <a href={"/"}><AiFillInstagram className={"icon"}/></a>
                            <a href={"/"}><AiFillFacebook className = {"icon"} /></a>
                            <a href={"/"}><AiFillTwitterCircle className = {"icon"} /></a>
                            <a href={"/"}><AiOutlineWhatsApp className = {"icon"}/></a>
                        </div>
                    </div>
                    <div className={"footer__item"}>
                        <h2>способ оплаты</h2>
                        <a href={"#"}><FaCcVisa className = {"icon-pay"}/></a>
                        <a href={"#"}><FaApplePay className = {"icon-pay"}/></a>
                        <a href={"#"}><FaCcMastercard className = {"icon-pay"}/></a>
                        <a href={"#"}><FaCcPaypal className = {"icon-pay"}/></a>



                    </div>
                    <div className={"footer__item"}>
                        <div className={"subscribe-form"}>
                            <h3>Подпишитесь на нашу рассылку</h3>
                            <p>получайте специальное предложения и новости от нас первыми</p>
                            <form>
                                    <input type="text"  className={"input"}/>
                                    <button type={"submit"} className="button" >Подписаться</button>
                            </form>

                            <p className={"info"}>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</p>

                        </div>
                    </div>
                </div>

                <div className={"copy-right"}>KidsStore – магазин товаров для детей &copy; 2022</div>


            </div>
        </div>
    )
}
export default Footer;