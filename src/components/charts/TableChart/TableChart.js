import React from 'react';
import {DataTable} from 'react-native-paper';
import {updateColumns, getRows} from '../../../helpers/tableHelper';

const TableChart = (props) => {
  const {data, config} = props;
  const updatedColumns = updateColumns(config.columns);
  const rows = getRows(data, updatedColumns);

  return (
    <DataTable>
      <DataTable.Header>
        {updatedColumns.map((columnHeader) => (
          <DataTable.Title
            key={columnHeader.id}
            numeric={columnHeader.type === 'number'}>
            {columnHeader.title}
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
                  {row[key]}
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
