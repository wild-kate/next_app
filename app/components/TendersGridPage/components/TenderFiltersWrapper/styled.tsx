"use client"

import styled from "styled-components";

export type FiltersTitle = {
    small?:boolean
}

export const TenderFiltersMainWrapper = styled.div`
  flex-basis: 250px;
  display:flex;
  flex-direction: column;
  gap:8px;
`

export const TenderFiltersHeader = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:15px;
  padding: 24px 0 25px 0;
`

export const TenderFiltersTitleWrapper = styled.div`
  display: flex;
  gap:20px;
  align-items: center;
`

export const TenderFiltersTitle = styled.div<FiltersTitle>`
  font-size: ${({small})=> (small ? "16px" : "20px")};
  font-weight: 600;
`
export const TenderStatusFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:12px;
`

export const TenderFiltersSubTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap:2px;
`
export const TenderFiltersTreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const TenderFiltersSelectTitleWrapper = styled.div`
  display:flex;
  align-items: flex-start;
`

export const TenderFiltersSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding:19px 0 8px 0;
`

export const TenderFiltersRegionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:14px;
`

export const FiltersSelectSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap:8px;
  font-size: 14px;
  color:#565656;
  font-weight: 400;
`

export const TenderFiltersSelectWithTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:8px;
`

export const TenderFiltersTenderTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:8px;
  margin:16px 17px 12px 0;
`

export const TenderTypesWrapper = styled.div`
  display: flex;
  gap:6px;
  flex-wrap: wrap;
`

export const OneTenderTypeWrapper = styled.div`
  display: flex;
  gap:2px;
`

export const TenderTypesButtonsWrapper = styled.div`
  display: flex;
  gap:12px;
`