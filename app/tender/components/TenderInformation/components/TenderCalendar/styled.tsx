"use client"

import styled from "styled-components";

export const ItemCalendarWrapper = styled.div`
    display:flex;
    gap:12px;
    width:304px;
`
export const CalendarIcon = styled.div`
    flex-basis: 48px;
    height: 48px;
    background-color:#fff;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const CalendarDate = styled.div`
    font-size:16px;
    font-weight:600;
    color:#565656;
`

export const CalendarStatus = styled.div`
    font-size:14px;
    font-weight:400;
    line-height:12px;
    color:#999;
`

export const CalendarLine = styled.div`
    border-bottom:3px dotted #E30611;
`