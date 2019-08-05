import { createGlobalStyle } from "styled-components"
import theme from "../../theme"

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
    &:focus{
      outline: 0;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.colors.black};
    &:hover {
      color: ${theme.colors.black};
    }
    font-family: "georgia", Helvetica, Arial, sans-serif;
  }
  a.u-txt-underline {
    border-bottom: 1px dotted currentColor;
    }
  p {
    margin: 0;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.manataee};
    font-size: ${theme.utils.em(theme.sizes.baseFontSize)};
    font-family: 'Bitter', georgia, Helvetica, Arial, sans-serif;
  }
  body, p {
    line-height: ${theme.utils.em(theme.sizes.lineHeight)};
  }
  p {
    margin-bottom: ${theme.utils.em(theme.sizes.lineHeight)};
    font-family: 'Bitter', georgia, Helvetica, Arial, sans-serif;
  }
  img, embed, object, video {
    max-width: 100%;
    height: inherit;
    _width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    text-rendering: optimizelegibility;
    font-weight: 600;
    margin: 0;
    font-family: 'Playfair Display', georgia, sans-serif;
    color: ${theme.colors.blackPearl};
  }
  ul, ol {
    padding-left: 0;
  }
  h1 {
    font-size: ${theme.utils.em(theme.sizes.scale.xl)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xl
    )};
  }
  h2 {
    font-size: ${theme.utils.em(theme.sizes.scale.lg)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.lg
    )};
  }
  h3 {
    font-size: ${theme.utils.em(theme.sizes.scale.md)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.md
    )};
  }
  h4 {
    font-size: ${theme.utils.em(theme.sizes.scale.sm)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.sm
    )};
  }
  h5 {
    font-size: ${theme.utils.em(theme.sizes.scale.xs)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xs
    )};
  }
  h6 {
    font-size: ${theme.utils.em(theme.sizes.scale.xxs)};
    margin-bottom: ${theme.utils.em(
      theme.sizes.lineHeight,
      theme.sizes.scale.xxs
    )};
  }
  .react-images__header{
    opacity: 1 !important;
    padding-top: 0px !important;
    svg{
      margin-top: -24px;
    }
  }
  .gatsby-image-wrapper{
    margin: 0 !important;
  }

  .featured_image{
    width: 85%;
  }
  .react-images__positioner{
    z-index: 999 !important;
  }

  /* React Slick */
  .slick-track{
    display: flex !important;
    align-items: center !important;
  }

  .slick-prev, .slick-next{
    width: auto !important;
    height: auto !important;
  }

  .slick-prev:before, .slick-next:before{
    color: black !important;
    display: none;
    font-size: 25px !important;
  }
  .slick-next, .slick-prev{
    display: flex;
    justify-content: flex-end;
  }
  .slick-prev{
    z-index: 999 !important;
    left: 0 !important;
  }
  .slick-next{
    right: 0 !important;
    z-index: 999 !important;
  }
  .span-2{
    grid-column: span 2;
    .gatsby-image-wrapper{
      height: 385px;
      img{
        object-fit: contain !important;
      }
    }
  }
  .logo-close-btn{
    right: 20px;
    top: 30px;
    background: transparent;
    border: none;
    outline: 0;
    position: absolute;
    cursor: pointer;
    svg{
      width: 32px;
      height: 32px;
      path{
        color: #6d6e71;
      }
    }
  }
  .ReactModal__Body--open{
    overflow: hidden;
  }
  .react-images__positioner{
    display: block !important;
    margin-top: 30px;
  }
  /* React Modal */
  .ReactModal__Overlay{
    z-index: 9999;
  }
  .react-images__blanket{
    background-color: white !important;
    z-index: 999 !important;
  }
  
  .react-images__header{
    background: transparent !important;
  }
  .react-images__header_button--close, .react-images__header_button--fullscreen{
    svg{
      path{
        color: #6d6e71 !important;
      }
    }
  }
  .ReactModal__Content{
    border: none !important;
  }

  @media(min-width: 767px){
    .ReactModal__Content{
      width: 50%;
    }
    .react_video_player{
      height: 500px !important;
    }
  }
  @media(max-width: 768px){
    .span-2{
      grid-column: span 1;
    }
    .span-2 .gatsby-image-wrapper{
      height: 200px !important;
    }
    .gatsby-image-wrapper picture img{
      object-fit: contain !important;
    }
    .ReactModal__Overlay{
      padding: 30px !important;
    }
    .ReactModal__Content{
      width: 100%;
      height: 50%;
      padding: 10px !important;
    }
    .react_video_player{
      min-height: inherit !important;
    }
    .react-images__dialog{
      height: 100%;
    }
    .react-images__track, .react-images__frame{
      height: 100% !important;
    }
    .react-images__view-wrapper{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`
