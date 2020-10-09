import React, {useEffect, useCallback} from 'react';
import {FlatList, StyleSheet, Alert, View, Text} from 'react-native';
import {
  useSelector,
  //useDispatch
} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {fetchDriverStandings, fetchDrivers} from '../../api';
import {getDrivers, getStandings} from '../../state/thunks';

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
// import { Vacancy } from 'Interfaces';

// const renderVacancyCard = ({ item }) => (
//   <VacancyCard vacancy={item} />
// );

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
    getStandings('alonso');
  }, []);

  // const vacancies = useSelector(getVacancies);
  // const navigation = useNavigation();

  // const onPress = useCallback(() => {
  //   const companies = getCompanies(store.getState());
  //   if (Object.values(companies).length) {
  //     navigation.navigate('VacancyPosting');
  //   } else {
  //     Alert.alert('Сначала добавьте хотя-бы одно заведение');
  //   }
  // }, [navigation]);

  return (
    <>
      <Text>Hi</Text>
      {/* <FlatList
        data={Object.values(vacancies)}
        renderItem={renderVacancyCard}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => item.id.toString() + index}
        ListFooterComponent={View}
        ListFooterComponentStyle={styles.footer}
      />
      <Button onPress={onPress} /> */}
    </>
  );
};

export {Drivers};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  footer: {
    height: 130,
  },
});
