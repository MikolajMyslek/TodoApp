import React, { FC } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {Dimensions} from 'react-native';


const styles = StyleSheet.create({
    text: { flex: 2, marginTop: -35, textAlign: "justify" },
    MidsomerImage: { flex: 1.3,width: 100, height: 130, marginLeft: 10, marginTop: -29, },
    nozeImage: { flex: 1, height: 130, marginTop: -26, marginRight: 10},
    LogoImage: { width: "100%", marginTop: -20, height: 155 ,borderRadius: 50},
    hollyImage: { flex: 1.1, height: 130, marginTop: -29, marginRight: 10},
    bolImage: { flex: 2, height: 130, marginTop: -29, marginRight: 10},
    tloImage: {position:"absolute", height:Dimensions.get('screen').height ,opacity:0.5     },
    row: {
      flexDirection: "row",
      paddingVertical: 25,
      paddingHorizontal: 20,
      width: "100%",
    }
   
  });

interface IPhotos {}

const Photos: FC<IPhotos> = (props) => {
  
  return (
    <View>
    <View>
    <Image
            source={require('../../assets/tlophotos.jpg')}
            style={styles.tloImage}
          />
          </View>
    <ScrollView stickyHeaderIndices={[1]} >
    
    <View>
      <View>
        <View style={styles.row}>
          <Image
            source={require('../../assets/LogoFilmy.jpg')}
            style={styles.LogoImage}
          />
        </View>
        <View style={styles.row}>
        <Image
            source={require('../../assets/noze.jpg')}
            style={styles.nozeImage}
          />
          <Text style={styles.text}>
          Na noże – amerykański film kryminalny z 2019 roku, napisany, wyprodukowany i wyreżyserowany przez Riana Johnsona. Na noże miał swoją światową premierę na Międzynarodowym Festiwalu Filmowym w Toronto 7 września 2019 roku       </Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>
        Morderstwa w Midsomer – serial detektywistyczny tworzony przez brytyjską telewizję. Akcja rozgrywa się w na pozór spokojnym fikcyjnym hrabstwie Midsomer. Na pozór, gdyż często zdarzają się tam tajemnicze morderstwa.
          </Text>
          <Image
            source={require('../../assets/Midsomer_Murders_Logo.jpg')}
            style={styles.MidsomerImage}
          />
        </View>
        <View style={styles.row}>
        <Image
            source={require('../../assets/holly.jpg')}
            style={styles.hollyImage}
          />
        
          <Text style={styles.text}>
          Pewnego razu... w Hollywood – amerykański komediodramat z 2019 roku w reżyserii Quentina Tarantino, który jest także autorem scenariusza. Film skupia się wokół Hollywood pod koniec lat 60. XX wieku oraz morderstw grupy Charlesa Mansona.          </Text>
        </View>
        <View style={styles.row}>
        <Image
            source={require('../../assets/bol.jpg')}
            style={styles.bolImage}
          />
        
          <Text style={styles.text}>
          Ból I blask – hiszpański film fabularny z 2019 roku w reżyserii i według scenariusza Pedro Almodóvara. W rolach głównych występują Antonio Banderas, Asier Etxeandia, Penélope Cruz, Julieta Serrano oraz Leonardo Sbaraglia. Film miał swoją światową premierę na 72.          </Text>
        </View>
      </View>
      </View>
      </ScrollView>
      </View>
  );
};

export default Photos;