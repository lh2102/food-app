import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/common-section/CommonSection.jsx";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

const AllFoods = () => {
    const [inputWidget, setInputWidget] = useState("");

 /*   const [pageNumber, setPageNumber] = useState(0);

    const productPerPage = 8;

    const visitedPage = pageNumber;

    // const displayPage = products.slice(visitedPage, visitedPage + productPerPage);
    // console.log(displayPage);

    // const pageCount = Math.ceil(products.length / productPerPage);

    console.log(products.length);
    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // };
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + productPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / productPerPage));
    }, [itemOffset, productPerPage]);

    // Invoke when user click to request another page.
    const changePage = (event) => {
        const newOffset = (event.selected * productPerPage) % products.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    */
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <Helmet title="Food">
            <div className="allFood__wrapper">
                <CommonSection title="All Foods"></CommonSection>

                <div className="container">
                    <section className="allFood__widget">
                        <div className="allFood__widget-search">
                            <input
                                type="text"
                                value={inputWidget}
                                placeholder="I'm looking for..."
                                onChange={(e) => setInputWidget(e.target.value)}
                            />
                            <button>
                                <i className="ri-search-line"></i>
                            </button>
                        </div>
                        <div className="allFood__widget-sort">
                            <select name="" id="">
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                            </select>
                        </div>
                    </section>
                    <section className="foods">
                        <div className="products">
                            {inputWidget
                                ? products
                                      .filter((item) =>
                                          item.title
                                              .toLowerCase()
                                              .includes(inputWidget.toLowerCase()),
                                      )
                                      .map((item) => (
                                          <ProductCard key={item.id} item={item}></ProductCard>
                                      ))
                                : products.map((item) => (
                                      <ProductCard key={item.id} item={item}></ProductCard>
                                  ))}
                        </div>
                        {/* <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel="Prev"
                                nextLabel="Next"
                                containerClassName="paginationBtn"
                            ></ReactPaginate>
                        </div> */}
                    </section>
                </div>
            </div>
        </Helmet>
    );
};

export default AllFoods;
