import React, { FC } from 'react';
import {  View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 10px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    borderRadius:50px;
    width: 80px;
    height: 80px;
    margin: 50px;
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return ( 
        <ScrollView>
        <View>
        <CustomImage
                source={require('../../assets/logo.png')}
            />
            <WelcomeText>Spotkanie z Wilkami będzie dla Lewandowskiego okazją do wyrównania także innego rekordu – zdobycia bramek przeciwko szesnastu klubom w trakcie jednego sezonu. Do tej pory dwukrotnie dokonał tego Gerd Mueller, raz taka sztuka udała się Ailtonowi. Polak ma na rozkładzie piętnaście drużyn, najlepiej radził sobie przeciwko Schalke zdobywając cztery bramki.

Dogonić legendy

31-letni napastnik w tym sezonie jest w niesamowitej formie. Jeśli zdoła utrzymać ją w następnych rozgrywkach, uda mu się dogonić legendy. Obecnie Robert Lewandowski jest trzecim najskuteczniejszym graczem Bundesligi w historii z 235 bramkami na koncie. Żaden z grających obecnie piłkarzy nie może równać się z napastnikiem Bayernu – lepsi od niego są tylko Klaus Fischer i Gerd Mueller. 365 bramek innej legendy Die Roten wydaje się poza czyimkolwiek zasięgiem, ale już do Fischera Polakowi brakuje ”zaledwie” 33 trafień – tyle Lewandowskiemu udało się zdobyć w obecnym sezonie.

Fascynująca może być też walka o miejsce na podium najlepszych strzelców Ligi Mistrzów. Obecnie trzecie miejsce wśród najskuteczniejszych graczy tych rozgrywek zajmuje Raul. Osiem bramek mniej mają Robert Lewandowski i Karim Benzema. W znacznie lepszej sytuacji jest Polak, którego Bayern jest jedną nogą w ćwierćfinale Ligi Mistrzów po wygraniu z Chelsea 3:0. Francuz w tym sezonie może mieć mniej okazji na poprawienie imponujących statystyk, bowiem Real Madryt w pierwszym spotkaniu 1/8 finału przegrał na własnym stadionie z Manchesterem City 1:2.

</WelcomeText>
            
            
        </View>
        </ScrollView>
    );
};

export default Home;