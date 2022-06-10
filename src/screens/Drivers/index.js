import React, {useEffect, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Loader} from '../../components/common';

import {getDrivers} from '../../state/drivers';
import {selectDriversAllFields} from '../../state/drivers';

import {DriverCard} from '../../components';
import {useDispatch} from 'react-redux';

const limit = 20;

const renderDriverCard = ({item}) => <DriverCard driverId={item.driverId} />;

const Drivers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const {loading, offset, total, data: drivers} = useSelector(
    selectDriversAllFields,
  );

  const loadMoreDrivers = useCallback(() => {
    if (!loading && total > offset) {
      dispatch(getDrivers({offset: offset + limit, limit: limit}));
    }
  }, [dispatch, loading, offset, total]);

  return (
    <>
      <FlatList
        data={drivers}
        renderItem={renderDriverCard}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => item.driverId}
        onEndReached={loadMoreDrivers}
      />
      {!!loading && <Loader />}
    </>
  );
};

export {Drivers};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 10,
  },
});
