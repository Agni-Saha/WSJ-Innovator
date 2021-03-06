import React, { useEffect } from 'react';
import gsap from "gsap"

import video from "../assets/2021_WSJ_Innovators_trim.mp4"
import signature from "../assets/signature-editor-in-chief.png"
import left_img from "../assets/left_img.png"
import right_img from "../assets/right_img.png"

import FirstHeading from "../assets/1st_heading_white.png"
import SecondHeading from "../assets/2nd_heading_white.png"
import ThirdHeading from "../assets/3rd_heading_white.png"
import FourthHeading from "../assets/4th_heading_white.png"
import EndingFooter from "../assets/ending_footer.png"

import FbIcon from "../assets/fb_icon.svg"
import InstaIcon from "../assets/insta_icon.svg"
import TwitterIcon from "../assets/twitter_icon.svg"

import Articles from './Articles';

function Body() {

    useEffect(() => {

        let cursor = document.querySelector(".video_button svg");
        let videoElement = document.querySelector(".video_wrapper video")

        let setCursorPosition = function (e) {
            cursor.style.display = "block"
            cursor.style.opacity = "1"
            let xPosition = (e.clientX - cursor.clientWidth / 2) + 84 + "px";
            let yPosition = (e.clientY - cursor.clientHeight / 2) - 524 + "px";
            cursor.style.transform =
                "translate(" + xPosition + "," + yPosition + ") scale(1)";
            return {
                x: xPosition,
                y: yPosition
            };
        };

        videoElement.addEventListener("mousemove", e => setCursorPosition(e))
        videoElement.addEventListener("mouseout", () => {
            cursor.style.display = "none"
            cursor.style.opacity = "0"
        })

        let scrolled

        let tweenLeft = gsap.from(".sliding_banner .sliding_text_container.left div", {
            duration: 2,
            x: -1280,
            ease: "expo.inOut"
        })
        let tweenRight = gsap.from(".sliding_banner .sliding_text_container.right div", {
            duration: 2,
            x: 1280,
            ease: "expo.inOut",
            delay: 0.5
        })

        tweenLeft.pause()
        tweenRight.pause()

        window.addEventListener("scroll", () => {
            scrolled = document.querySelector(".sliding_banner").getBoundingClientRect()
            if (scrolled.top <= 410) {
                tweenLeft.play()
                tweenRight.play()
            }
        })

    }, [])

    return (
        <div className='scrollBody'>
            <div className="video_wrapper">
                <video autoPlay muted loop>
                    <source src={video} />
                </video>
            </div>
            <svg className='scroll_down_icon' width="46" height="45" viewBox="0 0 46 45" fill="none">
                <path d="M45.03 22.03L23 44.058.97 22.029" stroke="#fff" />
            </svg>

            <div className="video_button">
                <svg width="293" height="130" viewBox="0 0 293 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.1159 59.249C60.1159 58.737 60.7167 58.4818 61.0685 58.8432L70.3425 65.6034C70.5613 65.8269 70.5613 66.1898 70.3425 66.4133L61.0685 73.1735C60.7167 73.5349 60.1159 73.2781 60.1159 72.7677V59.249Z" fill="white" />
                    <path d="M64.9862 0.0275116C29.1183 0.0275116 0 29.1458 0 65.0138C0 100.882 29.1183 130 64.9862 130C100.854 130 129.972 100.882 129.972 65.0138C129.972 29.1458 100.854 0.0275116 64.9862 0.0275116ZM64.9862 2.26842C99.6172 2.26842 127.732 30.3828 127.732 65.0138C127.732 99.6447 99.6172 127.759 64.9862 127.759C30.3553 127.759 2.24091 99.6447 2.24091 65.0138C2.24091 30.3828 30.3553 2.26842 64.9862 2.26842Z" fill="white" />
                    <path d="M105.325 60.5868H104.27L101.331 70.1017L98.4922 60.5868H97.0514L94.341 70.116L91.4023 60.5868H90.3467L93.6562 70.9148H95.0828L97.7646 61.3999L100.589 70.9148H102.001L105.325 60.5868ZM118.366 70.9148L112.931 60.5868H111.562L106.098 70.9148H107.168L108.609 68.233H115.884L117.296 70.9148H118.366ZM115.413 67.3342H109.08L112.19 61.4855H112.318L115.413 67.3342ZM129.755 61.4855V60.5868H118.957V61.4855H123.892V70.9148H124.82V61.4855H129.755ZM143.02 62.5554C142.44 61.8136 141.698 61.2474 140.795 60.8578C139.891 60.4584 138.85 60.2587 137.671 60.2587C136.824 60.2587 136.035 60.3826 135.303 60.6296C134.57 60.8676 133.928 61.2144 133.377 61.6709C132.74 62.1943 132.264 62.7934 131.95 63.4684C131.627 64.1531 131.465 64.9047 131.465 65.7223C131.465 66.7592 131.708 67.6766 132.193 68.4755C132.668 69.2743 133.357 69.9118 134.261 70.387C135.289 70.9291 136.467 71.2001 137.798 71.2001C138.988 71.2001 140.019 71.0191 140.895 70.6581C141.76 70.297 142.45 69.7781 142.963 69.1031L142.193 68.6039C141.679 69.1932 141.052 69.6265 140.31 69.902C139.558 70.1775 138.678 70.3157 137.671 70.3157C136.082 70.297 134.822 69.8735 133.891 69.0461C132.949 68.2089 132.468 67.1015 132.45 65.7223C132.45 64.3056 133.006 63.1545 134.119 62.2701C134.575 61.909 135.108 61.6281 135.717 61.4284C136.325 61.2287 136.976 61.1289 137.671 61.1289C138.621 61.1289 139.468 61.2715 140.21 61.5568C140.961 61.8421 141.622 62.2843 142.193 62.8835L143.02 62.5554ZM157.284 70.9148V60.5868H156.357V64.9947H147.312V60.5868H146.385V70.9148H147.312V65.8935H156.357V70.9148H157.284ZM174.098 70.9148V70.0161H165.439C165.629 69.3697 165.919 68.8276 166.309 68.3899C166.709 67.9432 167.222 67.5723 167.85 67.2772C168.335 67.0587 168.848 66.8635 169.391 66.6923C169.923 66.5309 170.475 66.3687 171.045 66.2073C171.987 65.922 172.686 65.5609 173.142 65.1231C173.589 64.6764 173.813 64.096 173.813 63.3828C173.793 62.517 173.399 61.8136 172.629 61.2715C171.858 60.7392 170.803 60.4628 169.462 60.4441C168.663 60.4441 167.897 60.577 167.165 60.8435C166.423 61.1101 165.696 61.514 164.983 62.0561L165.539 62.7408C166.157 62.2558 166.789 61.8947 167.436 61.6567C168.073 61.4284 168.743 61.3143 169.448 61.3143C170.503 61.3241 171.321 61.5185 171.901 61.8992C172.481 62.2701 172.776 62.7694 172.786 63.397C172.786 64.0434 172.462 64.5525 171.816 64.9234C171.388 65.1615 170.907 65.3558 170.375 65.5083C169.852 65.6608 169.305 65.8319 168.734 66.0218C168.001 66.2688 167.351 66.5541 166.78 66.8778C166.209 67.1916 165.715 67.624 165.296 68.1759C165.03 68.5468 164.82 68.9605 164.669 69.417C164.526 69.8637 164.435 70.3629 164.398 70.9148H174.098ZM186.8 65.7508C186.8 64.8664 186.61 64.0434 186.229 63.2829C185.849 62.5313 185.307 61.8947 184.603 61.3714C184.185 61.0673 183.732 60.8337 183.247 60.6724C182.762 60.5199 182.263 60.4441 181.75 60.4441C181.236 60.4441 180.737 60.5199 180.252 60.6724C179.767 60.8337 179.316 61.0673 178.897 61.3714C178.203 61.8849 177.665 62.5224 177.285 63.2829C176.905 64.0345 176.714 64.8565 176.714 65.7508C176.714 66.6451 176.905 67.4671 177.285 68.2187C177.665 68.9792 178.203 69.6212 178.897 70.1445C179.316 70.4485 179.767 70.6821 180.252 70.8435C180.737 71.0049 181.236 71.086 181.75 71.086C182.273 71.086 182.772 71.0049 183.247 70.8435C183.724 70.6821 184.17 70.4485 184.588 70.1445C185.293 69.6212 185.835 68.9792 186.215 68.2187C186.605 67.4671 186.8 66.6451 186.8 65.7508ZM185.858 65.7508C185.858 66.4926 185.706 67.1773 185.402 67.805C185.098 68.4425 184.66 68.9792 184.089 69.417C183.757 69.6738 183.39 69.869 182.991 70.0019C182.591 70.1445 182.178 70.2158 181.75 70.2158C181.322 70.2158 180.913 70.149 180.523 70.0161C180.123 69.8833 179.758 69.6836 179.424 69.417C178.854 68.9792 178.417 68.4469 178.112 67.8193C177.808 67.1916 177.656 66.5024 177.656 65.7508C177.656 65.0188 177.808 64.3385 178.112 63.7109C178.417 63.0832 178.854 62.5509 179.424 62.1132C179.767 61.8564 180.133 61.6611 180.523 61.5283C180.913 61.3954 181.322 61.3286 181.75 61.3286C182.169 61.3286 182.577 61.3954 182.976 61.5283C183.367 61.6611 183.733 61.8564 184.075 62.1132C184.645 62.5509 185.083 63.0787 185.387 63.6966C185.701 64.3243 185.858 65.009 185.858 65.7508ZM198.798 70.9148V70.0161H190.138C190.328 69.3697 190.618 68.8276 191.009 68.3899C191.408 67.9432 191.922 67.5723 192.549 67.2772C193.034 67.0587 193.548 66.8635 194.09 66.6923C194.622 66.5309 195.174 66.3687 195.745 66.2073C196.686 65.922 197.385 65.5609 197.842 65.1231C198.288 64.6764 198.512 64.096 198.512 63.3828C198.493 62.517 198.099 61.8136 197.328 61.2715C196.558 60.7392 195.502 60.4628 194.161 60.4441C193.362 60.4441 192.597 60.577 191.865 60.8435C191.123 61.1101 190.395 61.514 189.682 62.0561L190.238 62.7408C190.856 62.2558 191.488 61.8947 192.136 61.6567C192.772 61.4284 193.443 61.3143 194.147 61.3143C195.203 61.3241 196.02 61.5185 196.601 61.8992C197.18 62.2701 197.475 62.7694 197.485 63.397C197.485 64.0434 197.161 64.5525 196.515 64.9234C196.087 65.1615 195.607 65.3558 195.074 65.5083C194.551 65.6608 194.004 65.8319 193.434 66.0218C192.701 66.2688 192.05 66.5541 191.479 66.8778C190.909 67.1916 190.414 67.624 189.996 68.1759C189.729 68.5468 189.52 68.9605 189.368 69.417C189.226 69.8637 189.135 70.3629 189.097 70.9148H198.798ZM203.297 70.9148V60.5868H202.37C201.837 60.9675 201.286 61.2715 200.715 61.4998V62.213L202.37 61.457V70.9148H203.297ZM222.096 70.9148L216.661 60.5868H215.292L209.828 70.9148H210.898L212.339 68.233H219.614L221.026 70.9148H222.096ZM219.143 67.3342H212.81L215.919 61.4855H216.048L219.143 67.3342ZM237.85 60.5868H236.795L233.856 70.1017L231.017 60.5868H229.577L226.866 70.116L223.928 60.5868H222.872L226.181 70.9148H227.608L230.29 61.3999L233.114 70.9148H234.527L237.85 60.5868ZM250.892 70.9148L245.457 60.5868H244.087L238.623 70.9148H239.693L241.134 68.233H248.409L249.822 70.9148H250.892ZM247.939 67.3342H241.605L244.715 61.4855H244.843L247.939 67.3342ZM264.135 70.9148L260.997 66.678C262.004 66.6023 262.775 66.3027 263.308 65.7793C263.84 65.2658 264.107 64.5623 264.107 63.6681C264.097 62.7168 263.816 61.9661 263.265 61.4142C262.723 60.8721 261.967 60.5966 260.997 60.5868H253.208V70.9148H254.135V66.678H259.77L263.008 70.9148H264.135ZM260.925 65.7793H254.135V61.4855H260.583C261.419 61.4855 262.043 61.6611 262.452 62.0133C262.87 62.3655 263.08 62.9022 263.08 63.6253C263.08 64.31 262.894 64.8378 262.523 65.2087C262.142 65.5894 261.61 65.7793 260.925 65.7793ZM273.746 60.5868H267.598V70.9148H274.089C274.802 70.9148 275.472 70.7909 276.1 70.5439C276.718 70.3059 277.265 69.9546 277.741 69.4883C278.216 69.0131 278.582 68.471 278.839 67.8621C279.086 67.2442 279.21 66.5782 279.21 65.8649C279.191 64.22 278.701 62.9307 277.741 61.999C276.78 61.0763 275.448 60.6055 273.746 60.5868ZM274.16 70.0161H268.525V61.4855H273.889C275.173 61.5042 276.2 61.9036 276.97 62.6838C277.731 63.4639 278.121 64.5097 278.14 65.8221C278.14 66.3927 278.045 66.9304 277.855 67.4341C277.665 67.9378 277.394 68.3854 277.042 68.775C276.661 69.1843 276.229 69.4928 275.744 69.7023C275.258 69.9118 274.731 70.0161 274.16 70.0161ZM291.573 62.2273L292.23 61.514C291.621 61.1048 290.903 60.8052 290.076 60.6153C289.238 60.4254 288.287 60.33 287.223 60.33C285.605 60.3398 284.37 60.6055 283.514 61.1289C282.667 61.6522 282.239 62.3797 282.23 63.3114C282.23 63.825 282.353 64.2485 282.601 64.5811C282.848 64.9234 283.228 65.19 283.742 65.3799C284.207 65.5511 284.773 65.6652 285.439 65.7223C286.096 65.7891 286.856 65.8364 287.722 65.8649C289.129 65.9122 290.18 66.0834 290.874 66.3785C291.568 66.6638 291.916 67.1675 291.916 67.8906C291.916 68.6422 291.535 69.2271 290.775 69.6452C290.023 70.0634 288.925 70.2774 287.479 70.2872C286.575 70.2872 285.719 70.1686 284.912 69.9305C284.103 69.7023 283.314 69.3412 282.544 68.8464L282.001 69.631C282.724 70.1347 283.561 70.5154 284.512 70.7722C285.463 71.029 286.518 71.1573 287.679 71.1573C289.41 71.1475 290.726 70.8533 291.631 70.2729C292.534 69.6925 292.99 68.8794 293 67.8335C293 67.2816 292.876 66.8162 292.629 66.4355C292.381 66.0548 292.001 65.7553 291.488 65.5368C290.974 65.3273 290.365 65.19 289.662 65.1231C288.958 65.0563 288.154 65.009 287.251 64.9805C285.948 64.9421 284.963 64.795 284.298 64.5383C283.642 64.2913 283.314 63.8437 283.314 63.1973C283.314 62.5598 283.651 62.0704 284.327 61.728C285.002 61.3758 285.986 61.2002 287.28 61.2002C288.069 61.2002 288.815 61.2813 289.519 61.4427C290.233 61.6041 290.917 61.8662 291.573 62.2273Z" fill="white" />
                </svg>
            </div>

            <div className="full_body">
                <section className="editor_wrapper">
                    <div className="editor_letter_inner">
                        <p>
                            Launched in 2011, <em>WSJ. Magazine{"'"}s</em> Innovator
                            Awards recognizes groundbreaking talents from a range of
                            disciplines, including fashion, art, entertainment, architecture,
                            design, technology, the performing arts, philanthropy, food,
                            literature and more.
                        </p>
                        <p>As an annual event, it has blossomed into one of the <em>Wall
                            Street Journal{"'"}s</em> signature franchises; the combination
                            of special-edition print issue, red-carpet gala and multiple digital
                            extensions reaches WSJ.{"'"}s largest global audience every year.
                        </p>
                        <p>As an expression of editorial mission, it encapsulates everything
                            readers have come to expect from the award-winning magazine: a
                            gathering of ambitious, forward-looking minds, whose originality
                            has led to meaningful change and offers inspiration to others.
                        </p>

                        <div className="editor_signature">
                            <div className="text-center">
                                Editor in Chief, Kristina O{"'"}Neill
                                <br />
                                <img
                                    src={signature}
                                    className="editor_signature_img"
                                    alt="" loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sliding_banner">
                    <div className="sliding_text_container left">
                        <div>Celebrating</div>
                    </div>
                    <div className="sliding_text_container right">
                        <div>Innovation</div>
                    </div>
                    <div className='gallery_middle'>
                        View Gallery
                    </div>
                </section>

                <section className='img_banner'>
                    <div className="img_container">
                        <img className='left_img' src={left_img} alt="" />
                        <img className='right_img' src={right_img} alt="" />
                    </div>
                    <div className="honoree_text">
                        <h1>
                            ALL WSJ. INNOVATORS
                        </h1>
                        <p className='honoree_paragraph'>
                            From architects and artists to philanthropists, designers
                            and entertainers, WSJ. Innovators have been sharing their
                            inspiring stories since 2011.
                        </p>
                        <span className='honoree_span'>
                            View All honorees
                        </span>
                    </div>
                </section>

                <Articles />

                <footer className='body_footer'>
                    <section className="sponsor_section">
                        <div className='sponsor_tagline'>
                            presenting sponsors
                        </div>
                        <div className="sponsor_img_container">
                            <img src={FirstHeading} alt="" />
                            <img src={SecondHeading} alt="" />
                            <img src={ThirdHeading} alt="" />
                        </div>
                        <div className='sponsor_tagline'>
                            participating sponsor
                        </div>
                        <div className="sponsor_img_container">
                            <img src={FourthHeading} alt="" />
                        </div>
                    </section>

                    <section className="ending_footer">
                        <div className="ending_img">
                            <img src={EndingFooter} alt="" />
                        </div>
                        <div className="legal_section">
                            <div className="hashtag">
                                #WSJINNOVATORS
                            </div>
                            <div className="social_icons">
                                <img src={FbIcon} alt="" />
                                <img src={InstaIcon} alt="" />
                                <img src={TwitterIcon} alt="" />
                            </div>
                            <div className="legal_links">
                                <span>cookie notice</span> |
                                <span>privacy notice</span>
                            </div>
                            <div className="copyrights">
                                ?? 2021 dow jones {"&"} company, inc. all rights reserved.
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </div>
    );
}

export default Body;