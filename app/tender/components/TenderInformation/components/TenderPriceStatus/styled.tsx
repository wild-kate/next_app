"use client"

import styled from "styled-components";

import {PriceStatusTypes} from "./index";

export const TenderPriceStatusWrapper = styled.div`
  border-radius: 6px;
  background-color: #FFF;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`

export const TenderStatusWrapper = styled.div<PriceStatusTypes>`
  background-color:#DAF5F2;
  font-size: ${({small})=>(small ? "14px" : "16px")};
  font-weight: 400;
  color:#001424;
  text-align: center;
  padding:${(props)=>(props.small ? "8px 0" : "12px 0")};
`

export const TenderPriceWrapper = styled.div<PriceStatusTypes>`
  padding: ${({small})=>(small ? "7px 12px" : "18px 24px")};
  display: flex;
  flex-direction: column;
  gap: ${({small})=>(small ? "8px" : "16px")} 16px;
`

export const TenderPrice = styled.div<PriceStatusTypes>`
  font-size: ${({small})=>(small ? "24px" : "36px")};
  font-weight: ${({small})=>(small ? 400 : 700)};
  color: #001424;
  text-align: center;
`

export const TenderSubStatus = styled.div<PriceStatusTypes>`
  font-size: ${({small})=>(small ? "14px" : "16px")};
  font-weight: 400;
  color:#999;
`

export const MarketingCategoryInformation = styled.div<PriceStatusTypes>`
  display: flex;
  padding: ${({ small }) => (small ? "7px 0 9px 0" : "11px 12px")};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #D4E7FD;
  font-size: ${({small})=>(small ? "14px" : "16px")};
`

export const RightBlockWrapper = styled.div<PriceStatusTypes>`
  width: ${(props)=>(props.small ? "216px" : "320px")};
  display: flex;
  flex-direction: column;
  gap: ${(props)=>(props.small ? "12px" : "24px")};
`