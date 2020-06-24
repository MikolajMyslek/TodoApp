import React, { FC } from 'react';
import {  View, ScrollView,Image} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';
import Colors from '../../constans/Colors';
import {  Text,  StyleSheet, } from "react-native";

const WelcomeText = styled.Text`
    margin: 10px 20px;
    font-size: 16px;
    color: ${Colors.black};
    text-align: center;
   
`;

const CustomImage = styled.Image`
    borderRadius:50px;
    width: 80px;
    height: 80px;
    margin: 50px;
`;
const styles = StyleSheet.create({
    
    
    tloImage: {position:"absolute", height:Dimensions.get('window').height ,opacity:0.3,    }
   
  });

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    const navigation = useNavigation();

    return ( 
        <View>
        <View>
        <Image
            source={require('../../assets/video.gif')}
            style={styles.tloImage}
             />
             
         </View>
        <ScrollView>
        
        <View>
        <CustomImage
                source={require('../../assets/images.jpg')}
            />
            <WelcomeText>Powstanie filmu wiązało się z odkryciem niedoskonałości ludzkiego wzroku i jego opóźnień w przetwarzaniu obrazu. W związku z tym powstały urządzenia „oszukujące” wzrok, które ciąg szybko zmieniających się nieruchomych obrazków przeobrażały w ruchomy obraz. Najwcześniejsze z nich to camera obscura; w XVIII i XIX w. powstały również takie urządzenia, jak fenakistiskop (1832 r.), zoetrop (1834 r.) i praksinoskop (1877 r.). Owe praktyki dziś zalicza się do wczesnej historii kina i nazywa jej prehistorią. W 1877 r. Hannibal Goodwin opracował taśmę celuloidową, co znacząco przyspieszyło rozwój techniki filmowej. Pierwsze, prymitywne filmy powstały orientacyjnie w latach 1887 i 1888, a ich autorem był francuski wynalazca Louis Le Prince; do innych pionierów sztuki filmowej należeli Max Skladanowsky oraz William Friese-Greene.

Pod koniec XIX w. powstało wiele eksperymentalnych urządzeń do wyświetlania filmów (m.in. kinetoskop autorstwa Thomasa Alvy Edisona z 1891 r.). Na początku XX w., w latach 1900-1915, w Stanach Zjednoczonych i Europie pojawiło się łącznie kilkadziesiąt rodzajów urządzeń do rejestracji i demonstracji filmów ze zsynchronizowanym dźwiękiem. Przykładami mogą być: chronograf (L. Gaumont, 1902 r.), biofon (O. Messter, 1903 r.) i kamerofon (USA, 1908 r.). Przy pomocy tych urządzeń, w Europie (w Niemczech, Francji, Włoszech i Danii) do 1914 r., powstało około 1500 krótkich filmów udźwiękowionych. Wszystkie te próby nie przyniosły jednak ostatecznie rezultatów zadowalających z technicznego punktu widzenia. W latach 1907-1913 kilkadziesiąt takich urządzeń skonstruowano i wprowadzono na rynek amerykański, z takim skutkiem jak w Europie.

</WelcomeText>
            
            
        </View>
        </ScrollView>
        </View>
    );
};

export default Home;