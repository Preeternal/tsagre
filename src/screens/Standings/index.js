import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, FlatList, View} from 'react-native';

import {getStandingById} from '../../state/standings';
import {StandingCard} from '../../components';
import {Loader} from '../../components/common';

const renderStandingCard = ({item}) => <StandingCard standing={item} />;

export const Standings = ({route}) => {
  const {driverId} = route.params;
  const standings = useSelector(getStandingById(driverId));
  return (
    <>
      {standings?.StandingsLists?.length ? (
        <FlatList
          data={standings?.StandingsLists}
          renderItem={renderStandingCard}
          contentContainerStyle={styles.container}
          keyExtractor={(item, index) => driverId + index}
          ListFooterComponent={View}
          ListFooterComponentStyle={styles.footer}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  footer: {
    height: 10,
  },
});
