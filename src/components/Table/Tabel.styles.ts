import styled from "styled-components";
import { textColors, universalBorder } from "../../styles/Colors";

export const Row = styled.div`
    display: grid;
    grid-template-columns: 110px 1fr repeat(4, 200px);
    grid-template-rows: 60px;

    align-items: center;

    &:not(:last-child) {
        border-bottom: ${universalBorder};
    }
`

export const RowTitle = styled.div`
    display: grid;
    grid-template-columns: 110px 1fr repeat(4, 200px);
    grid-template-rows: 30px;
    align-items: start;
    border-bottom: ${universalBorder};
`

export const Cell = styled.p`
    margin-left: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.1px;
    font-feature-settings: 'clig' off, 'liga' off;
    color: ${textColors.white};
`