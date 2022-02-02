import React from 'react';

import FirstImg from "../assets/1st.jpg"
import FirstHeading from "../assets/1st_heading.png"

import SecondImg from "../assets/2nd.png"
import SecondHeading from "../assets/2nd_heading.png"

import ThirdImg from "../assets/3rd.png"
import ThirdHeading from "../assets/3rd_heading.png"

import FourthImg from "../assets/4th.jpg"
import FourthHeading from "../assets/4th_heading.png"

function Articles() {
    return (
        <section className='article_section'>
            <article className="articles">
                <div className="article_text">
                    <img src={FirstHeading} alt="" />
                    <div className="article_heading">
                        EVERYDAY CHANGES. <br /> MEANINGFUL IMPACT.
                    </div>
                    <div className="article_subheading">
                        creating meaningful impact at every step.
                    </div>
                    <p className="article_details">
                        At Samsung, we believe our choices today determine a sustainable tomorrow.
                        For more than 20 years, we{"'"}ve been reimagining our products to build
                        environmental sustainability into everything we do, through innovative
                        product design and packaging, as well as energy-saving technology and
                        recycling. We{"'"}ve diverted 4.5 million metric tons of e-waste from landfills
                        since 2008, with the goal of being the #1 maker of sustainable products by
                        2025. So, join us. We can do more together.
                    </p>
                </div>
                <div className="article_img">
                    <img src={FirstImg} alt="" />
                </div>
            </article>

            <article className="articles">
                <div className="article_text order2">
                    <img src={SecondHeading} alt="" style={{ width: "150px" }} />
                    <div className="article_heading">
                        WINSTON WITH LOVE
                    </div>
                    <div className="article_subheading">
                        presented by the house of harry winston
                    </div>
                    <p className="article_details">
                        Harry Winston explores the intense feelings of love through
                        The House{"'"}s latest high jewelry collection, Winston with Love,
                        chronicling the extraordinary phases of a classic love story.
                        Forged in colorful gemstones and diamonds, the jewelry designs
                        depict the expression of love growing stronger and more meaningful
                        with each passing stage. Beginning with the first light of affection,
                        to a passionate obsession, to the ultimate vow and an eternity
                        together, the collection offers a modern interpretation of signature
                        House design codes and consists of 39 pieces.
                    </p>
                </div>
                <div className="article_img order1">
                    <img src={SecondImg} alt="" />
                </div>
            </article>

            <article className="articles">
                <div className="article_text">
                    <img src={ThirdHeading} alt="" style={{ width: "120px" }} />
                    <div className="article_heading">
                        RÉMY MARTIN XO, THE ICON
                    </div>
                    <div className="article_subheading">
                        the opulence of an extra-old cognac
                    </div>
                    <p className="article_details">
                        ARémy Martin XO is our Cellar Master{"'"}s signature cognac, expertly
                        blending up to 400 different eaux-de-vie. The Cellar Master{"'"}s art
                        of blending allows us to express the full aromatic complexity of
                        this XO Cognac Fine Champagne. This holiday, enjoy Rémy Martin XO
                        neat, on ice, or mixed into an Old Fashioned. For an ideal pairing,
                        Rémy Martin XO can be accompanied with a cigar or chocolate.
                    </p>
                </div>
                <div className="article_img">
                    <img src={ThirdImg} alt="" />
                </div>
            </article>

            <article className="articles">
                <div className="article_text order2">
                    <img src={FourthHeading} alt="" />
                    <div className="article_heading">
                        FOXTROT
                    </div>
                    <div className="article_subheading">
                        we don{"'"}t just sell food; we obsess over it.
                    </div>
                    <p className="article_details">
                        That means seeking out the most ambitious makers from around
                        the country to collab and cook with; that means sourcing the
                        best ingredients to create crave-worthy new offerings of our
                        own; and above all, that means bringing the best of small
                        business, local makers, and culinary know-how to you—even when
                        that includes taste-testing 900 nut butters until we find the
                        best one.
                    </p>
                </div>
                <div className="article_img order1">
                    <img src={FourthImg} alt="" />
                </div>
            </article>
        </section>
    );
}

export default Articles;