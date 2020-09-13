import React, {useState} from 'react';
import {DataTable, Text} from 'react-native-paper';
import {
  updateColumns,
  getRows,
  getRowsPages,
  formatDateForSummarize,
} from '../../../helpers/tableHelper';
import styles from './styles';

const TableDashboardChart = (props) => {
  const {data, config, viewHeight} = props;
  const columns = config.isSummarize ? config.summarizeColumns : config.columns;
  const dataWithFormatDateForSummarize = formatDateForSummarize(data, config);
  const updatedColumns = updateColumns(columns);

  const rows = getRows(
    config.isSummarize ? dataWithFormatDateForSummarize : data,
    updatedColumns,
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = Math.floor((viewHeight - (48 + 48)) / 48);
  const rowsPages = getRowsPages(rows, itemsPerPage);

  return (
    <DataTable>
      <DataTable.Header>
        {updatedColumns.map((columnHeader) => (
          <DataTable.Title
            key={columnHeader.id}
            numeric={columnHeader.type === 'number'}>
            <Text style={styles.cellTitle}>{columnHeader.title}</Text>
          </DataTable.Title>
        ))}
      </DataTable.Header>
      {rowsPages[page].map((row, index) => {
        return (
          <DataTable.Row key={index}>
            {Object.keys(row).map((key, innerIndex) => {
              return (
                <DataTable.Cell
                  numeric={updatedColumns[innerIndex].type === 'number'}
                  key={innerIndex}>
                  <Text style={styles.cellValue}>{row[key]}</Text>
                </DataTable.Cell>
              );
            })}
          </DataTable.Row>
        );
      })}
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(rows.length / itemsPerPage)}
        // eslint-disable-next-line no-shadow
        onPageChange={(page) => setPage(page)}
        label={`${page * itemsPerPage + 1}-${(page + 1) * itemsPerPage} of ${
          rows.length
        }`}
      />
    </DataTable>
  );
};

export default TableDashboardChart;
