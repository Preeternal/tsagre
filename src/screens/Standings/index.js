import React, {useEffect, useCallback} from 'react';

import {getStandings} from '../../state/thunks';
import {Card} from '../../components/common';
import {DriverInfo} from '../../components';
import {FooterButton, ButtonText} from './styles';

const Standings = ({route}) => {
  const {driver} = route.params;
  useEffect(() => {
    if (driver?.driverId) {
      getStandings(driver?.driverId);
    }
  }, [driver]);

  return (
    <>
  {/* {typeof drivers === 'object' ? ( */}
        <FlatList
          data={Object.values(drivers)}
          renderItem={renderDriverCard}
          contentContainerStyle={styles.container}
          keyExtractor={(item, index) => item.driverId.toString() + index}
          ListFooterComponent={View}
          ListFooterComponentStyle={styles.footer}
          onEndReached={loadMoreDrivers}
        />
      {/* ) : (
        <Loader />
      )} */}
  );
};

export {Standings};
