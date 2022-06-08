import React, {useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, FlatList} from 'react-native';

import {selectStandingById} from '../../state/standings';
import {StandingCard} from '../../components';

import {getStandings} from '../../state/thunks';
import {Loader} from '../../components/common';
import {useDispatch} from 'react-redux';

const limit = 20;
const renderStandingCard = ({item}) => <StandingCard standing={item} />;

export const Standings = ({route}) => {
  const {driverId} = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (driverId) {
      dispatch(getStandings(driverId));
    }
  }, [dispatch, driverId]);

  const {loading, offset, total, data: standings} = useSelector(
    selectStandingById(driverId),
  );

  const loadMoreDrivers = useCallback(() => {
    if (total > offset) {
      dispatch(getStandings(driverId, {offset: offset + limit, limit: limit}));
    }
  }, [dispatch, driverId, offset, total]);

  return (
    <>
      <FlatList
        data={standings}
        renderItem={renderStandingCard}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMoreDrivers}
      />
      {!!loading && <Loader />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 10,
  },
});
