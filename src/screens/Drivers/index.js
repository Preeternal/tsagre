import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getDrivers} from '../../state/thunks';
import {selectDrivers} from '../../state/drivers';
import {getQuantity} from '../../state/quantity';
import {DriverCard} from '../../components';
import {Loader} from '../../components/common';

const renderDriverCard = ({item}) => <DriverCard driverId={item.driverId} />;

const Drivers = () => {
  useEffect(() => {
    getDrivers();
  }, []);

  const drivers = useSelector(selectDrivers);

  const [currentPage, setCurrentPage] = useState(
    Object.values(drivers)?.length
      ? Math.ceil(Object.values(drivers)?.length / 20)
      : 1,
  );

  const driversQuantity = useSelector(getQuantity);

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
          keyExtractor={(item, index) => item.driverId}
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
