"use client"

import styled from "styled-components";

export const MenuBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #E2E5EB;
  background-color: #FDFDFD;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  overflow:hidden;
`
export const MenuWrapper = styled.div`
  padding-top:12px;
  width:100%;
  position:absolute;
`

export const MenuRow = styled.div`
  display: flex;
  padding: 10px 16px;
  align-items: center;
  color:#001424;
  font-size: 14px;
  font-weight: 400;
  width:100%;
  &:hover {
    background-color: #c6c6c6; 
    cursor:pointer;
  }
`

export const MenuFunctionRow = styled.div`
  display: flex;
  gap:3px;
  padding:17px 0 3px 0;
  font-size: 10px;
  font-weight: 500;
  color:#AFB2B6;
  text-transform: uppercase;
  width: 100%;
  align-items: center;
`

export const LineMenuRow = styled.div`
  border-top:3px solid #F2F3F7;
  width: 100%;
`