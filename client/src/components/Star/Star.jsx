import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai'
import styled from "styled-components";

const Star = ({ stars }) => {

  const ratingStar=  Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (<FaStar className='icon' />)
                    : stars >= number ? (<FaStarHalfAlt classname='icon' />)
                    : (<AiOutlineStar classname='icon' />)
                }
            </span>
        )

    })
    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    padding-left:21.8vw;

    .icon {
      font-size: 1rem;
      color: #FFBF00;
    }

    .empty-icon {
      font-size: 1.5rem;
      color:black
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star
