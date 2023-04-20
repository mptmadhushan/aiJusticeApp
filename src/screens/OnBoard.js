/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation}) {
  const [text, setText] = React.useState('');
  const [violationData, setResponse] = React.useState({});
  
  const onSubmitFormHandler = async () => {
    console.log('hello')
   
    try {
      const response = await axios.post('http://ec2-13-229-183-94.ap-southeast-1.compute.amazonaws.com:5006/pvd', {
        'story':text
      });
      if (response.status === 200) {
       console.log('done',response.data
       )
       setText('')
       setResponse(response.data)
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
   
    }
  };
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title2}>Ceylon LawMate</Text>
        <Text style={styles.title}>
          Bringing Data into the Sri Lankan Courtroom
        </Text>
        <Image
          style={{
            width: SIZES.width,
            maxHeight: 200,
            marginTop: SIZES.height * 0.05,
            resizeMode: 'cover',
          }}
          source={images.image1}
        />
        <Image
          style={{
            width: 200,
            maxHeight: 200,
            marginTop: SIZES.height * 0.05,
            resizeMode: 'contain',
          }}
          source={images.image2}
        />
        <Text style={styles.title}>
          An Intelligent Support for Citizens to Provide Judicial Guidance
          Bringing Data into the Sri Lankan Society
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* <Image
            style={{
              width: 200,
              maxHeight: 200,
              marginTop: SIZES.height * 0.2,
              resizeMode: 'contain',
            }}
            source={images.image4}
          />
          <Image
            style={{
              width: 200,
              maxHeight: 200,
              marginTop: SIZES.height * 0.2,
              resizeMode: 'contain',
            }}
            source={images.image6}
          /> */}
        </View>
        <Text style={styles.title2}>About</Text>
        <Text style={styles.title3}>The amount of data that is being recorded across all sectors and domains has been growing, and this tendency is likely to continue. While several sectors already make use of this data to advance their respective professions, the legal sector has even greater potential to benefit from it, specifically for jurisdictional purposes. The purpose of this study is to improve the administration of justice in Sri Lanka by providing assistance to key stakeholders in the field through the utilization of data pertaining to the country's various jurisdictions and legal systems</Text>
        <TextInput
        style={{borderWidth:1,borderRadius:5,width:SIZES.width *0.9,marginTop:15,borderColor:'#CDA589'}}
          multiline={true}
          numberOfLines={4}
          placeholder='type your story here'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
         <TouchableOpacity
          onPress={() => 
            onSubmitFormHandler()
          }
          style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
    

        </TouchableOpacity>
        <Text style={styles.title2}>Violation Data</Text>
   {   violationData?.violationData !== null ?  <View>
        <Text style={styles.title3}>Court : {violationData?.violationData?.Court}</Text>
        <Text style={styles.title3}>Document Should Bring : {violationData?.violationData?.DocumentShouldBring}</Text>
        <Text style={styles.title3}>Lawyers : {violationData?.violationData?.Lawyers}</Text>
        <Text style={styles.title3}>Suggetion : {violationData?.violationData?.Suggetion}</Text>
        <Text style={styles.title3}>violation Type : {violationData?.violationType}</Text>
        </View>:
        <Text style={styles.title3}>no-violation</Text>
      }
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.4,
    // backgroundColor: 'rgba(255,0,0,0.5)',
    height: SIZES.height * 0.6,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#CDA589',
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#CDA589',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: SIZES.height * 0.02,
    color: '#5C3C27',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },  title3: {
    marginTop: SIZES.height * 0.02,
    color: '#CDA589',
    fontSize: 14,
  paddingLeft:4,
  paddingRight:4,
    textAlign: 'center',
  },
});
