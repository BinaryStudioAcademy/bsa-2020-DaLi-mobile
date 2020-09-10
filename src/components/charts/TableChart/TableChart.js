import React from 'react';
import {DataTable, Text} from 'react-native-paper';
import {
  updateColumns,
  getRows,
  formatDateForSummarize,
} from '../../../helpers/tableHelper';
import styles from './styles';

const TableChart = (props) => {
  const {data, config} = props;
  const columns = config.isSummarize ? config.summarizeColumns : config.columns;
  const dataWithFormatDateForSummarize = formatDateForSummarize(data, config);
  const updatedColumns = updateColumns(columns);
  const rows = getRows(
    config.isSummarize ? dataWithFormatDateForSummarize : data,
    updatedColumns,
  );

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
      {rows.map((row, index) => {
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
    </DataTable>
  );
};

export default TableChart;
