import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {VisualizationsView} from '../../components';

const VisualizationsViewWithNotifications = WithNotifications(
  VisualizationsView,
);

const VisualizationsContainer = (props) => {
  const {
    isLoading,
    error,
    success,
    data,
    fetchVisualizations,
    resetVisualizationsNotifications,
  } = props;

  console.log(props);

  useEffect(() => {
    fetchVisualizations();
  }, [fetchVisualizations]);

  return (
    <VisualizationsViewWithNotifications
      isLoading={isLoading}
      error={error}
      success={success}
      onDismiss={resetVisualizationsNotifications}
      visualizations={data}
    />
  );
};

const mapStateToProps = ({visualizations}) => ({
  isLoading: visualizations.isLoading,
  error: visualizations.error,
  success: visualizations.success,
  data: visualizations.data,
});

const mapDispatchToProps = {...actions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisualizationsContainer);
