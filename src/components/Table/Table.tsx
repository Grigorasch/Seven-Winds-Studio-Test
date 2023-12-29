import { Cell, Row, RowTitle } from "./Tabel.styles"
import { RowData } from "./Tabel.types"

export default function Table() {
    const testData: RowData = [1, 'Стройка', '20 000', '1 750', '150', '2 568 500']
    return (
        <>

        </>
    )
}

const TableTitle = (
    <RowTitle>
        <Cell>Уровень</Cell>
        <Cell>Наименование работ</Cell>
        <Cell>Основная з/п</Cell>
        <Cell>Оборудование</Cell>
        <Cell>Накладные расходы</Cell>
        <Cell>Сметная прибыль</Cell>
    </RowTitle>
)


// function TabelRow({preparedData}: {preparedData: }) {
//     return (
//         <Row>
//             <img />
//             <Cell></Cell>
//             <Cell></Cell>
//             <Cell></Cell>
//             <Cell></Cell>
//             <Cell></Cell>
//             <Cell></Cell>
//         </Row>
//     )
// }