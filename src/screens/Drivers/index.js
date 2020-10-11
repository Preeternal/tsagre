import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getDrivers} from '../../state/thunks';
import {getDriversSelector} from '../../state/drivers';
import {getQuantity} from '../../state/quantity';
import {DriverCard} from '../../components';
import {Loader} from '../../components/common';

const renderDriverCard = ({item}) => <DriverCard driver={item} />;

const Drivers = () => {
  useEffect(() => {
    getDrivers();
    reloadPersistedDrivers();
  }, [reloadPersistedDrivers]);

  const drivers = useSelector(getDriversSelector);

  const [currentPage, setCurrentPage] = useState(
    Object.values(drivers)?.length
      ? parseInt(Object.values(drivers)?.length / 20, 10)
      : 1,
  );

  const driversQuantity = useSelector(getQuantity);

  const reloadPersistedDrivers = useCallback(() => {
    if (typeof drivers === 'object') {
      getDrivers(0, Object.values(drivers).length);
    }
  }, [drivers]);

  const loadMoreDrivers = useCallback(() => {
    if (driversQuantity > currentPage * 20) {
      getDrivers(currentPage * 20);
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, driversQuantity]);

  console.log(currentPage, Object.values(drivers).length);

  return (
    <>
      {typeof drivers === 'object' ? (
        <FlatList
          data={Object.values(drivers)}
          renderItem={renderDriverCard}
          contentContainerStyle={styles.container}
          keyExtractor={(item, index) => item.driverId.toString() + index}
          ListFooterComponent={View}
          ListFooterComponentStyle={styles.footer}
          onEndReached={loadMoreDrivers}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export {Drivers};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  footer: {
    height: 10,
  },
});
