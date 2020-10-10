import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, StyleSheet, Alert, View, Text} from 'react-native';
import {
  useSelector,
  //useDispatch
} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getDrivers, getStandings} from '../../state/thunks';
import {getDriversSelector} from '../../state/drivers';
import {UserCard} from '../../components';

// import {
//   fetchMyUser,
//   fetchMyCompanies,
//   fetchMyVacancies,
//   fetchMyVacanciesResponses,
// } from '../../state/sagas';
// import { store } from '../../state/store';
// import { getCompanies } from '../../state/companies';
// import { getVacancies } from '../../state/vacancies';
// // import { responseViewed, getResponses } from '../../state/responses';
// import { VacancyCard } from '../../components';
// import { FooterButton, ButtonText } from './styles';

const renderDriverCard = ({item}) => <UserCard driver={item} />;

// const Button = ({ onPress }) => {
//   return (
//     <FooterButton type="blue" onPress={onPress}>
//       <ButtonText>Опубликовать новую вакансию</ButtonText>
//     </FooterButton>
//   );
// };

const Drivers = () => {
  useEffect(() => {
    getDrivers();
    getStandings('abate');
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const drivers = useSelector(getDriversSelector);

  // const navigation = useNavigation();

  // const onPress = useCallback(() => {
  //   const companies = getCompanies(store.getState());
  //   if (Object.values(companies).length) {
  //     navigation.navigate('VacancyPosting');
  //   } else {
  //     Alert.alert('Сначала добавьте хотя-бы одно заведение');
  //   }
  // }, [navigation]);

  const loadMoreDrivers = useCallback(() => {
    getDrivers(currentPage * 20);
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  console.log('page', currentPage);
  console.log('drivers count', Object.values(drivers).length);

  return (
    <>
      <FlatList
        data={Object.values(drivers)}
        renderItem={renderDriverCard}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => item.driverId.toString() + index}
        ListFooterComponent={View}
        ListFooterComponentStyle={styles.footer}
        onEndReached={loadMoreDrivers}
      />
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
