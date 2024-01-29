"use client"

import {FC, PropsWithChildren} from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  padding: 10px 16px;
  display: flex;
  gap:4px;
  justify-content: center;
  background-color: #FFF;
  border-radius: 4px;
  align-items: center;
  height: min-content;
  min-height: 23px;
`

const CustomButton: FC<PropsWithChildren&{before?: JSX.Element, after?: JSX.Element}> = ({before,children,after}) => {
    return <StyledButton>{before}<div style={{margin:"6px 0px",fontSize:"14px",fontWeight:400,lineHeight:"16px"}}>{children}</div>{after}</StyledButton>
}

export default CustomButton