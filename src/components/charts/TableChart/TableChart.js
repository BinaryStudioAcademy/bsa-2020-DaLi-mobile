import React, {useState} from 'react';
import styles from './styles';
import {updateColumns, getRows, getRowsPages} from '../../../helpers';
import {DataTable} from 'react-native-paper';

const TableChart = (props) => {
  const {data, config, viewHeight} = props;
  const updatedColumns = updateColumns(config.columns);
  const rows = getRows(
    data,
    updatedColumns,
    config.sort.Order,
    config.sort.OrderBy,
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = Math.floor((viewHeight - (48 + 48)) / 48);
  const rowsPages = getRowsPages(rows, itemsPerPage);

  return (
    <DataTable>
      <DataTable.Header>
        {updatedColumns.map((columnHeader) => (
          <DataTable.Title key={columnHeader.id} numeric>
            {columnHeader.title}
          </DataTable.Title>
        ))}
      </DataTable.Header>
      {rowsPages[page].map((row, index) => {
        return (
          <DataTable.Row key={index} style={styles.tableRow}>
            {Object.keys(row).map((key, innerIndex) => {
              return (
                <DataTable.Cell numeric key={innerIndex}>
                  {row[key]}
                </DataTable.Cell>
              );
            })}
          </DataTable.Row>
        );
      })}
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(rows.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${page * itemsPerPage + 1}-${(page + 1) * itemsPerPage} of ${
          rows.length
        }`}
      />
    </DataTable>
  );
};

export default TableChart;
