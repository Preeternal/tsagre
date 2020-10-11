import React, {Fragment} from 'react';

import {
  SeasonContainer,
  Season,
  Round,
  DriverStandings,
  StandingsInfo,
  Info,
} from './styles';
import {Card} from '../common';
import {DriverInfo} from '../DriverInfo';

export const StandingCard = ({standing}) => {
  const driverStandings = standing.DriverStandings;
  return (
    <>
      <SeasonContainer>
        <Season>{`season: ${standing.season || ''}`}</Season>
        <Round>{`round: ${standing.round || ''}`}</Round>
      </SeasonContainer>
      {driverStandings && <DriverStandings>Driver standings:</DriverStandings>}

      {driverStandings &&
        driverStandings.map((item, index) => (
          <Fragment key={index}>
            <StandingsInfo>
              <Info>{`position: ${item.position}`}</Info>
              <Info>{`points: ${item.points}`}</Info>
              <Info>{`wins: ${item.wins}`}</Info>
            </StandingsInfo>
            {item.Constructors.length && (
              <DriverStandings>
                {item.Constructors.length > 1 ? 'Constructors' : 'Constructor'}
              </DriverStandings>
            )}
            {item.Constructors &&
              item.Constructors.map((itm, ind) => (
                <Card key={ind}>
                  <DriverInfo
                    driver={{
                      ...itm,
                      givenName: itm.name,
                      driverId: itm.constructorId,
                    }}
                    disabled={false}
                  />
                </Card>
              ))}
          </Fragment>
        ))}
    </>
  );
};
