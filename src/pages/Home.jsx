import React from "react";
import {ProductItem} from "../components";
import {StickySlider} from "../components/StickySlider";

const Home = () => {
    return (
            <div className={"container"}>
                <StickySlider/>
                <h2 className="content__title">Все товары</h2>
                <div className="content__items">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>

    )
}
export default Home;